import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./LineChartWithFilters.css";

// Мок-данные для графика
const data = {
  week: [
    { date: "Jan 1", views: 100, sells: 50 },
    { date: "Jan 2", views: 150, sells: 80 },
    { date: "Jan 3", views: 200, sells: 100 },
    { date: "Jan 4", views: 300, sells: 120 },
    { date: "Jan 5", views: 250, sells: 110 },
    { date: "Jan 6", views: 180, sells: 90 },
    { date: "Jan 7", views: 150, sells: 80 },
  ],
  month: [
    { date: "Week 1", views: 400, sells: 300 },
    { date: "Week 2", views: 500, sells: 400 },
    { date: "Week 3", views: 600, sells: 450 },
    { date: "Week 4", views: 700, sells: 500 },
  ],
  year: [
    { date: "Jan", views: 1200, sells: 1000 },
    { date: "Feb", views: 1500, sells: 1200 },
    { date: "Mar", views: 1800, sells: 1400 },
    { date: "Apr", views: 1600, sells: 1300 },
    { date: "May", views: 2000, sells: 1800 },
    { date: "Jun", views: 2200, sells: 1900 },
    { date: "Jul", views: 2500, sells: 2100 },
  ],
};

const LineChartWithFilters: React.FC = () => {
  const [filter, setFilter] = useState<"week" | "month" | "year">("week");

  const handleFilterChange = (newFilter: "week" | "month" | "year") => {
    setFilter(newFilter);
  };

  return (
    <div className="line-chart-with-filters">
      <div className="line-chart-with-filters__wrapper">
        <h4 className="line-chart-with-filters__title">Перегляди</h4>
        <div className="line-chart-with-filters__filters">
          <button
            className={`filter-button ${filter === "week" ? "active" : ""}`}
            onClick={() => handleFilterChange("week")}
          >
            Week
          </button>
          <button
            className={`filter-button ${filter === "month" ? "active" : ""}`}
            onClick={() => handleFilterChange("month")}
          >
            Month
          </button>
          <button
            className={`filter-button ${filter === "year" ? "active" : ""}`}
            onClick={() => handleFilterChange("year")}
          >
            Year
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data[filter]}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <XAxis dataKey="date" tick={{ fill: "#fff" }} />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1C1C1C",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
            }}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="views"
            stroke="#2ECC71"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="sells"
            stroke="#F39C12"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartWithFilters;
