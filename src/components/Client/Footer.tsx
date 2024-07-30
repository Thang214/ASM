import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import imft from "../../image/icons_payment 1.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#fff] to-[#DCEED9] pb-20 pt-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold font-baloo text-[#505F4E] text-center md:text-left">
            Etwas abonnieren * <br />_ Unser Newsletter
          </h1>
          <div className="mt-4 flex flex-col md:flex-row items-center">
            <p className="text-[#555555] text-center md:text-left md:ml-20">
              Get weekly update about our <br /> product on your email, no spam{" "}
              <br /> guaranteed we promise{" "}
              <span role="img" aria-label="peace">
                ✌️
              </span>
            </p>
            <div className="mt-4 flex justify-center md:justify-start md:ml-auto">
              <div className="relative flex items-center w-full md:w-auto">
                <span className="absolute left-3 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.94 3.06a8.002 8.002 0 0112.12 0 7.978 7.978 0 011.756 6.182l-.066.192A5.992 5.992 0 0110 18H6.888A7.978 7.978 0 015 12.244a8.035 8.035 0 01-2.06-9.182zM14.612 9.95l-.188-.05a1.5 1.5 0 10-1.287 2.787l.188.05a1.5 1.5 0 101.287-2.787zM10.5 4a1 1 0 100 2 1 1 0 000-2zm-2 4a1 1 0 100 2 1 1 0 000-2zm2.5 4a1 1 0 110 2 1 1 0 010-2zm-3.5 2a1 1 0 100 2 1 1 0 000-2zm5-4a1 1 0 100 2 1 1 0 000-2zm-2.5 2a1 1 0 110 2 1 1 0 010-2zm-3 2a1 1 0 100 2 1 1 0 000-2zm5.5 1a1 1 0 110 2 1 1 0 010-2zM8.5 12a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="youremail123@gmail.com"
                  className="w-full md:w-64 pr-10 py-3 pl-10 border rounded-md focus:outline-none focus:ring-2"
                />
                <button className="bg-[#656C66] absolute right-0 top-0 bottom-0 px-4 py-2 rounded-md">
                  ABONNIEREN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#053D29] p-4 py-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-20">
          <div className="flex-1 mb-6 md:mb-0">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit, sed do eiusmod tempor incididunt ut labore et <br />
              dolore magna aliqua
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gray-900">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-900">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-900">
                <FaYoutube className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-900">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 text-white">
            <h4 className="font-semibold">Um</h4>
            <ul className="mt-3">
              <li className="mt-3">Kontaktiere uns</li>
              <li className="mt-3">Über uns</li>
              <li className="mt-3">Karriere</li>
              <li className="mt-3">Unternehmensinformationen</li>
            </ul>
          </div>
          <div className="flex-1 text-white">
            <h4 className="font-semibold">Hilfe</h4>
            <ul className="mt-3">
              <li className="mt-3">Unsere Produzenten</li>
              <li className="mt-3">Zahlung</li>
              <li className="mt-3">Versand</li>
              <li className="mt-3">Stornierung & Rückgabe</li>
              <li className="mt-3">Verstoß melden</li>
            </ul>
          </div>
          <div className="flex-1 text-white">
            <h4 className="font-semibold">Politik</h4>
            <ul className="mt-3">
              <li className="mt-3">Rücknahmegarantie</li>
              <li className="mt-3">Nutzungsbedingungen</li>
              <li className="mt-3">Sicherheit</li>
              <li className="mt-3">Privatsphäre</li>
              <li className="mt-3">Seitenverzeichnis</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-[#062F21] p-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white mb-4 md:mb-0">2023 hood.de, Inc.</p>
        <img src={imft} alt="Payment Methods" className="mb-4 md:mb-0" />
        <p className="text-white cursor-pointer">Scroll to top</p>
      </div>
    </>
  );
};

export default Footer;
