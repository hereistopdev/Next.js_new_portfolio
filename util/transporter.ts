import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "demo@gmail.com",
    pass: "password",
  },
  secure: true,
});
