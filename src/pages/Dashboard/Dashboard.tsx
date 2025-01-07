import React, { useState } from "react";
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation";
import { useInfoCardsData } from "../../hooks/logic/useInfoCardsData";
import InfoCard from "../../components/InfoCard/InfoCard";
import "./Dashboard.css";
import CategoryPopularity from "../../components/CategoryPopularity/CategoryPopularity";
import ExpensesChart from "../../components/ExpensesChart/ExpensesChart";
import LineChartWithFilters from "../../components/LineChartWithFilters/LineChartWithFilters";
import ConversionRate from "../../components/ConversionRate/ConversionRate";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import Tabs from "../../components/Tabs/Tabs";

const transactions = [
  {
    date: "8 Січень 2025",
    title: "Замовлення #8",
    amount: 3200,
    icon: "/static/icons/shoe-icon.png",
    isIncome: true,
  },
  {
    date: "22 Вересень 2022",
    title: "Реклама",
    amount: 200,
    icon: "/static/icons/ads-icon.png",
    isIncome: false,
  },
  {
    date: "21 Вересень 2022",
    title: "Закупівля",
    amount: 1200,
    icon: "/static/icons/shopping-icon.png",
    isIncome: false,
  },
];

const Dashboard: React.FC = () => {
  const infoCardsData = useInfoCardsData();

  const [activeTab, setActiveTab] = useState<"WEEKLY" | "MONTHLY" | "YEARLY">(
    "MONTHLY"
  );

  const handleTabChange = (tab: "WEEKLY" | "MONTHLY" | "YEARLY") => {
    setActiveTab(tab);
  };

  return (
    <>
      <AdminNavigation />
      <div className="dashboard">
        <div className="dashboard__column">
          {infoCardsData.slice(0, 2).map((card) => (
            <InfoCard
              id={card.id}
              key={card.id}
              icon={card.icon}
              title={card.title}
              value={card.value}
              tooltipInfo={card.tooltipInfo}
            />
          ))}
          <CategoryPopularity />
          {infoCardsData.slice(2, 4).map((card) => (
            <InfoCard
              id={card.id}
              key={card.id}
              icon={card.icon}
              title={card.title}
              value={card.value}
              tooltipInfo={card.tooltipInfo}
            />
          ))}
        </div>
        <div className="dashboard__center">
          <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
          <div>
            {transactions.map((transaction, index) => (
              <TransactionCard
                key={index}
                date={transaction.date}
                title={transaction.title}
                amount={transaction.amount}
                icon={transaction.icon}
                isIncome={transaction.isIncome}
              />
            ))}
          </div>
        </div>
        <div className="dashboard__column">
          {infoCardsData.slice(4, 6).map((card) => (
            <InfoCard
              id={card.id}
              key={card.id}
              icon={card.icon}
              title={card.title}
              value={card.value}
              tooltipInfo={card.tooltipInfo}
            />
          ))}
          <ExpensesChart />

          {infoCardsData.slice(6).map((card) => (
            <InfoCard
              id={card.id}
              key={card.id}
              icon={card.icon}
              title={card.title}
              value={card.value}
              tooltipInfo={card.tooltipInfo}
            />
          ))}
        </div>
      </div>
      <div className="dashboard-end">
        <LineChartWithFilters />
        <ConversionRate />
      </div>
    </>
  );
};

export default Dashboard;
