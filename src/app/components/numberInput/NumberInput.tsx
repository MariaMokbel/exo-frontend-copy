import React from "react";
import styled from "styled-components";

import { baseNumberInputStyle } from "@/app/components/style";
import { NumberInputProps } from "./types";

const NumberInput: React.FC<
  NumberInputProps & React.HTMLProps<HTMLInputElement>
> = ({
  className,
  id,
  onClickMinus,
  onClickPlus,
  minusDisabled,
  plusDisabled,
  ...props
}) => {
  return (
    <div className={className}>
      <button onClick={onClickMinus} type="button" disabled={minusDisabled}>
        -
      </button>
      <input type="number" id={id} {...props} disabled />
      <button type="button" onClick={onClickPlus} disabled={plusDisabled}>
        +
      </button>
    </div>
  );
};

export default styled(NumberInput)`
  ${baseNumberInputStyle};
`;
