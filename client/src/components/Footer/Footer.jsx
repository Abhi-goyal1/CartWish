

const Footer = () => {

  
  return (
    <>
    <>
  {/* This is an example component */}
  <div className=" bg-gray-900">
    <div className="max-w-2xl mx-auto text-white py-5">
      <div className="text-center">
        <h3 className="text-2xl mb-3"> Download our CartWish app </h3>
        <p> Your Cart, Your Wishes – Shop Simplified! </p>
        <div className="flex justify-center my-8">
          <a href="">
          <div className="flex items-center border w-auto rounded-lg px-2 py-2 w-52 mx-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
              className="w-7 md:w-8"
            />
            <div className="text-left ml-3">
              <p className="text-xs text-gray-200">Download on </p>
              <p className="text-sm md:text-base"> Google Play Store </p>
            </div>
          </div>
          </a>
          <a href="">
          <div className="flex items-center border w-auto rounded-lg px-2 py-2 w-44 mx-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
              className="w-7 md:w-8"
            />
            <div className="text-left ml-3">
              <p className="text-xs text-gray-200">Download on </p>
              <p className="text-sm md:text-base"> Apple Store </p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</>

      <footer className="relative  bg-white pb-5 pt-10 dark:bg-dark lg:pb-10 lg:pt-[50px] px-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-3 inline-block max-w-[210px]">
                  <img
                    src="../public/images/Mainlogo.png"
                    alt="logo"
                    className="max-w-full dark:hidden"
                  />
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                    alt="logo"
                    className="max-w-full hidden dark:block"
                  />
                </a>
                <p className="flex items-center text-2sm pb-5 font-medium text-dark dark:text-white">
                 
                <i className="fa-solid fa-envelope px-3"></i> <span className=" text-orange-600"><a href="mailto:cs-reply@cartwish.in">cs-reply@cartwish.in</a></span>
               </p>
                <p className="flex items-center text-2sm pb-5 font-medium text-dark dark:text-white">
                 
                  <i className="fa-solid fa-headset px-3"></i> <span  className=" text-orange-600">+91 9870611048</span>
                </p>
                <p className="flex items-center text-2sm pb-2 font-medium text-dark dark:text-white">
                 
                <i className="fa-solid fa-location-dot px-3"></i> <span  className=" text-orange-600">Bengaluru – 560103, India
</span>
                </p>
               
              </div>
            </div>

            <LinkGroup header="Resources">
              
              <NavLink link="/#" label="Contact Us" />
              <NavLink link="/#" label="About Us" />
              <NavLink link="/#" label="careers" />
              <NavLink link="/#" label="Become a seller"  />
              <NavLink link="/#" label="Cancellation & Returns" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="Privacy" />
              <NavLink link="/#" label="Customers" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Terms & Conditions" />
              <NavLink link="/#" label="SSL certificates" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="FAQ" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="CartWish Wholesale" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>
            <LinkGroup header=" Shop with Category">
              <NavLink link="/#" label="Mobiles" />
              <NavLink link="/#" label="Camera" />
              <NavLink link="/#" label="Clothings" />
              <NavLink link="/#" label="Footwear" />
              <NavLink link="/#" label="Large appliances" />
            </LinkGroup>

           
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 ">
            <svg
              width={217}
              height={229}
              viewBox="0 30 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8B00" stopOpacity="0.38" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 ">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8B00" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
      <>
  {/*#rd Footer container*/}
  <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
    <div className="container px-6 pt-6">
      <div className="mb-6 flex justify-center">
        <a
          href="#!"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:text-orange-600 hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a
          href="#!"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:text-orange-600 hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a
          href="#!"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:text-orange-600 hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#!"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:text-orange-600 hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="#!"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:text-orange-600 hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a
          href="#!"
          type="button"
          className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:text-orange-600 hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
    {/*Copyright section*/}
    <div
      className="w-full p-4 text-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2023 
      <a className="text-whitehite" href="https://tw-elements.com/">  CartWish
      </a>
      . All rights reserved.
    </div>
  </footer>
</>

    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className=" w-full">
          <h4 className="mb-7 text-xl font-bold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-1 text-orange-600 ">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base font-semibold leading-loose text-body-color hover:text-gray-950 dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
