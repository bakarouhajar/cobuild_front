import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import AdminDashboard from './pages/Dashboard/AdminDashboard.jsx';
import TravailleurDashboard from './pages/Dashboard/TravailleurDashboard.jsx';
import PorteurDashboard from './pages/Dashboard/PorteurDashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/admin/dashboard"
                        element={
                            <ProtectedRoute>
                                <AdminDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/travailleur/dashboard"
                        element={
                            <ProtectedRoute>
                                <TravailleurDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/porteur/dashboard"
                        element={
                            <ProtectedRoute>
                                <PorteurDashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;


// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import LoginAdmin from './pages/Login/LoginAdmin.jsx';
// import LoginTravailleur from './pages/Login/LoginTravailleur.jsx';
// import LoginPorteur from './pages/Login/LoginPorteur.jsx';
// import AdminDashboard from './pages/Dashboard/AdminDashboard.jsx';
// import TravailleurDashboard from './pages/Dashboard/TravailleurDashboard.jsx';
// import PorteurDashboard from './pages/Dashboard/PorteurDashboard.jsx';
// import ProtectedRoute from './components/ProtectedRoute.jsx';
// import { AuthProvider } from './context/AuthContext';
//
// const App = () => {
//     return (
//         <AuthProvider>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Navigate to="/login/admin" replace />} />
//                     <Route path="/login/admin" element={<LoginAdmin />} />
//                     <Route path="/login/travailleur" element={<LoginTravailleur />} />
//                     <Route path="/login/porteur" element={<LoginPorteur />} />
//
//                     <Route
//                         path="/admin/dashboard"
//                         element={
//                             <ProtectedRoute>
//                                 <AdminDashboard />
//                             </ProtectedRoute>
//                         }
//                     />
//                     <Route
//                         path="/travailleur/dashboard"
//                         element={
//                             <ProtectedRoute>
//                                 <TravailleurDashboard />
//                             </ProtectedRoute>
//                         }
//                     />
//                     <Route
//                         path="/porteur/dashboard"
//                         element={
//                             <ProtectedRoute>
//                                 <PorteurDashboard />
//                             </ProtectedRoute>
//                         }
//                     />
//
//                     <Route path="*" element={<Navigate to="/login/admin" replace />} />
//                 </Routes>
//             </Router>
//         </AuthProvider>
//     );
// };
//
// export default App;