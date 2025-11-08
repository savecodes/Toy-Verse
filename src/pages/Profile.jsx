import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);


  return (
    <section className="flex items-center justify-center py-16 bg-linear-to-b from-blue-50 to-white min-h-[80vh]">
      <div className="bg-white border border-blue-100 rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow-md"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
        <p className="text-gray-600 mt-1">{user?.email}</p>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-blue-400 mx-auto my-6 rounded-full"></div>

        {/* Welcome Message */}
        <h3 className="text-lg font-medium text-blue-600">
          Welcome to Toy-Verse!
        </h3>
      </div>
    </section>
  );
};

export default Profile;
