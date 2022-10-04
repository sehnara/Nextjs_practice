import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <ul>
        <li>
          <a href="/sub">profile</a>
        </li>
        <li>
          <Link href={'./sub'}>profile2</Link>
        </li>
      </ul>
    </div>
  );
}
