import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SidebarNav from "./components/SidebarNav";
import FinancialOverview from "./components/FinancialOverview";
import ProfitLossMeter from "./components/ProfitLossMeter";
import ExpensesByCategory from "./components/ExpensesByCategory";
import DailyTrendChart from "./components/DailyTrendChart";
import AIPredictions from "./components/AIPredictions";
import AlertRenderer from "./components/AlertRenderer";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import Backup from "./components/Backup";
import KPIDashboard from "../system/KPIDashboard";
import NotificationCenter from "../system/NotificationCenter";
import ComplianceChecker from "../system/ComplianceChecker";
import ForecastEngine from "../ai/ForecastEngine";
import SentimentAnalyzer from "../ai/SentimentAnalyzer";
import WebhookBuilder from "../ai/WebhookBuilder";
import LegacyExporter from "../system/LegacyExporter";
import SystemHealth from "../system/SystemHealth";
import FinalPolish from "../system/FinalPolish";
import { getFinancialData } from "./services/mongoService";
import { getAlerts } from "./services/firebaseAlerts";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const financials = await getFinancialData();
      const alertData = await getAlerts();
      setData(financials);
      setAlerts(alertData);
    }
    fetchData();
  }, []);

  if (!data) return <div className="text-center p-10">Loading CEO Dashboard...</div>;

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <SidebarNav />
      <div className="flex-1 p-6 overflow-y-auto">
        <Header date={data.date} />
        <h2 className="text-2xl font-bold text-blue-900 mt-6">CEO Dashboard</h2>
        <p className="text-sm text-gray-600 mb-6">Systemic System – Finmeect</p>

        <FinancialOverview
          revenue={data.revenue}
          customers={data.customers}
          conversion={data.conversion}
        />
        <ProfitLossMeter profit={data.profitPercentage} />
        <ExpensesByCategory expenses={data.expensesByCategory} />
        <DailyTrendChart dailyExpenses={data.dailyExpenses} />
        <AIPredictions ai={data.aiPredictions} />
        <AlertRenderer alerts={alerts} />
        <Reports data={data} />
        <Settings onBackup={() => {}} />
        <Backup />
        <KPIDashboard kpi={data.kpi} />
        <NotificationCenter />
        <ComplianceChecker />
        <ForecastEngine forecast={data.forecast} />
        <SentimentAnalyzer feedback={data.feedback} />
        <WebhookBuilder />
        <LegacyExporter data={data} />
        <SystemHealth status={data.systemStatus} />
        <FinalPolish />
      </div>
    </div>
  );
}
