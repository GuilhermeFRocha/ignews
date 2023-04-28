import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ActiveLink } from "../ActiveLink";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width={110} height={31} />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <p>Home</p>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <p>Posts</p>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
