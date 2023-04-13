import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './pages/Dashboard/components/DashboardLayout';
import DashboardPage from './pages/Dashboard';
import TransactionsPage from './pages/Transactions';
import GoalsPage from './pages/Goals';
import PlanningPage from './pages/Planning';
export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="transactions" element={<TransactionsPage />} />
                <Route path="goals" element={<GoalsPage />} />
                <Route path="planning" element={<PlanningPage />} />
            </Route>
        </Routes>
    );
}