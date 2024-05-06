import styled from "styled-components";
import { buttonReset } from "../style";

export const HasPromoCodeButton = styled.button`
  ${buttonReset};
  pointer: cursor;
  &:hover {
    text-decoration: underline;
  }
`;

export const PromoCodeWrapper = styled.div`
  padding: 16px 0;
`;

export const ActivePromoCode = styled.div`
  padding: 12px 12px 8px;
  background: #212121;
  text: var(--white);
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;

  & .check-icon {
    font-size: 20px;
    fill: green;
  }

  & .close-icon {
    fill: white;
    font-size: 20px;
  }

  & button {
    ${buttonReset};
    margin-left: auto;
  }
`;
