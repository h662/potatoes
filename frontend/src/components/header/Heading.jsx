import styles from "./heading.module.scss";
import { MyLinks } from "../nav/components/MyLinks";
import WalletLogIn from "./WalletLogin";

export const Heading = ({ account, setAccount }) => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <WalletLogIn account={account} setAccount={setAccount} />
    </header>
  );
};
