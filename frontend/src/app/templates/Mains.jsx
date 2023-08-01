"use client";

import { useEffect } from "react";
import Main from "../../components/home/Home";
import {} from "next/navigation";
import { useRouter } from "next/navigation";

export default function Mains() {
  const router = useRouter();

  useEffect(() => {
    router.push("/#home");
  }, []);

  return <Main />;
}
