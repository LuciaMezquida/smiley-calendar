export const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  const date = `${year}-${month}-${day}`;
  return date;
};
