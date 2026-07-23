import MarqueeImport from "react-fast-marquee";

const Marquee = MarqueeImport.default ?? MarqueeImport;

function LatestNews() {
  return (
    <div className="p-4 bg-base-100 rounded-sm flex gap-5">
      <p className="bg-secondary text-xl text-white py-2 px-6">Latest</p>
      <Marquee pauseOnHover={true} speed={30}>
        <p className="text-lg text-primary font-semibold leading-7 mx-2">
          I can be a React component, multiple React components, or just some
          text.
        </p>
        <p className="text-lg text-primary font-semibold leading-7 mx-2">
          I can be a React component, multiple React components, or just some
          text.
        </p>
        <p className="text-lg text-primary font-semibold leading-7 mx-2">
          I can be a React component, multiple React components, or just some
          text.
        </p>
      </Marquee>
    </div>
  );
}

export default LatestNews;
