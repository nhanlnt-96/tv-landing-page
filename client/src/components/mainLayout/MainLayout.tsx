import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'configs/routes';

const MainLayout: FC = () => {
  return (
    <Routes>
      {routes.map((val, index) => {
        return <Route key={index} path={val.path} element={val.module} />;
      })}
    </Routes>
  );
};

export default MainLayout;
