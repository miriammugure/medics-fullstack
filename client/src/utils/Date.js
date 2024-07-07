const Date = () => {
  const currentDate = new Date.getDate();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return currentDate.toLocaleDateString(undefined, options);
};

export default Date;
