export interface NumberInputProps {
  id: string;
  onClickMinus: () => void;
  onClickPlus: () => void;
  minusDisabled: boolean;
  plusDisabled: boolean;
  className?: string;
}
