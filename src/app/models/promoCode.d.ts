export interface PromoCodeRequest {
  promoCode: string;
}

export interface ActivePromoCode {
  promoCode: string;
  message: string;
}

export type PromoCodeResponse = ActivePromoCode[];
