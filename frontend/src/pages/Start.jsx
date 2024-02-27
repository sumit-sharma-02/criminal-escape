import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Start = () => {
  return (
    <main className="flex h-full flex-col items-center justify-between p-10 sm:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-end font-poppins text-sm lg:flex">
        <div className="flex h-20 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/sumit-sharma-02"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Sumit Sharma
          </a> */}
        </div>
      </div>
      <div className="relative flex flex-col place-items-center ">
        <img
          alt="Criminal Escape Logo"
          width="180"
          height="37"
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo192.png"
        />
        <span className="text-xl font-light absolute bottom-5 font-poppins">
          Criminal Escape
        </span>
      </div>
      <Link
        to={"/city"}
        className="group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:border-gray-400"
      >
        <h2 className="mb-3 text-2xl flex items-center gap-2 font-semibold font-poppins">
          Start{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <FaArrowRight />
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 font-poppins">
          A notorious criminal escape artist has vanished again!
        </p>
      </Link>
    </main>
  );
};

export default Start;
