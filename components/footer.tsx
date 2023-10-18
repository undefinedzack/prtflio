import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mb-10">
      <nav>
        <div className="flex justify-center">
          <div className="flex items-center">
            <span className="text-gray-500"> Made with </span>
            <a className="text-gray-600 mx-1">Next.js</a>
          </div>
        </div>
      </nav>
      <nav className="flex justify-center">
        <p className="text-gray-500 inline-flex items-center">
          and
          <AiFillHeart color="red" className="mx-1" />
          by
          <b className="font-semibold">
            <a href={"https://www.adhney.in/"}>
              <span className="text-gray-600 mx-1"> @undefinedzack </span>
            </a>
          </b>
        </p>
      </nav>
    </div>
  );
};

export default Footer;
