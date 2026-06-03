/**
 * Common Helper Functions
 */

export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
};

export const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
