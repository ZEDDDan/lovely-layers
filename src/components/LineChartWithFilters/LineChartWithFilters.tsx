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
    { date: "Jan 1", value1: 100, value2: 50 },
    { date: "Jan 2", value1: 150, value2: 80 },
    { date: "Jan 3", value1: 200, value2: 100 },
    { date: "Jan 4", value1: 300, value2: 120 },
    { date: "Jan 5", value1: 250, value2: 110 },
    { date: "Jan 6", value1: 180, value2: 90 },
    { date: "Jan 7", value1: 150, value2: 80 },
  ],
  month: [
    { date: "Week 1", value1: 400, value2: 300 },
    { date: "Week 2", value1: 500, value2: 400 },
    { date: "Week 3", value1: 600, value2: 450 },
    { date: "Week 4", value1: 700, value2: 500 },
  ],
  year: [
    { date: "Jan", value1: 1200, value2: 1000 },
    { date: "Feb", value1: 1500, value2: 1200 },
    { date: "Mar", value1: 1800, value2: 1400 },
    { date: "Apr", value1: 1600, value2: 1300 },
    { date: "May", value1: 2000, value2: 1800 },
    { date: "Jun", value1: 2200, value2: 1900 },
    { date: "Jul", value1: 2500, value2: 2100 },
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
            dataKey="value1"
            stroke="#2ECC71"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="value2"
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
