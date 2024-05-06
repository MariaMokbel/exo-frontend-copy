import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { PromoCodeRequest } from "@/app/models/promoCode";
import { Button, InputText } from "@/app/components/style";
import { PromoCodeFormProps } from "./types";
import { PromoCodeFormWrapper } from "./styles";
import { BiLoader } from "react-icons/bi";

const PromoCodeForm: React.FC<PromoCodeFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const { register, handleSubmit, formState } = useForm<PromoCodeRequest>();
  const onRhfSubmit: SubmitHandler<PromoCodeRequest> = (data) => {
    onSubmit(data);
  };

  return (
    <PromoCodeFormWrapper onSubmit={handleSubmit(onRhfSubmit)}>
      <InputText
        type="text"
        id="promoCode"
        placeholder="Promo code"
        {...register("promoCode", { required: true })}
      />
      <Button disabled={!formState.isValid || isLoading} type="submit">
        {isLoading && <BiLoader />} Apply
      </Button>
    </PromoCodeFormWrapper>
  );
};
export default PromoCodeForm;
