import { catcherror } from "../middleware/catch.js";
import ErrorHandler from "../middleware/error.js"; // if it's a class
import { reservation } from "../model/reservation.js";

export const send_reservation = catcherror(async (req, res, next) => {
  const { firstname, lastname, email, date, time, phone } = req.body;

  if (!firstname || !lastname || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill the full reservation form", 400));
  }

  try {
    await reservation.create({
      firstname,
      lastname,
      email,
      phone,
      date,
      time,
    });

    res.status(201).json({
      message: "Reservation done successfully",
      success: true,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    next(error);
  }
});
