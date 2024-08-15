import React from 'react';
import ProfileDetails from '@/profile/profiledetails';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-200">
        <div className="p-6 text-xl font-bold">
          <a href="/dashboard" className="block text-white hover:text-gray-400">
            My Dashboard
          </a>
        </div>
        <nav>
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <a href="/profile" className="block">Profile</a>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <a href="/settings" className="block">Settings</a>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <a href="/activities" className="block">Recent Activities</a>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <a href="/logout" className="block text-red-400">Logout</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Welcome, [User Name]</h1>
          <div>
            <a href="/profile" className="text-blue-500 hover:underline">Edit Profile</a>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Profile Information</h2>
            <p className="text-gray-700">View and update your profile details.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
            <p className="text-gray-700">See what you’ve been up to recently.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Settings</h2>
            <p className="text-gray-700">Manage your account settings.</p>
          </div>

          <div>
            <ProfileDetails/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
