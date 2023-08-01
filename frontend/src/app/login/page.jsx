"use client";

import styles from "./login.module.scss";
import { Reveal } from "../../components/utils/Reveal.jsx";
import { OutlineButton } from "../../components/buttons/OutlineButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";
import { useAppDispatch, useAppState } from "@/lib/AppContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

export default function Login({ names }) {
  const { account } = useAppState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useAppDispatch();

  const setAccount = (account) => dispatch({ type: "SET_ACCOUNT", account });

  const router = useRouter();

  // useEffect(() => {
  //   setAccount("1234");
  // }, []);

  // useEffect(() => console.log(account), [account]);

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
      router.push("/#home");
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
  }, [account]);

  useEffect(() => {
    const storedWalletAddress = localStorage.getItem("walletAddress");
    if (storedWalletAddress) {
      setAccount(storedWalletAddress);
      setIsLoggedIn(true);
    }
  }, [account]);

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
  }, [account]);

  useEffect(() => {
    setAccount(names);
  }, [account]);

  useEffect(() => {
    if (account) {
      router.push("/#home");
    }
  }, [account]);

  return (
    <>
      <button
        className="fixed top-8 md:top-32 left-16 md:left-64 text-6xl"
        onClick={() => router.push("/#home")}
      >
        <IoArrowBackOutline />
      </button>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Reveal>
          <h1 className={styles.title}>
            Hello, Web3 User<span>.</span>
          </h1>
        </Reveal>
        <div className="mt-8 mb-32">
          <Reveal>
            <OutlineButton onClick={onClickAccount}>Wallet Login</OutlineButton>
          </Reveal>
        </div>
        <Reveal>
          <h1 className={styles.title}>
            Familiar Methods<span>.</span>
          </h1>
        </Reveal>
        <div className="mt-8 flex gap-4">
          <Reveal>
            <button
              className="w-24 h-24 rounded-full"
              onClick={() => {
                signIn("naver");
                // router.push("/#home");
              }}
            >
              <Image src="/images/ico_sns_naver@2x.png" fill alt="naver" />
            </button>
          </Reveal>
          <Reveal>
            <button
              className="w-24 h-24 rounded-full"
              onClick={() => {
                signIn("kakao");
              }}
            >
              <Image src="/images/ico_sns_kakao@2x.png" fill alt="kakao" />
            </button>
          </Reveal>
          <Reveal>
            <button
              className="w-24 h-24 rounded-full"
              onClick={() => {
                signIn("google");
              }}
            >
              <Image src="/images/ico_sns_google@2x.png" fill alt="google" />
            </button>
          </Reveal>
        </div>
      </div>
    </>
  );
}
