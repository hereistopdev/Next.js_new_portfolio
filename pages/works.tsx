import WorksComponent from "@/components/Works";
import work1 from "@/assets/0001.webp";
import work2 from "@/assets/0002.webp";

const Works = () => {
  return (
    <div>
      <WorksComponent
        sent
        works={[
          {
            year: 2019,
            name: "Remizihoca Platform",
            work: "fron-tend developer",
            desc: "Pixelate Creative",
            cover: work1.src,
          },
        ]}
      />
    </div>
  );
};
export default Works;
