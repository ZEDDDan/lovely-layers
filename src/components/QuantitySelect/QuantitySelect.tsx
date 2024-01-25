import React, { FC, useEffect, useState } from "react";

import "./QuantitySelect.css";

interface IQuantitySelect {
  maxCount?: number;
  onChange?: (value: number) => void;
}

const QuantitySelect: FC<IQuantitySelect> = ({
  maxCount = 1,
  onChange = () => {},
}) => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  const handleCount = (type: "plus" | "minus") => {
    switch (type) {
      case "plus":
        if (count + 1 <= maxCount) {
          setCount(count + 1);
          onChange(count + 1);
        }
        break;
      case "minus":
        if (count - 1 !== 0) {
          setCount(count - 1);
          onChange(count - 1);
        }
        break;
    }
  };

  return (
    <div className="quantity-select">
      <button onClick={() => handleCount("minus")}>
        <img src="/static/images/minus-icon.svg" alt="minus" />
      </button>
      <div className="quantity-select__count">{count}</div>
      <button onClick={() => handleCount("plus")}>
        <img src="/static/images/plus-icon.svg" alt="plus" />
      </button>
    </div>
  );
};

export default QuantitySelect;
