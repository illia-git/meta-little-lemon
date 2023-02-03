export const handleBook = (booked, props) => {
  if (booked === "pasta") {
    props.setHide((prev) => !prev);
    console.log("is pasta");
  } else if (booked === "chicken") {
    props.setHide((prev) => !prev);
  } else if (booked === "burger") {
    props.setHide((prev) => !prev);
  } else {
    props.setHide(false);
  }
};
