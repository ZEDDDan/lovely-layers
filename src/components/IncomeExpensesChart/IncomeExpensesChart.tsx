import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./IncomeExpensesChart.css";

interface ChartData {
  name: string;
  income: number;
  expense: number;
}

interface IncomeExpensesChartProps {
  filter: "income" | "expense";
  onFilterChange: (filter: "income" | "expense") => void;
  activeTab: "WEEKLY" | "MONTHLY" | "YEARLY";
}

const IncomeExpensesChart: React.FC<IncomeExpensesChartProps> = ({
  filter,
  onFilterChange,
  activeTab,
}) => {
  const data: Record<string, ChartData[]> = {
    WEEKLY: [
      // income - сколько добавилось expense - сколько убавилось
      { name: "Mon", income: 1000, expense: 400 },
      { name: "Tue", income: 2000, expense: 800 },
      { name: "Wed", income: 1500, expense: 600 },
      { name: "Thu", income: 1800, expense: 700 },
      { name: "Fri", income: 2200, expense: 900 },
      { name: "Sat", income: 1900, expense: 1000 },
      { name: "Sun", income: 2300, expense: 1100 },
    ],
    MONTHLY: [
      { name: "Jan", income: 12000, expense: 8000 },
      { name: "May", income: 20000, expense: 17000 },
      { name: "Jun", income: 22000, expense: 19000 },
    ],
    YEARLY: [
      { name: "2018", income: 0, expense: 0 },
      { name: "2019", income: 0, expense: 0 },
      { name: "2020", income: 0, expense: 0 },
      { name: "2021", income: 0, expense: 0 },
      { name: "2022", income: 0, expense: 0 },
      { name: "2023", income: 0, expense: 0 },
      { name: "2024", income: 260000, expense: 210000 },
      { name: "2025", income: 0, expense: 0 },
    ],
  };

  return (
    <div className="income-expenses-chart">
      <h4 className="chart-title">Графік Поповнень/Витрат</h4>
      <div className="chart-filters">
        <button
          className={`chart-filter ${filter === "income" ? "active" : ""}`}
          onClick={() => onFilterChange("income")}
        >
          Поповнення
        </button>
        <button
          className={`chart-filter ${
            filter === "expense" ? "active-expense" : ""
          }`}
          onClick={() => onFilterChange("expense")}
        >
          Витрати
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data[activeTab]}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(23, 23, 23, 0.98)",
              color: "#fff",
            }}
          />
          <Bar
            barSize={20}
            activeBar={false}
            dataKey={filter}
            fill={filter === "income" ? "#4caf50" : "#f44336"}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpensesChart;
