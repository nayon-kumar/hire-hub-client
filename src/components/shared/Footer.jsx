import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#010103]  text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/">
              <h2 className="text-3xl font-bold">
                <span className="text-white">Hire</span>
                <span className="text-blue-500">Hub</span>
              </h2>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded bg-[#111827] hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded bg-[#111827] hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded bg-[#111827] hover:bg-blue-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Job Discovery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Worker AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Salary Data
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Career Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Brand Guideline
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Copyright 2026 - HireHub</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">
              Terms & Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">
              Privacy Guideline
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
