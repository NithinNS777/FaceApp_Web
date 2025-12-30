const PageContainer = ({ title, children }) => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
<h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">

        {title}
      </h1>
      {children}
    </div>
  );
};

export default PageContainer;
