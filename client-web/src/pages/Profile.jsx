import { useAuth } from "../hooks/useAuth";
import PageContainer from "../components/PageContainer";

const Profile = () => {
  const { user } = useAuth();
  if (!user) return null;

  const semester = user.attendanceHistory?.[0];

  return (
    <PageContainer title="Profile">
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm p-6 flex flex-col md:flex-row gap-8">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-indigo-500 object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {user.name}
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Roll Number:
            </span>{" "}
            {user.rollNumber}
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Class:
            </span>{" "}
            {user.className}
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium text-gray-900 dark:text-gray-100">
              College:
            </span>{" "}
            {user.collegeName}
          </p>

          {semester && (
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                Current Semester:
              </span>{" "}
              {semester.semester}
            </p>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default Profile;
