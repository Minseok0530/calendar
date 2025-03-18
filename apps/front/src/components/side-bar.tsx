import React from 'react';
import { Link } from 'react-router-dom';
export default function SideBar() {
  return (
    <div className="w-[20%] flex flex-col">
      <Link to={'/calendar'}>Calendar</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
