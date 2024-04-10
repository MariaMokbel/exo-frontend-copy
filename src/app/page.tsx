import Checkout from "@/app/components/Checkout";
import { TicketCollection } from "@/app/models/TicketCollection";

import styles from "./page.module.css";

export default function Home() {
  const ticketCollections: TicketCollection[] = [
    {
      id: "firsticketcollection",
      name: "Standard Ticket",
      price: 20,
      maxCount: 5,
    },
    {
      id: "secondticketcollection",
      name: "VIP",
      price: 100,
      maxCount: 2,
    },
    {
      id: "thirdticketcollection",
      name: "Student Ticket",
      price: 0,
      maxCount: 1,
    },
  ];

  return (
    <main className={styles.main}>
      <Checkout ticketCollections={ticketCollections} />
    </main>
  );
}
