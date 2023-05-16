import { Menu } from "@mui/icons-material";
import Link from "next/link";
import Logo from "./fullLogo";


export const navs = ["Home", "About", "Works", "Contact"];
const Navigation = () => {
  return (
    <div className="w-full flex items-center xl:pt-14 pt-5 justify-between">
      <Logo />
      <div className="sm:hidden relative flex">
        <div className="bg-[rgb(35,40,54)] rounded-tl-[16px] cursor-pointer p-2 text-gray-400 rounded-br-[16px]">
          <Menu sx={{ fontSize: 34 }} />
        </div>
      </div>
      <div className="sm:flex hidden items-center  text-white font-bold gap-10">
        {navs.map((nav, index) => (
          <Link
            href={`${
              index !== 0
                ? nav === "Works"
                  ? "/works"
                  : (nav !== "Contact" ? "/" : "") + "#" + nav.toLowerCase()
                : "/"
            }`}
            key={index}
            className={`uppercase cursor-pointer`}
          >
            <span> {nav}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navigation;