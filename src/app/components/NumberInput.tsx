import React from "react";
import styled from "styled-components";

import { baseNumberInputStyle } from "@/app/components/style";

interface NumberInputProps {
  id: string;
  onClickMinus: () => void;
  onClickPlus: () => void;
  minusDisabled: boolean;
  plusDisabled: boolean;
  className?: string;
}

const NumberInput: React.FC<NumberInputProps & React.HTMLProps<HTMLInputElement>> = ({
  className,
  id,
  onClickMinus,
  onClickPlus,
  minusDisabled,
  plusDisabled,
  ...others
}) => {
  return (
    <div className={className}>
      <button onClick={onClickMinus} type="button" disabled={minusDisabled}>
        -
      </button>
      <input type="number" id={id} {...others} disabled />
      <button type="button" onClick={onClickPlus} disabled={plusDisabled}>
        +
      </button>
    </div>
  );
};

export default styled(NumberInput)`
  ${baseNumberInputStyle};
`;
