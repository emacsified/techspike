import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col p-8" style={{ backgroundColor: "#0D2F51" }}>
      <h2 className="text-2xl font-extrabold text-gray-500 mb-4">techspike ltd.</h2>
      <h4 className="text-gray-500 mb-4">
        <a className="flex text-gray-500 hover:text-white" href="mailto:admin@techspike.co.uk">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4"
          >
            <path
              d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"
              stroke="#A5AFB9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 3L11 10L1 3"
              stroke="#A5AFB9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          admin@techspike.co.uk
        </a>
      </h4>
      <h4 className="text-gray-500 mb-4">
        <a
          className="flex text-gray-500 hover:text-white"
          href="https://www.instagram.com/techspikeuk"
        >
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4"
          >
            <path
              d="M16 1H6C3.23858 1 1 3.12665 1 5.75V15.25C1 17.8734 3.23858 20 6 20H16C18.7614 20 21 17.8734 21 15.25V5.75C21 3.12665 18.7614 1 16 1Z"
              stroke="#A5AFB9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 9.90148C15.1234 10.6921 14.9813 11.4996 14.5938 12.209C14.2063 12.9185 13.5932 13.4938 12.8417 13.8532C12.0901 14.2125 11.2385 14.3376 10.4078 14.2106C9.57715 14.0836 8.80979 13.7111 8.21487 13.1459C7.61994 12.5807 7.22776 11.8517 7.0941 11.0626C6.96043 10.2735 7.09209 9.46438 7.47035 8.75044C7.84861 8.03649 8.45421 7.45403 9.20101 7.08591C9.94781 6.71779 10.7978 6.58274 11.63 6.69998C12.479 6.81957 13.2649 7.19537 13.8717 7.77187C14.4786 8.34837 14.8741 9.095 15 9.90148Z"
              stroke="#A5AFB9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 5.27496H16.509"
              stroke="#A5AFB9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          techspikeuk
        </a>
      </h4>
      <h4 className="text-gray-500 mb-4">
        <a
          className="flex text-gray-500 hover:text-white"
          href="https://www.twitter.com/techspikeuk"
        >
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4"
          >
            <path
              d="M21 1.00897C20.1294 1.61128 19.1656 2.07195 18.1455 2.37324C17.5979 1.75576 16.8703 1.3181 16.0609 1.11947C15.2516 0.920833 14.3995 0.970799 13.6201 1.26261C12.8406 1.55442 12.1713 2.07399 11.7027 2.75105C11.2341 3.42812 10.9888 4.23001 11 5.04827V5.93995C9.40239 5.98058 7.81934 5.63305 6.39183 4.92829C4.96431 4.22354 3.73665 3.18345 2.81818 1.90065C2.81818 1.90065 -0.818182 9.92575 7.36364 13.4925C5.49139 14.739 3.26105 15.364 1 15.2758C9.18182 19.7342 19.1818 15.2758 19.1818 5.02152C19.181 4.77315 19.1566 4.52539 19.1091 4.28143C20.0369 3.38395 20.6917 2.25082 21 1.00897V1.00897Z"
              stroke="#A5AFB9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          @techspikeuk
        </a>
      </h4>
      <svg
        style={{ alignSelf: "flex-end" }}
        width="60"
        height="64"
        viewBox="0 0 60 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.5804 7.11662C48.6849 7.11662 46.867 7.8664 45.5267 9.20103C44.1864 10.5357 43.4334 12.3458 43.4334 14.2332V30.468C43.4334 32.4002 41.8486 33.9552 39.86 34.8234V10.6749C39.86 7.84376 38.7305 5.12855 36.72 3.12661C34.7095 1.12468 31.9828 0 29.1395 0C26.2963 0 23.5695 1.12468 21.559 3.12661C19.5486 5.12855 18.4191 7.84376 18.4191 10.6749V42.0396C16.4144 41.1945 14.8456 39.6004 14.8456 37.5846V28.4665C14.8456 26.579 14.0927 24.7689 12.7523 23.4343C11.412 22.0996 9.59418 21.3499 7.69869 21.3499C5.8032 21.3499 3.98535 22.0996 2.64503 23.4343C1.30472 24.7689 0.551743 26.579 0.551743 28.4665V40.9206C0.551743 44.8507 3.67853 47.8148 6.58198 49.4819C8.80468 50.7593 15.035 52.3285 18.4191 52.4192V58.7121C18.4191 64.6064 39.86 64.6064 39.86 58.7121V45.2813C43.3995 45.0695 49.3136 43.5857 51.4362 42.3652C54.3397 40.6982 57.7273 37.7341 57.7273 33.8039V14.2332C57.7273 12.3458 56.9743 10.5357 55.634 9.20103C54.2937 7.8664 52.4759 7.11662 50.5804 7.11662Z"
          fill="#A5AFB9"
        />
        <path d="M33.4374 34.3042L37.5055 38.2929L32.725 39.9491L33.4374 34.3042Z" fill="#0D2F51" />
        <path d="M20.6234 43.6228L24.578 47.7235L19.7529 49.2456L20.6234 43.6228Z" fill="#0D2F51" />
        <path d="M31.6034 56.7155L30.9207 62.364L26.6862 59.6003L31.6034 56.7155Z" fill="#0D2F51" />
        <path d="M25.0219 25.8367L24.2535 31.4743L20.0614 28.647L25.0219 25.8367Z" fill="#0D2F51" />
        <path
          d="M28.9925 14.5549L34.6901 14.2634L32.6808 18.8955L28.9925 14.5549Z"
          fill="#0D2F51"
        />
        <path
          d="M48.5821 16.3068L48.4004 21.9933L43.9385 19.6119L48.5821 16.3068Z"
          fill="#0D2F51"
        />
        <path d="M57.0782 10.8054L59.6086 15.9046H54.5478L57.0782 10.8054Z" fill="#0D2F51" />
        <path d="M54.1564 26.2244L56.6867 31.3236H51.626L54.1564 26.2244Z" fill="#0D2F51" />
        <path d="M6.35874 19.9469L5.4186 25.5585L1.3148 22.6053L6.35874 19.9469Z" fill="#0D2F51" />
        <path
          d="M9.94413 33.5433L8.37672 39.0138L4.63225 35.6187L9.94413 33.5433Z"
          fill="#0D2F51"
        />
        <path d="M6.19322 45.1294L6.2824 50.8182L1.71216 48.6507L6.19322 45.1294Z" fill="#0D2F51" />
        <path
          d="M47.7031 39.9141L52.4521 43.0668L48.0702 45.5917L47.7031 39.9141Z"
          fill="#0D2F51"
        />
        <path d="M18.8513 7.40588L21.3817 12.5051H16.321L18.8513 7.40588Z" fill="#0D2F51" />
        <path d="M37.4778 2.06396L40.0081 7.16316H34.9474L37.4778 2.06396Z" fill="#0D2F51" />
        <path d="M40.9083 50.7764L40.4812 56.4498L36.1262 53.879L40.9083 50.7764Z" fill="#0D2F51" />
      </svg>
    </div>
  );
};

export default Footer;