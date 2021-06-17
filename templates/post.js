import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Post({ children, frontMatter }) {
  const { title } = frontMatter;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
      <div>{children}</div>
      <p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </p>
    </div>
  );
}
