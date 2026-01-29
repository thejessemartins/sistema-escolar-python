import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from './contexts/ConfigContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


import UserList from './pages/Users/UserList';
import UserForm from './pages/Users/UserForm';
import ComingSoon from './pages/ComingSoon';

import Settings from './pages/Settings';

function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />


          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />

            {/* Pessoas Routes */}
            <Route path="users" element={<UserList />} />
            <Route path="users/create" element={<UserForm />} />
            <Route path="users/edit/:id" element={<UserForm />} />

            <Route path="students" element={<ComingSoon title="Alunos" />} />
            <Route path="teachers" element={<ComingSoon title="Professores" />} />
            <Route path="professionals" element={<ComingSoon title="Profissionais" />} />
            <Route path="suppliers" element={<ComingSoon title="Fornecedores" />} />
            <Route path="birthdays" element={<ComingSoon title="Aniversariantes" />} />

            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
