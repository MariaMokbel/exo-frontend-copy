"use client";

import React, { useMemo } from "react";
import styled from "styled-components";

import NumberInput from "@/app/components/numberInput/NumberInput";
import PaymentContainer from "@/app/components/paymentContainer/PaymentContainer";
import { UnderlinedTitle } from "@/app/components/style";
import PromoCode from "../promoCode/PromoCode";
import { TicketPicker, TicketPickersContainer, TicketPrice } from "./style";
import { CheckoutProps } from "./types";
import useTicketCounter from "./effects";

const Checkout: React.FC<CheckoutProps> = ({
  ticketCollections,
  className,
}) => {
  const { ticketsCount, totalTicketCounts, modifyTicketsCount } =
    useTicketCounter(new Map());

  const totalPrice = useMemo(
    () =>
      ticketCollections
        .map((ticketCollection) =>
          ticketsCount.get(ticketCollection.id) !== undefined
            ? ticketsCount.get(ticketCollection.id)! * ticketCollection.price
            : 0,
        )
        .reduce((acc, price) => acc + price, 0),
    [ticketCollections, ticketsCount],
  );

  return (
    <div className={className}>
      {/* TODO: Refactor this code to use a form that will not wrap another form */}
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
              minusDisabled={
                ticketsCount.get(tc.id) === undefined ||
                ticketsCount.get(tc.id) === 0
              }
              plusDisabled={
                ticketsCount.get(tc.id) !== undefined &&
                ticketsCount.get(tc.id) === tc.maxCount
              }
              onClickMinus={() => modifyTicketsCount(tc.id, -1)}
              onClickPlus={() => modifyTicketsCount(tc.id, 1)}
            />
          </TicketPicker>
        ))}
      </TicketPickersContainer>
      <PromoCode />
      <PaymentContainer
        totalPrice={totalPrice}
        totalTicketCount={totalTicketCounts}
      />
    </div>
  );
};

export default styled(Checkout)`
  max-width: 1024px;
  width: 100%;

  margin-top: 60px;
`;
