"use client";
import React, { ChangeEvent, useState } from "react";
import Checkbox from "./Checkbox";

const CheckBoxContainer = () => {
  const [data, setData] = useState({
    beautiful: false,
    fast: false,
    cheap: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setData(updateData(name, checked));
  };

  const updateData = (name: string, checked: boolean) => {
    const result = data;
    if (checked) {
      if (name === "beautiful") {
        result.cheap = false;
      }
      if (name === "cheap") {
        result.fast = false;
      }
      if (name === "fast") {
        result.beautiful = false;
      }
      result[name as "beautiful" | "cheap" | "fast"] = true;
    } else {
      result[name as "beautiful" | "cheap" | "fast"] = false;
    }
    return result;
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4 last:mb-0">
        <label htmlFor="beautiful" className="flex-1 select-none">
          Đẹp
        </label>
        <Checkbox
          id="beautiful"
          checked={data.beautiful}
          onChange={handleChange}
          name="beautiful"
        />
      </div>
      <div className="mb-4 flex items-center gap-4 last:mb-0">
        <label htmlFor="fast" className="flex-1 select-none">
          Nhanh
        </label>
        <Checkbox
          id="fast"
          checked={data.fast}
          onChange={handleChange}
          name="fast"
        />
      </div>
      <div className="mb-4 flex items-center gap-4 last:mb-0">
        <label htmlFor="cheap" className="flex-1 select-none">
          Rẻ
        </label>
        <Checkbox
          id="cheap"
          checked={data.cheap}
          onChange={handleChange}
          name="cheap"
        />
      </div>
    </div>
  );
};

export default CheckBoxContainer;
