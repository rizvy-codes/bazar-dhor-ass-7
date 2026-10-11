
"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getClientDate = () =>
  new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

const getServerDate = () => "";

export default function CurrentDate() {
  const date = useSyncExternalStore(
    subscribe,
    getClientDate,
    getServerDate
  );

  return <>{date}</>;
}
