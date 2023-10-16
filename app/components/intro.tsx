import Link from "next/link";

const Intro = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row mt-5">
        <div className="lg:order-last w-full lg:w-1/4 mt-4">
          <img
            className="shadow"
            style={{ borderRadius: "20px" }}
            src="/adhney.png"
            alt="adhney"
          />
        </div>
        <div className="w-full lg:w-3/4 flex flex-col items-center justify-center">
          <div className="text-center text-xl md:text-2xl">Hey👋 I'm</div>
          <div
            className="text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              fontSize: "5.5rem",
              color: "#c9a0ff",
            }}
          >
            Adhney
          </div>
          <div className="text-center text-xl">
            SDE @{" "}
            <Link
              className="text-sky-400 decoration-pink-500"
              href={"https://www.metadome.ai/"}
            >
              Metadome.ai
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex mt-10 md:mt-20">
        <p className="font-serif text-gray-500 font-bold text-2xl lg:text-3xl">
          Tech Stack...
        </p>
      </div>
    </div>
  );
};

export default Intro;
