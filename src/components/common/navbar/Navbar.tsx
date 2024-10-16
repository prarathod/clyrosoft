import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 text-black bg-gray-100">
      <div className="font-bold text-lg">ClyroSoft</div>
      <div className="space-x-4">
        <Link href="/work">
          <span className="relative inline-block group">
            <span className="absolute bolder left-0 bottom-0 h-[2px] w-full bg-black scale-x-0 transition-transform duration-200 ease-in-out scale-x-100"></span>
            Work
          </span>
        </Link>
        <Link href="/services">
          <span className="relative inline-block group">
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
            Services
          </span>
        </Link>
        <Link href="/articles">
          <span className="relative inline-block group">
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
            Articles
          </span>
        </Link>
        <Link href="/about">
          <span className="relative inline-block group">
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
            About Us
          </span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          className="w-[30px] h-[30px] border border-gray-300 text-[#1e293b] bg-transparent rounded-full p-2 transition-colors duration-200 ease-in-out hover:bg-[#1e293b] hover:text-white">
          <Plus size={18} />
        </Button>
        <Button
          variant="ghost"
          className="border border-gray-300 text-[#1e293b] bg-transparent px-4 py-2 z-10 transition-colors duration-200 ease-in-out hover:bg-[#1e293b] hover:text-white"
        >
          Login
        </Button>
        <Button
          variant="default"
          className="border border-gray-300 bg-[#1e293b] text-white px-4 py-2 z-10 transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#1e293b]"
        >
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
