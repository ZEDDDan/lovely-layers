import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./CategoryPopularity.css";
import { useCategoryPopularityData } from "../../hooks/logic/useCategoryPopularityData";

const CategoryPopularity: React.FC = () => {
  const { categories, percentage } = useCategoryPopularityData();

  return (
    <div className="category-popularity">
      <h4 className="category-popularity__title">Популярність категорій</h4>
      <div className="category-popularity__chart">
        <PieChart width={200} height={200}>
          <Pie
            data={categories}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
          >
            {categories.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
        </PieChart>
        <div className="category-popularity__percentage">{percentage}%</div>
      </div>
      <div className="category-popularity__legend">
        {categories.map((category) => (
          <div key={category.name} className="category-popularity__legend-item">
            <span
              className="category-popularity__legend-color"
              style={{ backgroundColor: category.color }}
            ></span>
            <span className="category-popularity__legend-label">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPopularity;
