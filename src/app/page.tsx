import Checkout from "@/app/components/checkout/Checkout";

import { ticketCollections } from "./data/ticket-collections";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Checkout ticketCollections={ticketCollections} />
    </main>
  );
}
