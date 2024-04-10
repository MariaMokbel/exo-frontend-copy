"use client";

import React, { useState } from "react";
import styled from "styled-components";

import NumberInput from "@/app/components/NumberInput";
import PaymentContainer from "@/app/components/PaymentContainer";
import {
  TicketPicker,
  TicketPickersContainer,
  TicketPrice,
  UnderlinedTitle,
} from "@/app/components/style";
import { TicketCollection } from "@/app/models/TicketCollection";

interface CheckoutProps {
  ticketCollections: TicketCollection[];
  className?: string;
}

const Checkout: React.FC<CheckoutProps> = ({ ticketCollections, className }) => {
  const [ticketsCount, setTicketsCount] = useState<Map<string, number>>(new Map());

  const totalTicketCounts = Array.from(ticketsCount.values()).reduce(
    (acc: number, val: number) => acc + val,
    0,
  );

  const totalPrice = ticketCollections
    .map((ticketCollection) =>
      ticketsCount && ticketsCount.get(ticketCollection.id) !== undefined
        ? ticketsCount.get(ticketCollection.id)! * ticketCollection.price
        : 0,
    )
    .reduce((acc, price) => acc + price, 0);

  const modifyTicketsCount = (id: string, increment: number) => {
    const newTicketsCount = new Map(ticketsCount);
    const newCount =
      ticketsCount && ticketsCount.get(id) !== undefined ? ticketsCount.get(id)! + increment : 1;
    setTicketsCount(newTicketsCount.set(id, newCount));
  };

  return (
    <form
      className={className}
      id="checkout-info-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <UnderlinedTitle>NFT Paris</UnderlinedTitle>
      <TicketPickersContainer>
        {ticketCollections.map((tc, index) => (
          <TicketPicker key={tc.id}>
            <div>
              <p>{tc.name}</p>
              {tc.price !== 0 ? (
                <TicketPrice>{tc.price}&euro;</TicketPrice>
              ) : (
                <TicketPrice>Free</TicketPrice>
              )}{" "}
            </div>
            <NumberInput
              aria-label="Choose ticket quantities"
              id="tickets-count"
              name="ticketsCount"
              value={ticketsCount.get(tc.id)! || 0}
              max={tc.maxCount}
              min={0}
              minusDisabled={ticketsCount.get(tc.id) === undefined || ticketsCount.get(tc.id) === 0}
              plusDisabled={
                ticketsCount.get(tc.id) !== undefined && ticketsCount.get(tc.id) === tc.maxCount
              }
              onClickMinus={() => modifyTicketsCount(tc.id, -1)}
              onClickPlus={() => modifyTicketsCount(tc.id, 1)}
            />
          </TicketPicker>
        ))}
      </TicketPickersContainer>

      <PaymentContainer totalPrice={totalPrice} totalTicketCount={totalTicketCounts} />
    </form>
  );
};

export default styled(Checkout)`
  max-width: 1024px;
  width: 100%;

  margin-top: 60px;
`;
