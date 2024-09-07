import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// 懒加载组件
const Home = lazy(() => import('../views/Home/Home'));
const Detail = lazy(() => import('../views/Detail/Detail'));
const Blog = lazy(() => import('../views/Blog/Blog'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;