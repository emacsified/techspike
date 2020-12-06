import React, { useState, useEffect, ReactElement } from "react";
import { useLocation, Link } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";

interface NavProps {
  testString?: string;
  testNum?: number;
}

const Nav: React.FC<NavProps> = ({ }): ReactElement => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = (): void => setShowNav(!showNav);
  const activeClass = "inline-block py-2 px-4 text-white no-underline font-bold";
  const inactiveClass =
    "inline-block text-gray-500 no-underline hover:text-white hover:text-underline py-2 px-4 font-bold";

  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.hash);
  }, [location]);

  return (
    <nav
      className="flex items-center justify-between flex-wrap p-6 fixed w-full z-10 top-0"
      style={{ backgroundColor: "#0D2F51" }}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          className="flex text-gray-500 no-underline hover:text-white hover:no-underline"
          to="/"
        >
          <i className="em em-grinning"></i>
          <svg
            width="30"
            height="32"
            viewBox="0 0 30 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.2902 3.55831C24.3424 3.55831 23.4335 3.9332 22.7634 4.60051C22.0932 5.26783 21.7167 6.1729 21.7167 7.11662V15.234C21.7167 16.2001 20.9243 16.9776 19.93 17.4117V5.33746C19.93 3.92188 19.3652 2.56428 18.36 1.56331C17.3548 0.562338 15.9914 0 14.5698 0C13.1481 0 11.7848 0.562338 10.7795 1.56331C9.77428 2.56428 9.20955 3.92188 9.20955 5.33746V21.0198C8.20719 20.5973 7.42281 19.8002 7.42281 18.7923V14.2332C7.42281 13.2895 7.04632 12.3844 6.37616 11.7171C5.70601 11.0498 4.79708 10.6749 3.84934 10.6749C2.90159 10.6749 1.99267 11.0498 1.32251 11.7171C0.652354 12.3844 0.275864 13.2895 0.275864 14.2332V20.4603C0.275864 22.4254 1.83926 23.9074 3.29098 24.7409C4.40233 25.3796 7.51751 26.1642 9.20955 26.2096V29.3561C9.20955 32.3032 19.93 32.3032 19.93 29.3561V22.6406C21.6997 22.5348 24.6568 21.7929 25.7181 21.1826C27.1698 20.3491 28.8637 18.867 28.8637 16.902V7.11662C28.8637 6.1729 28.4872 5.26783 27.817 4.60051C27.1468 3.9332 26.2379 3.55831 25.2902 3.55831Z"
              fill="#A5AFB9"
            />
            <path
              d="M16.7187 17.1521L18.7528 19.1465L16.3625 19.9745L16.7187 17.1521Z"
              fill="#0D2F51"
            />
            <path
              d="M10.3117 21.8114L12.289 23.8618L9.87646 24.6228L10.3117 21.8114Z"
              fill="#0D2F51"
            />
            <path
              d="M15.8017 28.3577L15.4604 31.182L13.3431 29.8002L15.8017 28.3577Z"
              fill="#0D2F51"
            />
            <path
              d="M12.5109 12.9183L12.1267 15.7371L10.0307 14.3235L12.5109 12.9183Z"
              fill="#0D2F51"
            />
            <path
              d="M14.4963 7.27746L17.345 7.13169L16.3404 9.44773L14.4963 7.27746Z"
              fill="#0D2F51"
            />
            <path
              d="M24.291 8.15339L24.2002 10.9967L21.9692 9.80597L24.291 8.15339Z"
              fill="#0D2F51"
            />
            <path d="M28.5391 5.40271L29.8043 7.95231H27.2739L28.5391 5.40271Z" fill="#0D2F51" />
            <path d="M27.0782 13.1122L28.3434 15.6618H25.813L27.0782 13.1122Z" fill="#0D2F51" />
            <path
              d="M3.17937 9.97345L2.7093 12.7793L0.657399 11.3026L3.17937 9.97345Z"
              fill="#0D2F51"
            />
            <path
              d="M4.97206 16.7716L4.18836 19.5069L2.31612 17.8093L4.97206 16.7716Z"
              fill="#0D2F51"
            />
            <path
              d="M3.09661 22.5647L3.1412 25.4091L0.856082 24.3253L3.09661 22.5647Z"
              fill="#0D2F51"
            />
            <path
              d="M23.8516 19.957L26.226 21.5334L24.0351 22.7959L23.8516 19.957Z"
              fill="#0D2F51"
            />
            <path d="M9.42565 3.70294L10.6908 6.25254H8.16048L9.42565 3.70294Z" fill="#0D2F51" />
            <path d="M18.7389 1.03198L20.0041 3.58158H17.4737L18.7389 1.03198Z" fill="#0D2F51" />
            <path
              d="M20.4541 25.3882L20.2406 28.2249L18.0631 26.9395L20.4541 25.3882Z"
              fill="#0D2F51"
            />
          </svg>

          <span className="text-2xl pl-2">techspike</span>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          onClick={toggleNav}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 text-center rounded-b-md ${
          showNav ? "" : "hidden"
          }`}
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a className={path.includes("about") ? activeClass : inactiveClass} href="#about">
              <RoughNotation show={path.includes("about")} type="underline" iterations={4}>
                Who are we?
              </RoughNotation>
            </a>
          </li>
          <li className="mr-3">
            <a className={path.includes("services") ? activeClass : inactiveClass} href="#services">
              <RoughNotation type="underline" show={path.includes("services")} iterations={4}>
                Our services
              </RoughNotation>
            </a>
          </li>
          <li className="mr-3">
            <a className={path.includes("contact") ? activeClass : inactiveClass} href="#contact">
              <RoughNotation type="underline" show={path.includes("contact")} iterations={4}>
                Get in touch
              </RoughNotation>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
