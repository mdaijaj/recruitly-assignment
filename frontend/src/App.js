import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CompanyList from './components/companylist'
import Navbar from './components/navbar'
import UpdateCompany from './components/update_company'
import AddCompany from './components/add_company'
import LoginPage from './components/login_user';


const  App= ()=> {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<CompanyList/>}/>
          <Route exact path="/add_company" element={<AddCompany/>}/>
          <Route exact path="/login" element={<LoginPage/>}/>
          <Route exact path="/update_company/:id" element={<UpdateCompany/>}/>
        </Routes>
      </div>
  );
}

export default App;
