"use client";

import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { PromoCodeRequest, PromoCodeResponse } from "@/app/models/promoCode";

export const useAddPromoCodeMutation = () => {
  const mutation = useMutation(
    async (payload: PromoCodeRequest) => {
      // Simulate a fake request with a mocked response
      // TODO: Connect to a real API & remove the timeout
      return new Promise<PromoCodeResponse>((resolve, reject) =>
        setTimeout(() => {
          if (payload.promoCode === "LU30") {
            resolve([
              {
                promoCode: "LU30",
                message: "Promo code applied successfully",
              },
            ]);
          } else {
            reject(new Error("Invalid promo code"));
          }
        }, 1500),
      );
    },
    {
      onSuccess: () => {
        toast("Promo code applied successfully 🙌", { type: "success" });
      },
      onError: () => {
        toast("Failed to apply promo code 😢", { type: "error" });
      },
    },
  );

  return mutation;
};

export const useRemovePromoCodeMutation = () => {
  const mutation = useMutation(
    async (promoCode: string) => {
      // Simulate a fake request with a mocked response
      // TODO: Connect to a real API & remove the timeout
      return new Promise<void>((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1500),
      );
    },
    {
      onSuccess: () => {
        toast("Promo code removed successfully 🗑️", { type: "success" });
      },
      onError: () => {
        toast("Failed to remove promo code 😢", { type: "error" });
      },
    },
  );

  return mutation;
};
