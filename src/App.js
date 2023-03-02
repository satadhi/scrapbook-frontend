import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from './component/Login';

function App() {

  const token = useSelector(state => state.token);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={token ? <Home /> :  <Login /> } /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
