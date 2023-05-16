import About from "@/components/About";
import Intro from "@/components/Intro";
import WorksComponent from "@/components/Works";

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <WorksComponent sent={false} />
    </div>
  );
}
