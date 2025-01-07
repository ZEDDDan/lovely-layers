import { PieChart, Pie, Cell } from "recharts";
import "./ExpensesChart.css";

// 100 - 52 = 48
// 48 - 15 = 33
// 33 - 18 = 15
const ExpensesChart = () => {
  const data = [
    { name: "Інше", value: 5, color: "#71717A" },
    { name: "Хостинг", value: 10, color: "#22C55E" },
    { name: "Скасування", value: 18, color: "#DC2626" },
    { name: "Переказ", value: 20, color: "#38BDF8   " },
    { name: "Реклама", value: 15, color: "#4F46E5" },
    { name: "Закупівля", value: 52, color: "#FACC15" },
  ];

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const percentage = 52;

  return (
    <div className="expenses-chart">
      <h4 className="expenses-chart__title">Витрати</h4>
      <div className="expenses-chart__chart">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
        </PieChart>
        <div className="expenses-chart__percentage">{percentage}%</div>
      </div>
      <div className="expenses-chart__legend">
        {data.map((item) => (
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
