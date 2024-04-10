"use client";

import React from "react";
import styled from "styled-components";

import { buttonReset, TotalRecapDesktop } from "@/app/components/style";

interface PaymentContainerProps {
  totalPrice: number;
  totalTicketCount: number;
  className?: string;
}

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  totalPrice,
  totalTicketCount,
  className,
}) => {
  return (
    <div className={className}>
      <TotalRecapDesktop>
        <p>Total</p>
        <p>{totalPrice}&euro;</p>
      </TotalRecapDesktop>
      <div>
        <button
          type="submit"
          name="confirmation-button"
          form="checkout-info-form"
          disabled={totalTicketCount === 0}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default styled(PaymentContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #353535;
  padding: 20px;
  margin-top: 10px;
  border-radius: 20px;

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
  }

  button {
    ${buttonReset};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 15px 24px;
    border-radius: 99em;
    line-height: 1;

    background: var(--accent);
    color: var(--background-black);

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.3;
    }
  }
`;
