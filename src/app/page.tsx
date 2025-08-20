'use client';

import { Button } from "@mui/material";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <Header />
      <SideMenu />
      oi
      <Button variant="contained" onClick={() => router.push("/dashboard")}>Clique aqui!</Button>
    </div>
  );
}
