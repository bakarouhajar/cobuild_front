import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { authToken } = useAuthContext();
    return authToken ? children : <Navigate to="/login/admin" replace />;
};

export default ProtectedRoute;