// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

interface Props {
    children: React.ReactNode;
    allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles = [] }: Props) {
    // const { user } = useAuth();
    // const location = useLocation();
    console.log('ProtectedRoute', { children, allowedRoles });

    // if (!user?.isAuthenticated) {
    //     return <Navigate to="/login" replace state={{ from: location }} />;
    // }

    // if (allowedRoles.length && !allowedRoles.includes(user.role)) {
    //     return <Navigate to="/unauthorized" replace />;
    // }

    return <>{children}</>;
}
