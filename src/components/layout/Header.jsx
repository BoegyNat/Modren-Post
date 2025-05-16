import ThemeSwitcher from "./ThemeSwitcher";
import { MessageCircleMore } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full shadow-sm py-4 px-6 bg-white dark:bg-gray-800 transition duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="flex items-center text-xl font-bold text-gray-900 dark:text-white">
          <MessageCircleMore className="mr-2" /> Modern Posts
        </h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
