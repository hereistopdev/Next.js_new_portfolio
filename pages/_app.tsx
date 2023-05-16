import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Logo from "@/components/fullLogo";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import shape3 from "@/assets/shape_3 (1).png";
import shape4 from "@/assets/shape_4.png";
import shape5 from "@/assets/shape_5.png";
import shape6 from "@/assets/shape_6.png";
import shape7 from "@/assets/shape_7.png";
import shape1 from "@/assets/shape_1.png";
import shape2 from "@/assets/shape_2.png";

export default function App({ Component, pageProps }: AppProps) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";
  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  const [snow, setSnow] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setSnow(true);
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);
  if (!snow) return null;

  return (
    <>
      <Head>
        <title>Bryan Portfolio</title>
      </Head>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }}
      />
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }}
      />
      {!show ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Logo animate />
        </div>
      ) : (
        <>
          <div className="min-h-screen relative overflow-x-hidden">
         <div className=" max-w-[90rem] mx-auto px-5 xl:px-32">
              <Navigation />
              <Component {...pageProps} />
            </div>
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
