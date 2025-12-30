import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../hooks/useAuth";

const Topbar = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
<header className="h-16 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex items-center justify-between px-6">
<h1 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
        Student Dashboard
      </h1>

      <div className="flex items-center gap-4">
        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700"
        >
          {theme === "dark" ? (
            <Sun className="text-yellow-400" size={20} />
          ) : (
            <Moon className="text-gray-700" size={20} />
          )}
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {user?.name}
          </span>
          <img
            src={user?.profileImageUrl}
            className="w-9 h-9 rounded-full border"
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
