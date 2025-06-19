import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Partner with us</a>
            </li>
            <li>
              <a href="#">Ride with us</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Refund & Cancellation</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>

        {/* Follow + Subscribe */}
        <div>
          <h3 className="font-bold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4 mb-4 text-gray-300">
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div>
          <p className="text-sm mb-3 text-gray-400">
            Receive exclusive offers in your mailbox
          </p>
          <form className="flex">
            <div className="relative flex-grow">
              <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter Your email"
                className="w-full py-2 pl-10 pr-4 rounded-l-md bg-gray-800 text-sm text-white placeholder:text-gray-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 px-4 py-2 text-sm font-medium rounded-r-md shadow-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          All rights Reserved ©{" "}
          <span className="font-semibold text-white">Your Company, 2021</span>
        </p>
        <p>
          Made with <span className="text-yellow-400">💛</span> by{" "}
          <a className="text-white hover:underline" href="#">
            Themewagon
          </a>
        </p>
      </div>
    </footer>
  );
}
