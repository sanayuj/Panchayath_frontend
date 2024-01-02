
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRoutes/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
