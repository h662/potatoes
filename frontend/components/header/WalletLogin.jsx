import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { OutlineButton } from "../buttons/OutlineButton";
import { AiOutlineLogin } from "react-icons/ai";
import Link from "next/link";

export default function WalletLogIn({ account, setAccount }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (res) => {
    setAccount(res[0]);
    setIsLoggedIn(true);
    localStorage.setItem("walletAddress", res[0]);
  };

  const onClickAccount = async () => {
    if (!window.ethereum) {
      toast.error("메타마스크 설치가 필요합니다.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const res = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    handleLogin(res);

    try {
      const accounts = await toast.promise(
        window.ethereum.enable(),
        {
          pending: "Metamask 지갑 연동 중",
        },
        { closeButton: true },
        { position: toast.POSITION.TOP_CENTER }
      );
      setAccount(accounts[0]);
      localStorage.setItem("walletAddress", accounts[0]);
      toast.success(`${accounts[0].slice(0, 13)}...님 환영합니다.`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch {
      toast.error("로그인 실패! 다시 시도해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const onClickModal = () => {
    setIsOpen(true);
  };

  const handleLogout = () => {
    toast.success("로그아웃 되었습니다.", {
      position: toast.POSITION.TOP_CENTER,
    });
    alert("로그아웃 되었습니다.");
    setAccount("");
    setIsLoggedIn(false);
    localStorage.removeItem("walletAddress");
    window.location.reload();
  };

  async function handleDone() {
    if (account) {
      toast.warn("엇 ..또 로그인 하실려구요?!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
  }

  useEffect(() => {
    if (!window.ethereum) {
      return;
    }

    const handleChangeAccounts = () => {
      if (!account) {
        return;
      }

      const changedAccount = window.ethereum?.selectedAddress;

      if (account !== changedAccount) {
        toast.success(
          `${changedAccount.slice(0, 5)}..계정이 바뀌셨군요 ㅎㅎ!!`,
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
        setAccount(changedAccount);
        localStorage.setItem("walletAddress", changedAccount);
      }
    };

    window.ethereum?.on("accountsChanged", handleChangeAccounts);
    return () => {
      window.ethereum?.removeListener("accountsChanged", handleChangeAccounts);
    };
  }, [account, setAccount]);

  useEffect(() => {
    const storedWalletAddress = localStorage.getItem("walletAddress");
    if (storedWalletAddress) {
      setAccount(storedWalletAddress);
      setIsLoggedIn(true);
    }
  }, [setAccount]);

  useEffect(() => {
    if (!window.ethereum) {
      return;
    }

    const networkObj = {
      1001: "바오밥 테스트넷",
      8217: "메인넷",
      1: "이더리움 메인넷",
      5: "고얼리 테스트넷",
      80001: "뭄바이 테스트넷",
      137: "폴리곤 메인넷",
    };

    const handleNetworkChanged = () => {
      setAccount("");
      setIsLoggedIn(false);
      localStorage.removeItem("walletAddress");
      toast.warn(
        `네트워크가 ${
          networkObj[window.ethereum.networkVersion]
        }으로 바뀌었습니다. 다시 로그인 해주세요.`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    };

    window.ethereum?.on("networkChanged", handleNetworkChanged);
    return () => {
      window.ethereum?.removeListener("networkChanged", handleNetworkChanged);
    };
  }, [setAccount]);

  // return (
  //   <>
  //     {isLoggedIn ? (
  //       <>
  //         <div className="flex items-center justify-between">
  //           <OutlineButton onClick={handleDone}>
  //             {account.substring(0, 4)}...
  //             {account.substring(account.length - 4)}
  //           </OutlineButton>
  //           <div className="ml-10">
  //             <OutlineButton onClick={handleLogout}>로그아웃</OutlineButton>
  //           </div>
  //         </div>
  //       </>
  //     ) : (
  //       <OutlineButton onClick={onClickAccount}>Wallet Login</OutlineButton>
  //     )}
  //   </>
  // );

  return (
    <Link href="/login">
      <OutlineButton onClick={onClickModal}>
        <AiOutlineLogin className="inline-block mr-4 text-3xl" />
        Login
      </OutlineButton>
    </Link>
  );
}
