import user from "@/assets/favicond.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaBicycle } from "react-icons/fa";
import { BiSwim, BiSpreadsheet } from "react-icons/bi";
import { GiPersonInBed } from "react-icons/gi";
import { BsImage, BsSnow3 } from "react-icons/bs";

const About = () => {
  const skills = ["ElectonJS", "React", "Vue", "CSS3", "TailwindCSS", "NextJS", "Laravel"];
  return (
    <div
      id="about"
      className="flex pt-[25rem] pb-[5rem] md:gap-20 md:flex-row flex-col items-center  relative justify-between"
    >
      <div className="w-[38rem] relative">
        <div className="md:hidden flex absolute -top-24 md:items-start items-center md:w-auto w-full gap-2 flex-col">
          <div className="text-[rgb(54,91,254)] greeting text-2xl">Know Me</div>
          <div className="font-bold text-5xl text-white">About</div>
        </div>
        <img className="min-w-full" src={user.src} />
        <Carousel
          axis="vertical"
          autoPlay
          stopOnHover={false}
          useKeyboardArrows={false}
          interval={1000}
          swipeable={false}
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          dynamicHeight
          className="absolute uppercase rounded-tl-[20px] w-[9rem] right-0 sm:-right-14 -bottom-10 rounded-br-[20px] bg-[rgb(46,77,218)]"
        >
          <div className="flex flex-col min-h-[10rem] items-center justify-center">
            <FaBicycle color="white" size={50} />
            <div className="font-bold text-sm  text-white">Biking</div>
          </div>
          <div className="flex gap-4 min-h-[10rem] flex-col min items-center justify-center">
            <BiSwim color="white" size={50} />
            <div className="font-bold text-sm text-white">Swimming</div>
          </div>
          <div className="flex gap-4 min-h-[10rem] flex-col  items-center justify-center">
            <BiSpreadsheet color="white" size={50} />
            <div className="font-bold text-sm text-white">Reading</div>
          </div>
          <div className="flex gap-4 min-h-[10rem] flex-col items-center justify-center">
            <GiPersonInBed color="white" size={50} />
            <div className="font-bold text-sm text-white">Sleeping</div>
          </div>
          <div className="flex gap-4 flex-col  pt-7 items-center justify-center">
            <BsSnow3 color="white" size={50} />
            <div className="font-bold text-sm text-white text-center">
              Love <br />
              Snowflake
            </div>
          </div>
          <div className="flex gap-4 flex-col min-h-[10rem] pt-7 pb-1 items-center justify-end">
            <div className="relative">
              <div className="absolute border-l-2 -left-2 border-t-2 w-5 -top-2 border-white h-5"></div>
              <div className="absolute border-r-2 -right-2 border-t-2 w-5 -top-2 border-white h-5"></div>
              <div className="absolute border-l-2 -left-2 border-b-2 w-5 -bottom-2 border-white h-5"></div>
              <div className="absolute border-r-2 -right-2 border-b-2 w-5 -bottom-2 border-white h-5"></div>
              <BsImage color="white" size={40} />
            </div>
            <div className="font-bold text-sm text-white">Taking picture</div>
          </div>
        </Carousel>
      </div>
      <div className="flex gap-3 xl:max-w-[42rem] w-full sm:max-w-[60%] flex-col">
        <div className="md:flex hidden gap-2 flex-col">
          <div className="text-[rgb(54,91,254)] greeting  text-5xl">
            Know Me
          </div>
          <div className="font-bold text-5xl text-white">About</div>
        </div>
        <div className="text-gray-300 flex flex-col gap-4 text-xl leading-8">
          <p className="md:text-left text-center">
            I'm a Front-End Developer located in Turkey. I have a serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences.
          </p>
          <p className="md:text-left text-center">
            My main experience is in front-end development but I also have a
            passion for design. Given that producing a modern website requires
            the combination of design, server technology, and the layer that
            users interacts with. I believe having experience in both design and
            development allows for making the most optimal user experiences.
          </p>
          <p className="md:text-left text-center">
            I've built products for companies and businesses around the globe
            ranging from marketing websites to complex solutions and enterprise
            apps with focus on fast, elegant and accessible user experiences.
          
          </p>
          {/* <p className="sm:text-left   text-center">
            I'm a{" "}
            <a href="" className="underline text-[rgb(53,91,254)]">
              CodePen
            </a>{" "}
            advocate and share attention-catching demos over on
            <a href="" className="underline text-[rgb(53,91,254)]">
              {" "}
              Twitter
            </a>
            .
          </p> */}
          <div className="flex gap-5 mt-4 flex-col">
            <div className="font-bold text-2xl text-white">Best Skills</div>
            <div className="flex items-center gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-tl-[20px] hover:scale-110 transition-all duration-500 hover:bg-[rgb(54,91,254)] text-white bg-[rgb(37,43,61)] cursor-pointer px-4 py-3 rounded-br-[20px]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;