import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Toolbar = () => {
  const location = useLocation(); 

  return (
    <div className="toolbar d-flex space-arnd">
        {location.pathname !=="/shop" &&  <Link to="/shop">Shop</Link>}
        {location.pathname !=="/arena" &&  <Link to="/arena">Arena</Link>}
        {location.pathname !=="/main" &&  <Link to="/main">Main</Link>}
    </div>
  );
};

export default Toolbar;