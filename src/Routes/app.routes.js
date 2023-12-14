import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from '../Pages/MainPage';
import Layout from '../Components/Layout';
import TestPage from '../Pages/Test';

const AppRoutes = () => (
    <Layout>
        <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="test_Page" element={<TestPage />} />
        </Routes>
    </Layout>

);

export default AppRoutes;