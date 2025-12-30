import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, User, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // ✅ redirect to login
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition
     ${
       isActive
         ? "bg-indigo-600 text-white"
         : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
     }`;

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r dark:border-slate-800 min-h-screen p-4">
      <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">
        AEGIS
      </h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/profile" className={linkClass}>
          <User size={20} />
          Profile
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-600 hover:bg-red-50 dark:hover:bg-slate-800 rounded-lg mt-4"
        >
          <LogOut size={20} />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
