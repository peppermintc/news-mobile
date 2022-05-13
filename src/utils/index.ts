export const formatDate = (date: Date): string => {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let [month, day, year] = String(date).split(" ").splice(1, 3);
  if (MONTHS.indexOf(month) + 1 < 10) month = `0${MONTHS.indexOf(month) + 1}`;

  const newCurrentDate = `${year}.${month}.${day}`;
  return newCurrentDate;
};

export const formatPubDate = (date: string): string => {
  return date.split("T")[0].replaceAll("-", ".");
};
