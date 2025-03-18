import { Route, Routes } from 'react-router-dom';
import Calender from '../pages/(main)/calendar/page';
import Home from '../pages/(main)/home/home';
import Login from '../pages/login/page';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calender />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
