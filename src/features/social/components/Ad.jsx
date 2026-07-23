import background from "../../../assets/images/bg.png";

function Ad() {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="mt-5 px-9 py-14 text-center text-white bg-center object-cover rounded-sm"
    >
      <h2 className="font-semibold text-3xl leading-7">
        Create an Amazing Newspaper
      </h2>
      <p className="mt-5 mb-7 leading-7">
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </p>
      <button className="text-xl font-semibold leading-7 bg-secondary p-4">
        Learn More
      </button>
    </section>
  );
}

export default Ad;
