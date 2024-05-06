import { TicketCollection } from "../models/TicketCollection";

export const ticketCollections: TicketCollection[] = [
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
