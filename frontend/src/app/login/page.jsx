"use client";

import styles from "./login.module.scss";
import { Reveal } from "../../components/utils/Reveal.jsx";
import { OutlineButton } from "../../components/buttons/OutlineButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";
import { useAppDispatch, useAppState } from "@/lib/AppContext";
import { useEffect } from "react";

export default function Login() {
  const { account } = useAppState();

  const dispatch = useAppDispatch();

  const setAccount = (account) => dispatch({ type: "SET_ACCOUNT", account });

  const router = useRouter();

  useEffect(() => {
    setAccount("1234");
  }, []);

  useEffect(() => console.log(account), [account]);

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
            <OutlineButton>Wallet Login</OutlineButton>
          </Reveal>
        </div>
        <Reveal>
          <h1 className={styles.title}>
            Familiar Methods<span>.</span>
          </h1>
        </Reveal>
        <div className="mt-8 flex gap-4">
          <Reveal>
            <button className="bg-red-100 w-24 h-24 rounded-full">
              <Image src="/images/ico_sns_naver@2x.png" fill alt="naver" />
            </button>
          </Reveal>
          <Reveal>
            <button className="bg-red-100 w-24 h-24 rounded-full">
              <Image src="/images/ico_sns_kakao@2x.png" fill alt="kakao" />
            </button>
          </Reveal>
          <Reveal>
            <button className="bg-red-100 w-24 h-24 rounded-full">
              <Image src="/images/ico_sns_google@2x.png" fill alt="google" />
            </button>
          </Reveal>
          <Reveal>
            <button className="bg-red-100 w-24 h-24 rounded-full">
              <Image src="/images/ico_sns_apple@2x.png" fill alt="apple" />
            </button>
          </Reveal>
        </div>
      </div>
    </>
  );
}
