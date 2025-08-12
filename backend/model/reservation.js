import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"first name must be filled,"],
        minLength:[3,"minum 3 character"],
        maxlength:[10,"maximum 10 character"],

    },
     lastname:{
        type:String,
        required:[true,"last name must be filled,"],
        minLength:[3,"minum 3 character"],
        maxlength:[10,"maximum 10 character"],

    },
    date:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,

    },
    email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contain 11 Digits."],
    maxLength: [11, "Phone number must contain 11 Digits."],
  },
})

export const reservation=mongoose.model("reservation",reservationSchema);
