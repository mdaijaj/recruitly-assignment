import {Route, Routes} from 'react-router-dom';
import CompanyList from './companylist';
import AddCompany from './add_company'
import UpdateCompany from './update_company';


const Routing=()=>{

  return(
    <>
        <Routes>
          <Route path="/" element={<CompanyList/>} />
          <Route path="/add_company" element={<AddCompany/>} />
          <Route path="/update_company/:id" element={<UpdateCompany/>} />
        </Routes>
    </>
    )
}


export default Routing;