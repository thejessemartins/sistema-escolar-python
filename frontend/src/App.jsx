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

            {/* Cadastros Routes */}
            <Route path="payment-methods" element={<ComingSoon title="Formas Pgto" />} />
            <Route path="frequencies" element={<ComingSoon title="Frequências" />} />
            <Route path="document-types" element={<ComingSoon title="Tipo Documentos" />} />
            <Route path="contract-models" element={<ComingSoon title="Modelos Contratos" />} />
            <Route path="roles" element={<ComingSoon title="Cargos" />} />
            <Route path="access-groups" element={<ComingSoon title="Grupos de Acessos" />} />
            <Route path="access" element={<ComingSoon title="Acessos" />} />

            {/* Turmas / Disciplinas Routes */}
            <Route path="classes" element={<ComingSoon title="Turmas" />} />
            <Route path="enrollments" element={<ComingSoon title="Lista de Matrículas" />} />
            <Route path="subjects" element={<ComingSoon title="Disciplinas" />} />
            <Route path="courses" element={<ComingSoon title="Cursos" />} />
            <Route path="school-years" element={<ComingSoon title="Ano Letivo" />} />
            <Route path="shifts" element={<ComingSoon title="Turnos" />} />
            <Route path="occurrences" element={<ComingSoon title="Ocorrências" />} />
            <Route path="document-requests" element={<ComingSoon title="Solicitações Documentos" />} />
            <Route path="class-reports" element={<ComingSoon title="Relatório de Aulas" />} />

            {/* Financeiro Routes */}
            <Route path="accounts-payable" element={<ComingSoon title="Contas a Pagar" />} />
            <Route path="accounts-receivable" element={<ComingSoon title="Contas a Receber" />} />

            {/* Rel Financeiro Routes */}
            <Route path="financial-report" element={<ComingSoon title="Relatório Financeiro" />} />
            <Route path="expense-synthetic-report" element={<ComingSoon title="Rel Sintético Despesas" />} />
            <Route path="income-synthetic-report" element={<ComingSoon title="Rel Sintético Receber" />} />
            <Route path="annual-balance-report" element={<ComingSoon title="Rel Balanço Anual" />} />
            <Route path="defaulters-report" element={<ComingSoon title="Rel Inadimplentes" />} />

            {/* Other Routes */}
            <Route path="generate-contracts" element={<ComingSoon title="Gerar Contratos" />} />
            <Route path="cash-registers" element={<ComingSoon title="Caixas" />} />
            <Route path="tasks-agenda" element={<ComingSoon title="Tarefas / Agenda" />} />
            <Route path="notes" element={<ComingSoon title="Anotações" />} />
            <Route path="site-data" element={<ComingSoon title="Dados do Site" />} />

            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
