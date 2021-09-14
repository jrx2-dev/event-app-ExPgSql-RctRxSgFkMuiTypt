export const formattedDate = (timestamp: string) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  } as const;
  const date = new Date(timestamp);
  const stringDate = date.toLocaleString(undefined, options);

  return stringDate;
};
