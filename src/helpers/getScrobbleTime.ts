const padStart = (item: number): string => item.toString().padStart(2, "0");

const getScrobbleTime = (date: Date): string =>
  `${padStart(date.getHours())}:${padStart(date.getMinutes())}:${padStart(date.getSeconds())}`;

export default getScrobbleTime;
