import React, { useEffect } from 'react';
import { LayoutGrid, Users, DollarSign, Activity, Search, Bell, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Simple authentication check
        const token = localStorage.getItem('access_token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/login');
    };

    const stats = [
        { title: 'Total Revenue', value: '$45,231.89', icon: DollarSign, change: '+20.1%' },
        { title: 'Active Users', value: '+2350', icon: Users, change: '+180.1%' },
        { title: 'Sales', value: '+12,234', icon: LayoutGrid, change: '+19%' },
        { title: 'Active Now', value: '+573', icon: Activity, change: '+201 since last hour' },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-blue-600">MyProject</h2>
                </div>
                <nav className="mt-6 px-4 flex-grow">
                    <Link to="/dashboard" className="flex items-center px-4 py-3 text-gray-700 bg-gray-100 rounded-lg">
                        <LayoutGrid className="w-5 h-5 mr-3" /> Dashboard
                    </Link>
                    <Link to="#" className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Users className="w-5 h-5 mr-3" /> Team
                    </Link>
                    <Link to="/ask" className="flex items-center px-4 py-3 mt-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <MessageSquare className="w-5 h-5 mr-3" /> Ask AI
                    </Link>
                </nav>
                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                        <span>🚪</span> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                            JD
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <stat.icon className="w-5 h-5 text-gray-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                    <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                    <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Activity Placeholder */}
                    <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-64 flex items-center justify-center">
                        <p className="text-gray-400">Charts and detailed analytics would go here.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;