
"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientDate() {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());
}

function getServerDate() {
  return "";
}

export default function CurrentDate() {
  const date = useSyncExternalStore(
    subscribe,
    getClientDate,
    getServerDate
  );

  return <span>{date}</span>;
}
