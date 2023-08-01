import { useAppState } from "@/lib/AppContext";
import { NFT_CONTRACT_ADDRESS, nftContract } from "../../web3.config";

export default function Minting() {
  const { account } = useAppState();

  const onClickMint = async () => {
    if (!account) {
      alert("ERROR: 메타마스크 지갑을 연결해주세요!");
      return;
    }

    if (window.ethereum.networkVersion !== "80001") {
      alert("경고! 현재 네트워크가 Mumbai network가 아닙니다.");
      return;
    }

    try {
      const result = await nftContract.methods.mintNft().send({
        to: NFT_CONTRACT_ADDRESS,
        from: account,
      });
      if (result != null) {
        console.log(result);
        alert("민팅에 성공하였습니다.");
      }
    } catch (error) {
      console.log(error);
      alert("민팅에 실패하였습니다.");
    }
  };

  return (
    <button
      className="mt-20 bg-main text-black rounded-full text-4xl font-bold p-7"
      onClick={onClickMint}
    >
      MINT
    </button>
  );
}
