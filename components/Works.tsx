import work1 from "@/assets/work1.png";
import work2 from "@/assets/work2.png";
import work3 from "@/assets/work3.png";
import work4 from "@/assets/work4.png";
import { Button } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

const WorksComponent: NextPage<{ works?: any[]; sent: boolean }> = ({
  sent,
  works = [
    {
      year: 2017,
      name: "igoods",
      work: "front-end developer",
      desc: "igoods",
      cover: work1.src,
      link: "https://www.i-goods.co.jp/"
    },
    {
      year: 2019,
      name: "HELLO MOBILITY",
      work: "front-end developer",
      desc: "hello mobility",
      cover: work2.src,
      link: "https://www.hellomobility.jp/"
    },
  ],
}) => {
  return (
    <div id="works" className="flex flex-col mb-[10rem] items-center">
      <div className="flex flex-col w-full items-center gap-7">
        <div className="text-5xl greeting  text-[rgb(54,91,254)]">
          Fantastic
        </div>
        <div className="font-bold text-5xl text-white">Selected Works</div>
        <div className="w-full items-center gap-0 justify-center xl:gap-[10rem] flex">
          {works.map((work, index) => (
            <Link
            href={work.link}
              key={index}
              className={`bg-[rgb(33,39,55)] group relative xl:h-[22rem] sm:h-[35vw] p-10 rounded-tl-[30px] rounded-br-[30px] max-w-auto  max-w-[35rem] sm:w-[45vw] ${index % 2 !== 0 ? "hover:bg-[#009971]" : "hover:bg-[#4445A1]"}`}
            >
              <div className="flex gap-5 relative flex-col">
                <div className="flex justify-between">
                  <div className="text-white font-bold text-lg ">
                    {work.name}
                  </div>
                  <div className="font-bold text-white opacity-40">
                    {work.year}
                  </div>
                </div>

                <div className="flex  flex-col">
                  <div className="bg-[rgba(33,39,55,0.65)] text-2xl font-medium z-50 greeting  ml-auto rounded-tl-[15px] p-3 absolute top-16 right-7  text-white rounded-br-[15px]">
                    {work.desc}
                  </div>
                  <img
                    className="sm:h-[30vw] group-hover:scale-110 duration-700 transition-transform xl:h-[22rem] rounded-tl-[30px] rounded-br-[30px]"
                    src={work.cover}
                  />
                  <div className="bg-[rgba(33,39,55,0.65)] uppercase font-semibold text-sm  mr-auto rounded-tl-[15px] p-3 absolute bottom-6 left-0  translate-x-5 text-white rounded-br-[15px]">
                    {work.work}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
     
      <div className="text-[rgb(57,63,79)] greeting text-6xl mt-[8rem]">
        ”Be who you needed when you were younger”
      </div>
    </div>
  );
};
export default WorksComponent;