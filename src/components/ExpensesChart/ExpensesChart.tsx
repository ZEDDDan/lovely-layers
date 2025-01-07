import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./ExpensesChart.css";

// 100 - 52 = 48
// 48 - 15 = 33
// 33 - 18 = 15

const ExpensesChart = ({
  activeTab,
}: {
  activeTab: "WEEKLY" | "MONTHLY" | "YEARLY";
}) => {
  const data = {
    WEEKLY: [
      { name: "Інше", value: 55, color: "#71717A" },
      { name: "Хостинг", value: 10, color: "#22C55E" },
      { name: "Скасування", value: 18, color: "#DC2626" },
      { name: "Переказ", value: 20, color: "#38BDF8   " },
      { name: "Реклама", value: 15, color: "#4F46E5" },
      { name: "Закупівля", value: 5, color: "#FACC15" },
    ],
    MONTHLY: [
      { name: "Інше", value: 5, color: "#71717A" },
      { name: "Хостинг", value: 10, color: "#22C55E" },
      { name: "Скасування", value: 18, color: "#DC2626" },
      { name: "Переказ", value: 55, color: "#38BDF8   " },
      { name: "Реклама", value: 22, color: "#4F46E5" },
      { name: "Закупівля", value: 12, color: "#FACC15" },
    ],
    YEARLY: [
      { name: "Інше", value: 5, color: "#71717A" },
      { name: "Хостинг", value: 10, color: "#22C55E" },
      { name: "Скасування", value: 18, color: "#DC2626" },
      { name: "Переказ", value: 20, color: "#38BDF8   " },
      { name: "Реклама", value: 15, color: "#4F46E5" },
      { name: "Закупівля", value: 52, color: "#FACC15" },
    ],
  };

  // процент по средине
  const percentage = 52;

  return (
    <div className="expenses-chart">
      <h4 className="expenses-chart__title">Витрати</h4>
      <div className="expenses-chart__chart">
        <PieChart width={200} height={200}>
          <Pie
            data={data[activeTab]}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            fill="#8884d8"
            outerRadius={80}
            paddingAngle={0}
          >
            {data[activeTab].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="expenses-chart__percentage">{percentage}%</div>
      </div>
      <div className="expenses-chart__legend">
        {data[activeTab].map((item) => (
          <div key={item.name} className="expenses-chart__legend-item">
            <span
              className="expenses-chart__legend-color"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="expenses-chart__legend-label">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesChart;
