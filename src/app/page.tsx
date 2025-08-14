'use client';

import { Button } from "@mui/material";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      oi
      <Button variant="contained" onClick={() => router.push("/produtos")}>Clique aqui!</Button>
    </div>
  );
}
