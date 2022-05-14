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

export const countryToEnglish = (countryKorean: string): string => {
  if (countryKorean === "대한민국") return "Korea";
  else if (countryKorean === "중국") return "China";
  else if (countryKorean === "일본") return "Japan";
  else if (countryKorean === "미국") return "United States";
  else if (countryKorean === "북한") return "North Korea";
  else if (countryKorean === "러시아") return "Russia";
  else if (countryKorean === "프랑스") return "France";
  else if (countryKorean === "영국") return "England";
  else return countryKorean;
};
