import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authApi';
import { useAuthContext } from '../../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { setAuthToken } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await loginUser(username, password);
            setAuthToken(token);

            const decoded = jwtDecode(token);
            console.log('Decoded token:', decoded);

            const role = decoded?.role || decoded?.authorities?.[0]?.authority || decoded?.sub || '';
            console.log('Extracted role:', role);

            const normalizedRole = role.toLowerCase();

            if (normalizedRole.includes('admin')) navigate('/admin/dashboard');
            else if (normalizedRole.includes('travailleur')) navigate('/travailleur/dashboard');
            else if (normalizedRole.includes('porteur') || normalizedRole.includes('fournisseur')) {
                navigate('/porteur/dashboard');
            } else {
                navigate('/');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mb-6 border rounded"
                        required
                    />
                    <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;