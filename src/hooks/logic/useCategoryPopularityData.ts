import { useState, useEffect } from "react";

interface CategoryData {
  name: string;
  value: number;
  color: string;
  thickness: number; // Толщина для каждого сегмента
}

export const useCategoryPopularityData = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [percentage, setPercentage] = useState(72); // Центр диаграммы

  useEffect(() => {
    // Замокаем данные
    const mockData: CategoryData[] = [
      { name: "Жіноче", value: 15, color: "#E6007E", thickness: 12 }, // Розовый
      { name: "Дитяче", value: 13, color: "#0000FF", thickness: 10 }, // Синий
      { name: "Чоловіче", value: 72, color: "#FFCC00", thickness: 18 }, // Жёлтый
    ];

    setCategories(mockData);
  }, []);

  return { categories, percentage };
};
