export const covidDate = () => {
  let myDate = new Date();
  let today = new Date();

  let months = [
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

  let hours = myDate.getHours();
  let minutes = myDate.getMinutes();
  let session = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let strTime = `${hours}:${minutes} ${session}`;

  let covidDateTime = `${
    months[myDate.getMonth()]
  } ${myDate.getDate()}, ${myDate.getFullYear()}`;

  return covidDateTime;
};
