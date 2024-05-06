import { styled } from "styled-components";

export const TicketPickersContainer = styled.div`
  padding-top: 20px;
  display: grid;
  grid-gap: 1.2rem;
`;

export const TicketPicker = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TicketPrice = styled.p`
  font-size: 18px;
  color: var(--accent);
`;
