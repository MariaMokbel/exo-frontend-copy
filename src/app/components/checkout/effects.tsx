import { useCallback, useMemo, useState } from "react";

export const useTicketCounter = (initialState: Map<string, number>) => {
  const [ticketsCount, setTicketsCount] =
    useState<Map<string, number>>(initialState);

  const modifyTicketsCount = useCallback((id: string, increment: number) => {
    setTicketsCount((prevTicketsCount) => {
      const newCount =
        prevTicketsCount.get(id) !== undefined
          ? prevTicketsCount.get(id)! + increment
          : 1;
      return new Map(prevTicketsCount.set(id, newCount));
    });
  }, []);

  const totalTicketCounts = useMemo(
    () =>
      Array.from(ticketsCount.values()).reduce(
        (acc: number, val: number) => acc + val,
        0,
      ),
    [ticketsCount],
  );

  return { ticketsCount, totalTicketCounts, modifyTicketsCount };
};

export default useTicketCounter;
