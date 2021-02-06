export const getMyDate = () => {
  const myDate = new Date();
  const day = myDate.getDate();
  const month = myDate.getMonth() + 1;
  const year = myDate.getFullYear();


  const fullDate = `${month}/${day}/${year}`;
  // debugger
  return fullDate
}