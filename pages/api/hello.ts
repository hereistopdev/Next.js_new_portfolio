// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter } from "@/util/transporter";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const mailData = {
      from: req.body.email,
      to: "gthecoderkalisaineza@gmail.com",
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
    };
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else res.status(200).send("done");
    });
  } catch (error) {
    res.status(400).json(error);
  }
}
