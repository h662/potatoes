"use client";

import Main from "../../components/home/Home";
import { useState } from "react";

export default function Mains() {
  const [account, setAccount] = useState("");
  return <Main account={account} setAccount={setAccount} />;
}
