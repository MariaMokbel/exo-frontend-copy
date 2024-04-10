import styled, { css } from "styled-components";

export const buttonReset = css`
  text-decoration: none;
  letter-spacing: inherit;
  font: inherit;
  border-radius: 0;
  appearance: none;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;
  color: inherit;
  text-align: inherit;
  text-transform: inherit;
`;

export const UnderlinedTitle = styled.h1`
  font-size: 40px;
  line-height: calc(52 / 48);
  white-space: pre-line;

  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid #353535;
`;

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

export const baseNumberInputStyle = css`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    font-size: 18px;
    border: none;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    background-color: var(--background-black);
    color: var(--white);

    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    width: 3ch;
    -moz-appearance: textfield;
  }

  button {
    ${buttonReset};
    height: 30px;
    width: 30px;
    padding: 8px;
    border-radius: 500px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;

    transition:
      box-shadow 0.2s,
      background 0.2s,
      color 0.2s;
    box-shadow: inset 0 0 0 1px var(--accent);
    color: var(--accent);

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.3;
    }
  }
`;

export const TotalRecapDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  p:nth-child(2) {
    font-size: 40px;
    color: var(--accent);
  }
`;
