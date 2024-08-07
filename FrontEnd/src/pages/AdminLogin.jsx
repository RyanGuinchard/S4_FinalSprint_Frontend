import axios from 'axios';
import { useState } from 'react';
import BackButton from '../components/BackButton'; // Import the BackButton component

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/admin/login', new URLSearchParams({
                username: username,
                password: password,
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true,
            });

            if (response.status === 200) {
                window.location.href = '/admin';
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4 relative"> {/* Added 'relative' for positioning */}
            <BackButton />
            <h1 className="text-4xl font-bold mb-8">Admin Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-4 p-2 w-full max-w-sm text-gray-900 rounded-lg"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 p-2 w-full max-w-sm text-gray-900 rounded-lg"
            />
            <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Login
            </button>
        </div>
    );
}

export default AdminLogin;
