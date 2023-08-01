import { destroyCookie } from "nookies";

export default async function handler(req, res) {
  // 쿠키를 제거하는 작업
  destroyCookie({ res }, "__Secure-next-auth.session-token");

  // 로그아웃 후 리다이렉트를 원하는 페이지로 설정
  res.writeHead(302, {
    Location: "/https://potatoes-tau.vercel.app/api/auth/callback/naver",
  });
  res.end();
}
