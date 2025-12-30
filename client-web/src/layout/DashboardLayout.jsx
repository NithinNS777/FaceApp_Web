import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
  return (
<div className="flex min-h-screen bg-gray-100 dark:bg-slate-950">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 text-gray-900 dark:text-gray-100">

{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
