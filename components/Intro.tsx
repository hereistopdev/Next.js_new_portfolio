import Link from "next/link";
import first from "@/assets/center_box_bg.png";
import shape1 from "@/assets/shape_1.png";
import shape2 from "@/assets/shape_2.png";
import WebAnimation from "@/assets/web_animation_bg.png";
import FeDev from "@/assets/fe_dev_bg.png";
import MobileDev from "@/assets/mobile_dev_bg.png";
import InteractinDesign from "@/assets/interaction_design_bg.png";
import webanimationIcon from "@/assets/web_animation.svg";
import InteractionDesignIcon from "@/assets/interaction_icon.svg";
import FaDevIcon from "@/assets/front_end_icon.svg";
import mobileDevIcon from "@/assets/mobile_dev_icon.svg";
import shape3 from "@/assets/shape_3 (1).png";
import shape4 from "@/assets/shape_4.png";
import shape5 from "@/assets/shape_5.png";
import shape6 from "@/assets/shape_6.png";
import shape7 from "@/assets/shape_7.png";
import { useEffect } from "react";

const Intro = () => {
    useEffect(() => {
        let animatedDivs: HTMLDivElement[] = document.querySelectorAll("#animated-div")! as any;
        const width = window.innerWidth;
        const height = window.innerHeight;
        let x = 0;
        let y = 0;

        document.addEventListener("mousemove", function (event) {
            x = event.clientX;
            y = event.clientY;

            animatedDivs.forEach((animatedDiv) => {
                const ratioX = x / width;
                const ratioY = y / height;
                const dx = ratioX * 20;
                const dy = ratioY * 20;
                const divWidth = animatedDiv.clientWidth;
                const divHeight = animatedDiv.clientHeight;

                // check the div won't go out of the screen
                if (dx < 0 || dx > 100 - (divWidth / width) * 100) return;

                animatedDiv.style.transform = `translate(-${dx}%, -${dy}%)`;
            });
        });

    return () => {
      document.removeEventListener("mousemove", () => {});
    }
    }, []);

    return (
        <div className='flex pt-[15rem] relative flex-col md:items-start items-center gap-3'>
            {/* <img
                id='animated-div'
                src={shape4.src}
                className='absolute w-28 -z-10 -bottom-14 -left-5'
                alt=''
            /> */}
            <img
                id='animated-div'
                src={shape5.src}
                className='absolute w-20 -bottom-32 left-[18rem]'
                alt=''
            />
            <img
                id='animated-div'
                src={shape6.src}
                className='absolute hover:scale-110 z-40 w-16 sm:w-32 md:bottom-[-24rem] bottom-[-15rem] right-[22rem] '
                alt=''
            />
            <div id='animated-div' className='absolute w-[5em] bottom-0 right-0'>
                <img src={shape7.src} className='w-12' alt='' />
            </div>
            <img
                id='animated-div'
                src={shape1.src}
                className='md:w-28 hover:scale-125 w-16 absolute top-[7rem] left-12'
            />
            <img
                id='animated-div'
                src={shape2.src}
                className='w-14 absolute hover:scale-125 top-[5rem] sm:left-[36rem]'
            />
            <div className='flex items-center gap-2 text-5xl'>
                <div>👋</div>
                <div className='text-[rgb(54,91,254)] flex gap-1 items-center'>
                    <span className='hover:scale-150 cursor-pointer duration-500 greeting text-6xl transition-transform'>
                        H
                    </span>
                    <span className='hover:scale-150 cursor-pointer duration-500 greeting text-6xl transition-transform'>
                        i
                    </span>
                    <span className='hover:scale-150 cursor-pointer duration-500 greeting text-6xl transition-transform'>
                        F
                    </span>
                    <span className='hover:scale-150 cursor-pointer duration-500 greeting text-6xl transition-transform'>
                        o
                    </span>
                    <span className='hover:scale-150 cursor-pointer duration-500 greeting text-6xl transition-transform'>
                        l
                    </span>
                    <span className='hover:scale-150 cursor-pointer duration-500 greeting text-6xl transition-transform'>
                        k
                    </span>
                    <span className='hover:scale-150 cursor-pointer duration-500 greeting text-6xl transition-transform'>
                        s
                    </span>
                    <span className='hover:scale-150 cursor-pointer duration-500 greeting text-6xl transition-transform'>
                        &nbsp;!
                    </span>
                </div>
            </div>
            <div className='flex gap-3 flex-col'>
                <div className='text-white text-5xl text-center font-bold'>
                       I`m  Necati Mert
                </div>
                <div className='text-[rgb(54,91,254)] text-2xl'>Front & Desktop Developer</div>
                <div className='text-gray-300 md:max-w-[35rem]  md:text-left text-center font-light text-xl leading-8'>
                    Specialized in front-end development but also like trying out other{" "}
                    <br />
                    technologies in order to become more flexible.
                </div>
                <div className='flex items-center gap-10'>
                    <Link
                        href='#about'
                        className='bg-[rgb(18,79,223)] hover:scale-125 duration-1000 transition-transform cursor-pointer font-bold rounded-tl-[16px] text-white px-7 py-3 rounded-br-[16px]'
                    >
                        KNOW ME
                    </Link>
                </div>
            </div>
            <img
                src={shape3.src}
                id='animated-div'
                className='absolute sm:h-[7rem] h-[5rem] -right-10 sm:top-[16rem] top-16'
                alt=''
            />
            <div
                id='animated-div'
                className='absolute w-1/2 top-[20rem] h-[30rem] z-50 md:flex hidden justify-center items-center right-0'
            >
                <img src={first.src} className='xl:w-[14rem] w-[17vw]' />
                <div className='absolute flex-col hover:scale-125 duration-500 transition-transform h-[12rem] w-[15vw] xl:w-[12rem] flex items-center justify-center gap-5  top-8 left-32'>
                    <img src={webanimationIcon.src} className='w-12 z-50' />
                    <div className='z-50 text-lg text-white font-bold max-w-[5rem] text-center'>
                        Web Animation
                    </div>
                    <img src={WebAnimation.src} className='absolute h-full w-full z-0' />
                </div>
                <div className='absolute flex-col  hover:scale-125 duration-500 transition-transform  h-[15rem] w-[20vw] xl:w-[15rem] flex items-center justify-center gap-5  -top-10 -right-3'>
                    <img src={FaDevIcon.src} className='xl:w-20 w-16 z-50' />
                    <div className='z-50 text-white font-bold max-w-[7rem] text-center'>
                        Front-end Development
                    </div>
                    <img src={FeDev.src} className='absolute w-full z-0 h-full' />
                </div>
                <div className='absolute flex-col hover:scale-125 duration-500 transition-transform  h-[13rem] w-[15vw] xl:w-[13rem] flex items-center justify-center gap-5  -bottom-5 right-[4rem]'>
                    <img src={mobileDevIcon.src} className='w-10 z-50' />
                    <div className='z-50 text-white text-lg font-bold max-w-[7rem] text-center'>
                        Mobile Development
                    </div>
                    <img src={MobileDev.src} className='absolute w-full z-0' />
                </div>
                <div className='absolute flex-col hover:scale-125 duration-500 transition-transform  h-[15rem] w-[14vw] xl:w-[12rem] flex items-center justify-center gap-5 -bottom-5 left-[2.5rem]'>
                    <img src={InteractionDesignIcon.src} className='w-16 z-50' />
                    <div className='z-50 text-white font-bold max-w-[7rem] text-center'>
                        Interaction Design
                    </div>
                    <img src={InteractinDesign.src} className='absolute w-full z-0' />
                </div>
            </div>
        </div>
    );
};
export default Intro;

