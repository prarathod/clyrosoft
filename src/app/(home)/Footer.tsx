const Footer = () => {
  return (
    <footer className="w-full p-6 bg-[#f8f8f8]">
      <div className="flex flex-col items-center justify-between md:flex-row md:items-start space-y-4 md:space-y-0">
        <div className="text-center md:text-left text-gray-500">
          <p className="text-lg font-semibold text-gray-700">
            ClyroSoft Solution
          </p>
          <p className="text-sm">&copy; 2024 ClyroSoft Solution</p>
          <p className="text-sm">All rights reserved</p>
        </div>

        <div className="flex text-sm flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-8 text-gray-500">
          <div className="flex flex-col items-center  md:items-start md:space-y-.8 md:flex-col ">
            <a href="#" className="hover:text-gray-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-600">
              Refund Policy
            </a>
          </div>

          <div className="flex text-sm flex-col items-center md:items-start md:space-y-.8 md:flex-col">
            <a href="#" className="hover:text-gray-600">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-600">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-600">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
