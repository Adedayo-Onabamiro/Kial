import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react'


export const Footer = () => {
  return (
    <footer className=" flex items-center justify-center flex-col bg-black text-center text-white lg:text-left">

      <div className="w-4/5 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Tailwind Elements section */}
          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start"> Exclusive </h6>
            <p className="mb-4"> Subscribe</p>
            <p className="mb-4"> Get 10% off your first order </p>
            <p className="mb-4"> +88015-88888-9999 </p>
          </div>
          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Support </h6>
            <p className="mb-4"> 111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="mb-4"> exclusive@gmail.com </p>
            <p className="mb-4"> +88015-88888-9999 </p>
          </div>

          {/* Account */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Account </h6>
            <p className="mb-4"> My Account </p>
            <p className="mb-4"> Login /  Register </p>
            <p className="mb-4"> Cart </p>
            <p className="mb-4"> Wishlist </p>
            <p className="mb-4"> Shop </p>
          </div>

          {/* Quick Link */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Quick Link </h6>
            <p className="mb-4"> Privacy Policy</p>
            <p className="mb-4"> Terms Of Use </p>
            <p className="mb-4"> FAQ </p>
            <p className="mb-4"> Contact </p>
          </div>

        </div>
      </div>

    </footer>
  );
}