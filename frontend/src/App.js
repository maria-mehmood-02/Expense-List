import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import EmployeeDashboard from './components/employee/EmployeeDashboard';
import AdminDashborad from './components/admin/AdminDashborad';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/emp' element={<EmployeeDashboard />} />
      <Route path='/admin' element={<AdminDashborad />} />
    </Routes>
  );
}

export default App;
