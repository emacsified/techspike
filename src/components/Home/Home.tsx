import React, { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";
import { useLocation } from "react-router-dom";
import OnImagesLoaded from 'react-on-images-loaded'
import { Form } from "../";

interface HomeProps { }

const Home: React.FC<HomeProps> = ({ }) => {
  const [path, setPath] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const location = useLocation();

  useEffect(() => {
    setPath(location.hash);
  }, [location]);

  const onLoaded = () => {
    setImagesLoaded(true)
  }

  return (
    <OnImagesLoaded
      onLoaded={onLoaded}
      onTimeout={onLoaded}
      timeout={7000}
    >
      <div className=" mt-4 flex items-center flex-col">
        <div className="shadow-lg flex flex-col items-center w-full pb-8 px-6">
          <h2 className="text-2xl font-extrabold text-blue text-center mb-4">
            <RoughNotation show={imagesLoaded} animate={false} type="box">
              Who are we?
          </RoughNotation>
          </h2>
          <p className="text-xl text-center mt-2">
            A project manager, a designer and a developer walk into a bar...
        </p>
          <p className="text-xl text-center mt-8">
            A group of 3 friends who love coffee and technology. Trying to make the world a better
            place, one React Native app at a time.
        </p>
          <p className="text-xl text-center mt-8">
            With over 15 years of shared experience in the Railway, and just as long working in the
            Software Development industry, we're experts in our field.
        </p>
          <p className="text-xl text-center mt-8 font-black">Mike</p>
          <img
            src="https://ca.slack-edge.com/T016A9VBQ10-U015VHK025V-a74701d73f69-512"
            className=" center-align rounded-lg"
            style={{ maxWidth: 150 }}
            alt="Mike, COO"
          />
          <p className="text-xl text-center mt-8 font-black">Maddie</p>
          <img
            src="https://ca.slack-edge.com/T016A9VBQ10-U016A9ZCJKC-5cebe1b0f431-512"
            className="center-align rounded-lg"
            style={{ maxWidth: 150 }}
            alt="Maddie, CPO"
          />
          <p className="text-xl text-center mt-8 font-black">Ash</p>
          <img
            src="https://networkrailmobile-assets.s3-eu-west-1.amazonaws.com/nrdigital/meet_the_team/Ash%20McBride.jpeg"
            className="center-align rounded-lg "
            style={{ maxWidth: 150 }}
            id="services"
            alt="Ash, CTO"
          />
        </div>
        <div className="shadow-lg flex flex-col items-center w-full pt-8 pb-8 px-6">
          <h2 className="text-2xl font-extrabold text-blue text-center" >
            <RoughNotation show={imagesLoaded} animate={false} type="box">
              Our services
          </RoughNotation>
          </h2>
          <div className="text-xl text-center">
            <svg
              className="inline mt-8"
              width="39"
              height="36"
              viewBox="0 0 39 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.5 2H5.5C3.567 2 2 3.59188 2 5.55556V23.3333C2 25.297 3.567 26.8889 5.5 26.8889H33.5C35.433 26.8889 37 25.297 37 23.3333V5.55556C37 3.59188 35.433 2 33.5 2Z"
                stroke="#0D2F51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 34H26.5"
                stroke="#0D2F51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 26.8889V34"
                stroke="#0D2F51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-2xl text-center text-blue mt-4">▲ Bespoke static websites</h3>
            <p className="mb-4 mt-4">Does your business need a website to drive customer interest?</p>
            <p className="mb-4 mt-4">
              We create static websites, designed from scratch with your brand in mind (no generic
              templates here!)
          </p>
            <svg
              width="28"
              height="38"
              viewBox="0 0 28 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline mt-4"
            >
              <path
                d="M22.5714 2H5.42857C3.53502 2 2 3.52223 2 5.4V32.6C2 34.4778 3.53502 36 5.42857 36H22.5714C24.465 36 26 34.4778 26 32.6V5.4C26 3.52223 24.465 2 22.5714 2Z"
                stroke="#0D2F51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 29.2H14.0164"
                stroke="#0D2F51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="text-2xl text-center text-blue mt-4">▲ iOS and Android Mobile Apps</h3>
            <p className="mb-4 mt-4">Want something different to a website?</p>
            <p className="mb-4 mt-4">
              We create iOS and Android apps, tailored to your business needs.
          </p>
            <p className="mb-4 mt-4">
              Taking a design-led approach, we match your business to a mobile solution fit for your
              customers.
          </p>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline mt-4"
            >
              <path
                d="M18 34C26.8366 34 34 26.8366 34 18C34 9.16344 26.8366 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34Z"
                stroke="#0D2F51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 18H34"
                stroke="#0D2F51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 2C22.002 6.38136 24.2764 12.0673 24.4 18C24.2764 23.9327 22.002 29.6186 18 34C13.9979 29.6186 11.7236 23.9327 11.6 18C11.7236 12.0673 13.9979 6.38136 18 2V2Z"
                stroke="#0D2F51"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-2xl text-center text-blue mt-4">▲ Experts in web accessibility</h3>
            <p className="mb-4 mt-4">We are passionate about accessible technology for all.</p>
            <p className="mb-4 mt-4" id="contact">
              We are committed to providing an accessible solution, meeting WCAG guidelines through
              design, development and testing.
          </p>
          </div>
        </div>
        <br />
        <h2 className="text-2xl font-extrabold text-blue text-center mb-4" >
          <RoughNotation show={imagesLoaded} animate={false} type="box">
            Get in touch
        </RoughNotation>
        </h2>
        <p className="text-xl text-center">
          Think we can help? Fill out the form below and we will be in touch!
      </p>
        <Form />
      </div>
    </OnImagesLoaded>
  );
};

export default Home;
