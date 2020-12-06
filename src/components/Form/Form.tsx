import React from "react";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [status, setStatus] = useState("");

  const nameSetter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const emailSetter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const bodySetter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBodyText(e.target.value);
  };
  const submit = () => {
    const data = {
      name,
      email,
      bodyText,
    };

    axios({
      url: "https://formspree.io/f/xwkwqknv",
      method: "post",
      headers: {
        Accept: "application/json",
      },
      data,
    })
      .then((response) => {
        setStatus("SUCCESS");
      })
      .catch((e) => {
        setStatus("ERROR");
      });
  };

  return (
    <div className="flex-col flex align-center items-center" id="#contact">
      <span className="items-end text-red-700">* mandatory field</span>
      <div className="flex-row mb-2 mt-2">
        <span className="text-red-700 text-2xl">*</span>{" "}
        <input
          type="text"
          placeholder="Full name"
          onChange={nameSetter}
          className="w-64 rounded-full bg-gray-200 h-8"
          style={{ textIndent: 10 }}
        />
      </div>
      <div className="flex-row mb-2">
        <span className="text-red-700 text-2xl">*</span>{" "}
        <input
          type="email"
          placeholder="Email address"
          onChange={emailSetter}
          className="w-64 rounded-full bg-gray-200 h-8"
          style={{ textIndent: 10 }}
        />
      </div>
      <div className="flex-row pt-2 ">
        <span className=" align-top text-red-700 text-2xl ">*</span>{" "}
        <textarea
          placeholder="Tell us your troubles..."
          onChange={bodySetter}
          className="w-64 rounded-lg bg-gray-200 h-32"
          style={{ paddingLeft: 10 }}
        />
      </div>
      {status == "SUCCESS" ? (
        <p className="text-xl">Your request was submitted, we'll be in touch soon!</p>
      ) : (
        <button
          onClick={submit}
          className="w-64 ml-3 mb-8 mt-4 text-2xl text-white font-bold rounded-full"
          style={{ backgroundColor: "#0D2F51" }}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Form;
