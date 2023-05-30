import { GitHub, Telegram } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import {
  alpha,
  Button,
  OutlinedInputProps,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";
import Behance from "@/assets/behance.svg";
import Discord from "@/assets/discord.png";
import ContactPattern from "@/assets/contact_pattern.webp";
import useCopy from "use-copy";
import Copy from "@/assets/copy.svg";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputLabelProps={{ style: { color: "gray" } }}
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& label.Mui-focused": {
    color: "rgb(57, 63, 79)",
    fontWeight: 500,
    fontSize: 12,
  },
  "& label": {
    color: "rgb(57, 63, 79)",
    fontWeight: 500,
    fontSize: 12,
  },
  "& .MuiFilledInput-root": {
    borderBottom: "0.2px solid rgb(107,114,128)",
    background: "transparent",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&.Mui-focused": {
      borderColor: "white",
    },
  },
}));
const Contact = () => {
  const [copied, copy, setCopied] = useCopy("hereis.topdev@gmail.com");
  const copyText = () => {
    copy();
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const contacts = [
    {
      provider: "Github",
      link: "https://github.com/mastercodercat",
    },
    {
      provider: "Telegram",
      link: "https://t.me/software730",
    },
    {
      provider: "Skype",
      link: "live:.cid.a915b6f66b36fe9",
    },
    {
      provider: "Discord",
      link: "bryanjin#8288",
    },
  ];
  const validate = (values: any): { name: string; error: string }[] => {
    let errors = [];
    if (values.name.length < 4) {
      errors.push({
        name: "name",
        error: " Name must be at least 2 characters long",
      });
    }
    if (!values.email) {
      errors.push({ name: "email", error: "Email must be filled" });
    }
    if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(values.email)) {
      errors.push({ name: "email", error: "Email is not valid" });
    }
    if (values.message.length < 4) {
      errors.push({
        name: "message",
        error: "Message must be at least 3 characters long",
      });
    }
    return errors;
  };
  const submit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/hello", values);
      alert("Message sent successfully");
    } catch (_error) {
      alert("Message not sent");
    }
  };
  const [errors, setErrors] = useState<{ name: string; error: string }[]>([]);
  console.log(errors);
  return (
    <div
      id="contact"
      className="bg-[rgb(35,40,54)] pt-[15rem] w-full pb-10 mt-[10rem]"
    >
      <div className="max-w-[100rem] relative sm:px-32 flex flex-col gap-16 mx-auto">
        <div className="absolute -top-[22rem] left-[4%] right-[1%] flex sm:flex-row flex-col items-center justify-center sm:gap-0 gap-5 sm:justify-between px-10 w-[87%] rounded-tl-[40px] rounded-br-[40px] h-[15rem]">
          <div className="flex pl-10 z-50 gap-3 flex-col">
            <div className="text-white font-bold text-3xl">
              DO YOU HAVE A PROJECT
            </div>
            <div className="text-[rgb(127,142,234)] text-xl font-medium">
              I`m ready for new projects
            </div>
          </div>
          <Link
            href="#contact"
            className="rounded-tl-[13px] font-bold hover:scale-110 transition-transform duration-700 cursor-pointer z-50 text-white px-7 py-3 text-xl bg-[rgb(43,107,233)] rounded-br-[13px]"
          >
            LET'S TALK
          </Link>
          <img
            src={ContactPattern.src}
            className=" w-full h-[15rem] opacity-80 absolute rounded-tl-[40px] rounded-br-[40px] object-cover z-0 object-top"
            alt=""
          />
          <div className="bg-[#1c318ed5] rounded-tl-[40px] rounded-br-[40px] absolute top-0 z-40 w-full h-full "></div>
        </div>
        <div className=" flex flex-col items-center ">
          <div className="text-4xl greeting mb-3 text-[rgb(54,91,254)]">
            Let`s Talk
          </div>
          <div className="font-bold text-6xl text-white">Contact</div>
        </div>
        <div className="flex lg:flex-row flex-col w-full items-start gap-14">
          <form
            onSubmit={submit}
            className="flex items-end gap-5 w-full lg:w-[calc(50%-20px)] flex-col"
          >
            <RedditTextField
              id="custom-css-outlined-input"
              className="w-full"
              variant="filled"
              value={values.name}
              onChange={(e: any) => {
                setValues({ ...values, name: e.target.value });
              }}
              helperText={
                errors.find((e) => e.name === "name") && (
                  <div className="text-[red] font-medium, text-lg">
                    {errors.find((e) => e.name === "name")?.error}
                  </div>
                )
              }
              label="Name"
            />
            <RedditTextField
              id="custom-css-outlined-input"
              className="w-full"
              variant="filled"
              label="E-mail Address"
              helperText={
                errors.find((e) => e.name === "email") && (
                  <div className="text-[red] font-medium, text-lg">
                    {errors.find((e) => e.name === "email")?.error}
                  </div>
                )
              }
              value={values.email}
              onChange={(e: any) =>
                setValues({ ...values, email: e.target.value })
              }
            />
            <RedditTextField
              id="custom-css-outlined-input"
              className="w-full"
              value={values.message}
              // id="outlined-multiline-static"
              onChange={(e: any) =>
                setValues({ ...values, message: e.target.value })
              }
              helperText={
                errors.find((e) => e.name === "message") && (
                  <div className="text-[red] font-medium, text-lg">
                    {errors.find((e) => e.name === "message")?.error}
                  </div>
                )
              }
              label="Message"
              variant="filled"
              multiline
              rows={4}
            />
            <div className="hover:scale-110 duration-700 transition-transform">
              <Button
                style={{
                  background: "rgb(31,98,250)",
                  color: "white",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 16,
                  padding: "10px 25px",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
                variant="contained"
                type="submit"
                className="border-tl-[16px]   border-br-[16px] "
              >
                SEND MESSAGE
              </Button>
            </div>
          </form>
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {contacts.map((contact, index) => (
                <a
                  href={contact.link}
                  className="flex w-full h-fit rounded-lg hover:bg-[rgb(23,26,35)] duration-500 transition-all px-3 py-5 text-white items-start gap-3"
                  key={index}
                >
                  {contact.provider === "Github" ? (
                    <GitHub sx={{ fontSize: 40 }} />
                  ) : contact.provider === "Telegram" ? (
                    <Telegram sx={{ fontSize: 40 }} />
                  ) : contact.provider === "Skype" ? (
                    <SendIcon sx={{ fontSize: 40 }} />
                  ) : contact.provider === "Telegram" ? (
                    <Telegram sx={{ fontSize: 40 }} />
                  ) : contact.provider === "Behance" ? (
                    <img src={Behance.src} className="w-10" />
                  ) : (
                    <img src={Discord.src} className="w-10" />
                  )}
                  <div className="flex flex-col">
                    <div className="font-semibold text-lg">
                      {contact.provider}
                    </div>
                    <div className="text-gray-500">{contact.link}</div>
                  </div>
                </a>
              ))}
            </div>
            <div
              onClick={copyText}
              className={`w-full flex items-center rounded-tl-[20px] hover:bg-[rgb(54,91,254)] hover:text-white group rounded-br-[20px] h-[3.5rem] mt-4  cursor-pointer ${
                copied
                  ? "text-white bg-[rgb(54,91,254)]"
                  : "bg-[rgb(44,48,62)] text-[rgb(102,111,133)]"
              }`}
            >
              <div
                className={`h-full  group-hover:bg-[rgb(17,56,226)] rounded-tl-[20px] flex items-center px-4 ${
                  copied ? "bg-[rgb(17,56,226)]" : "bg-[rgb(102,111,133)]"
                }`}
              >
                <img src={Copy.src} className="w-7" />
              </div>
              <div className="text-center w-full font-bold text-lg">
                {copied ? "copied" : "hereis.topdev@gmail.com"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;