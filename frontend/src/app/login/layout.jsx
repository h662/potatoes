import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import Login from "./page";

export default async function Layout() {
  let session = await getServerSession(authOptions);
  let names = "";
  if (session) {
    names = session.user.name;
  }
  console.log(names);
  return <Login names={names} />;
}
