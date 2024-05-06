import { PromoCodeRequest } from "@/app/models/promoCode";

export interface PromoCodeFormProps {
  onSubmit: (promoCode: PromoCodeRequest) => void;
  isLoading: boolean;
}
