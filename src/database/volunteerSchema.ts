import mongoose, { Schema } from "mongoose";

export interface iVolunteer extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const volunteerSchema = new Schema<iVolunteer>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: { type: String, required: true }
});


export default mongoose.models.Volunteer ||
  mongoose.model<iVolunteer>("Volunteer", volunteerSchema, "volunteer");