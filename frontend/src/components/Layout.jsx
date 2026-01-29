import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useConfig } from '../contexts/ConfigContext';


const Layout = () => {
  const { appName } = useConfig();
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileShow, setIsMobileShow] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPessoasOpen, setIsPessoasOpen] = useState(false);
  const [isCadastrosOpen, setIsCadastrosOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear(); // Or specific keys like localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleMenu = () => {
    if (window.innerWidth <= 991) {
      setIsMobileShow(!isMobileShow);
    } else {
      setIsCompact(!isCompact);
    }
  };

  const toggleProfile = (e) => {
    e.preventDefault();
    setIsProfileOpen(!isProfileOpen);
  };

  const togglePessoas = (e) => {
    e.preventDefault();
    setIsPessoasOpen(!isPessoasOpen);
  };

  const toggleCadastros = (e) => {
    e.preventDefault();
    setIsCadastrosOpen(!isCadastrosOpen);
  };



  return (
    <div className={`dash ${isCompact ? 'dash-compact' : ''}`}>
      <div className={`dash-nav dash-nav-dark ${isMobileShow ? 'mobile-show' : ''}`}>
        <header>
          <a href="#!" className="menu-toggle" onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </a>
          <Link to="/dashboard" className="spur-logo" style={{ textDecoration: 'none' }}>
            <i class="bi bi-fullscreen text-white"></i> <span style={{ textDecoration: 'none' }}>{appName}</span>
          </Link>
        </header>
        <nav className="dash-nav-list">

          <Link to="/dashboard" className={`dash-nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
            <i className="bi bi-grid-1x2"></i> Painel
          </Link>

          <div className={`dash-nav-dropdown ${isPessoasOpen ? 'show' : ''}`}>
            <a href="#!" className="dash-nav-item dash-nav-dropdown-toggle" onClick={togglePessoas} style={{ textDecoration: 'none' }}>
              <i className="bi bi-people"></i> Pessoas
            </a>
            <div className={`dash-nav-dropdown-menu ${isPessoasOpen ? 'show' : ''}`}>
              <Link to="/dashboard/students" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Alunos</Link>
              <Link to="/dashboard/teachers" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Professores</Link>
              <Link to="/dashboard/users" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Usuários</Link>
              <Link to="/dashboard/professionals" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Profissionais</Link>
              <Link to="/dashboard/suppliers" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Fornecedores</Link>
              <Link to="/dashboard/birthdays" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Aniversariantes</Link>
            </div>
          </div>

          <div className={`dash-nav-dropdown ${isCadastrosOpen ? 'show' : ''}`}>
            <a href="#!" className="dash-nav-item dash-nav-dropdown-toggle" onClick={toggleCadastros} style={{ textDecoration: 'none' }}>
              <i className="bi bi-save"></i> Cadastros
            </a>
            <div className={`dash-nav-dropdown-menu ${isCadastrosOpen ? 'show' : ''}`}>
              <Link to="/dashboard/payment-methods" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Formas Pgto</Link>
              <Link to="/dashboard/frequencies" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Frequências</Link>
              <Link to="/dashboard/document-types" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Tipo Documentos</Link>
              <Link to="/dashboard/contract-models" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Modelos Contratos</Link>
              <Link to="/dashboard/roles" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Cargos</Link>
              <Link to="/dashboard/access-groups" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Grupos de Acessos</Link>
              <Link to="/dashboard/access" className="dash-nav-dropdown-item" style={{ textDecoration: 'none' }}>Acessos</Link>
            </div>
          </div>



        </nav>
      </div>

      <div className="dash-app">
        <header className="dash-toolbar">
          <a href="#!" className="menu-toggle" onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </a>

          <div className="tools">

            <div className={`dropdown tools-item ${isProfileOpen ? 'show' : ''}`}>
              <a href="#" className="" id="dropdownMenu1" onClick={toggleProfile} aria-haspopup="true" aria-expanded={isProfileOpen}>
                <i className="bi bi-gear" style={{ fontSize: '20px' }}></i>
              </a>
              <div className={`dropdown-menu dropdown-menu-end ${isProfileOpen ? 'show' : ''}`} aria-labelledby="dropdownMenu1">
                <Link className="dropdown-item" to="/dashboard/settings">Configurações</Link>
                <a className="dropdown-item" href="#!" onClick={handleLogout}>Sair</a>
              </div>
            </div>
          </div>
        </header>

        <main className="dash-content">
          <div className="container-fluid">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
