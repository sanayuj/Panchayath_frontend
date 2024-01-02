
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRoutes/>} />
          <Route path='/admin/*' element={<AdminRoutes/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
