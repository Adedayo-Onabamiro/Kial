import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react'


export const Footer = () => {
  return (
    <footer className=" flex items-center justify-center flex-col bg-black text-center text-white lg:text-left">

      <div className="w-4/5 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Tailwind Elements section */}
          <div> <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start"> StyleHub </h6> </div>

          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Shop </h6>
            <p className="mb-4"> Men’s Product</p>
            <p className="mb-4"> Women’s Product </p>
            <p className="mb-4"> Winter Edition </p>
            <p className="mb-4">Accessories </p>
            <p className="mb-4"> Discounts </p>
          </div>

          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Company </h6>
            <p className="mb-4"> About Us </p>
            <p className="mb-4"> Careers </p>
            <p className="mb-4"> Investors </p>
            <p className="mb-4"> News </p>
            <p className="mb-4"> Purpose </p>
          </div>

          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Support </h6>
            <p className="mb-4"> Order Status</p>
            <p className="mb-4"> Shipping and Delivery </p>
            <p className="mb-4"> Returns </p>
            <p className="mb-4"> Payment Option </p>
            <p className="mb-4"> Contact </p>
          </div>

        </div>
      </div>

      {/* Copyright section */}

      <div className="w-4/5 flex items-center justify-center border-t border-white p-8 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Copyright © 2023 • Stylehub.</span>
        </div>
        <div className="flex justify-center">
          <a href="#!" className="mr-6 text-white "> <FontAwesomeIcon icon={faFacebook} /> </a>
          <a href="#!" className="mr-6 text-white "> <FontAwesomeIcon icon={faTwitter} /> </a>
          <a href="#!" className="mr-6 text-white"> <FontAwesomeIcon icon={faInstagram} /> </a>
          <a href="#!" className="mr-6 text-white"> <FontAwesomeIcon icon={faLinkedin} /> </a>
          <a href="#!" className="text-white "> <FontAwesomeIcon icon={faYoutube} /> </a>
        </div>
      </div>

    </footer>
  );
}