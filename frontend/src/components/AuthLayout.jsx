import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
    return (
        <div className="form-screen">
            <Link to="/" className="spur-logo" style={{ textDecoration: 'none' }}>
                <i class="bi bi-person-video3 text-dark"></i><span style={{ textDecoration: 'none' }}>Learn System</span>
            </Link>
            {children}
        </div>
    );
};

export default AuthLayout;
