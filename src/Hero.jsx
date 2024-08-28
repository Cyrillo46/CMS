import img from "./assets/cms-img.svg";

export const Hero = () => {
  return (
    <section className="py-10 px-5 flex">
      <div className="flex flex-col w-1/2 justify-center items-center px-12">
        <h1 className="text-5xl">Contentful CMS</h1>
        <p className="text-3xl tracking-wide capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          reiciendis, ut ab, ullam quibusdam doloribus, debitis atque quos
          laudantium eos aliquam nulla ducimus neque illo?
        </p>
      </div>
      <div className="w-1/2">
        <img src={img} alt="hero image" className="h-80 px-16" />
      </div>
    </section>
  );
};
