import React from 'react';
import { useKeycloak } from '../contexts/KeycloakContext';
import { User, CreditCard, MapPin, ClipboardList, Settings, LogOut } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { userProfile, logout } = useKeycloak();

  const tabs = [
    { icon: <User className="h-5 w-5" />, name: 'Personal Info', active: true },
    { icon: <ClipboardList className="h-5 w-5" />, name: 'Order History', active: false },
    { icon: <MapPin className="h-5 w-5" />, name: 'Addresses', active: false },
    { icon: <CreditCard className="h-5 w-5" />, name: 'Payment Methods', active: false },
    { icon: <Settings className="h-5 w-5" />, name: 'Account Settings', active: false },
  ];

  // Mock order history
  const orders = [
    {
      id: 'ORD-12345',
      date: 'May 15, 2025',
      total: 35.97,
      status: 'Delivered',
      items: 3,
    },
    {
      id: 'ORD-12344',
      date: 'May 10, 2025',
      total: 24.99,
      status: 'Delivered',
      items: 2,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">My Profile</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <User className="h-10 w-10" />
              </div>
              <h2 className="font-semibold text-lg">
                {userProfile?.firstName} {userProfile?.lastName || ''}
              </h2>
              <p className="text-gray-500 text-sm">{userProfile?.email || 'user@example.com'}</p>
            </div>

            <nav>
              <ul className="space-y-1">
                {tabs.map((tab) => (
                  <li key={tab.name}>
                    <button
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                        tab.active
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {tab.icon}
                      <span className={tab.active ? 'font-medium' : ''}>{tab.name}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={logout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Log Out</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue={userProfile?.firstName || 'John'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue={userProfile?.lastName || 'Doe'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue={userProfile?.email || 'john.doe@example.com'}
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  defaultValue="+1 (123) 456-7890"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Items
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.items} items
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-600 font-medium">
                        <button>View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="text-emerald-600 font-medium hover:text-emerald-700">
                View All Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;