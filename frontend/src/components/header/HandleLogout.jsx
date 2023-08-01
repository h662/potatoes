"use client";

import { signOut } from "next-auth/react";

export function HandleLogout() {
  signOut({ callbackUrl: "https://potatoes-tau.vercel.app/" });
}
