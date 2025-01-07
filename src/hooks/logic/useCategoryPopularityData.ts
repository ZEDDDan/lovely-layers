import { useState, useEffect } from "react";

interface CategoryData {
  name: string;
  value: number;
  color: string;
  thickness: number; // Толщина для каждого сегмента
}

export const useCategoryPopularityData = (
  activeTab: "WEEKLY" | "MONTHLY" | "YEARLY"
) => {
  const [categories, setCategories] = useState<CategoryData[]>([]);

  const [percentage, setPercentage] = useState(72); // Центр диаграммы

  useEffect(() => {
    // Замокаем данные
    const mockData: Record<"WEEKLY" | "MONTHLY" | "YEARLY", CategoryData[]> = {
      WEEKLY: [
        { name: "Жіноче", value: 15, color: "#E6007E", thickness: 12 }, // Розовый
        { name: "Дитяче", value: 13, color: "#0000FF", thickness: 10 }, // Синий
        { name: "Чоловіче", value: 72, color: "#FFCC00", thickness: 18 }, // Жёлтый
      ],
      MONTHLY: [
        { name: "Жіноче", value: 60, color: "#E6007E", thickness: 12 }, // Розовый
        { name: "Дитяче", value: 22, color: "#0000FF", thickness: 10 }, // Синий
        { name: "Чоловіче", value: 12, color: "#FFCC00", thickness: 18 }, // Жёлтый
      ],
      YEARLY: [
        { name: "Жіноче", value: 15, color: "#E6007E", thickness: 12 }, // Розовый
        { name: "Дитяче", value: 13, color: "#0000FF", thickness: 10 }, // Синий
        { name: "Чоловіче", value: 72, color: "#FFCC00", thickness: 18 }, // Жёлтый
      ],
    };

    setCategories(mockData[activeTab]);
  }, [activeTab]);

  return { categories, percentage };
};
