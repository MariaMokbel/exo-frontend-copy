import React, { useState } from "react";
import { IoPricetagOutline } from "react-icons/io5";
import { BiCheckCircle } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import { PromoCodeRequest } from "@/app/models/promoCode";
import { ActivePromoCode, HasPromoCodeButton, PromoCodeWrapper } from "./style";
import PromoCodeForm from "../promoCodeForm/PromoCodeForm";
import { useAddPromoCodeMutation, useRemovePromoCodeMutation } from "./effects";

const PromoCode: React.FC = () => {
  const [hasPromoCode, setHasPromoCode] = useState<boolean>(false);

  const promoCodeMutation = useAddPromoCodeMutation();
  const removePromoCodeMutation = useRemovePromoCodeMutation();

  const onSubmit = async (data: PromoCodeRequest) => {
    promoCodeMutation.mutate(data);
  };

  const onRemove = async (promoCode: string) => {
    removePromoCodeMutation.mutate(promoCode);
  };

  const promoCodeList = promoCodeMutation.data;
  return (
    <PromoCodeWrapper>
      {!hasPromoCode ? (
        <HasPromoCodeButton type="button" onClick={() => setHasPromoCode(true)}>
          <IoPricetagOutline /> I have a promo code
        </HasPromoCodeButton>
      ) : (
        <div>
          {promoCodeList?.map((el) => (
            <ActivePromoCode>
              <BiCheckCircle className="check-icon" /> <b>{el.promoCode}</b> -{" "}
              {el.message}
              <button type="button" onClick={() => onRemove(el.promoCode)}>
                <IoMdClose className="close-icon" />
              </button>
            </ActivePromoCode>
          ))}
          <PromoCodeForm
            onSubmit={onSubmit}
            isLoading={promoCodeMutation.isLoading}
          />
        </div>
      )}
    </PromoCodeWrapper>
  );
};

export default PromoCode;
