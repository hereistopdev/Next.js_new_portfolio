import Link from "next/link";
import { navs } from "./Navigation";

const Footer = () => {
  return (
    <div className="bg-[rgb(23,26,35)] text-sm overflow-hidden text-gray-500 px-20 md:flex-row items-center md:gap-0 gap-6 flex-col flex justify-between w-full py-12 ">
      <div className="upppercase font-bold">
        COPYRIGHT &copy; 2022 ALL RIGHTS RESERVED
      </div>
      <div className="flex gap-8">
        {navs.map((nav, index) => (
          <Link
            href={
              index !== 0
                ? nav === "Works"
                  ? "/works"
                  : (nav !== "Contact" ? "/" : "") + "#" + nav.toLowerCase()
                : "/"
            }
            key={index}
            className={`uppercase font-bold cursor-pointer`}
          >
            <span> {nav}</span>
           
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Footer;
