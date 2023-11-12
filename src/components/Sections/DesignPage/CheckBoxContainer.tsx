"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Checkbox from "./Checkbox";

type DesignType = "beautiful" | "cheap" | "fast";

const CheckBoxContainer = () => {
  const [data, setData] = useState({
    beautiful: false,
    fast: false,
    cheap: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const result = { ...data, [name]: checked };

    if (name === "beautiful") {
      // Beautiful
      if (result.cheap) {
        result.fast = false;
      } else if (result.fast) {
        result.cheap = false;
      }
    } else if (name === "cheap") {
      // Cheap
      if (result.beautiful) {
        result.fast = false;
      } else if (result.fast) {
        result.beautiful = false;
      }
    } else if (name === "fast") {
      // Fast
      if (result.beautiful) {
        result.cheap = false;
      } else if (result.cheap) {
        result.beautiful = false;
      }
    }
    console.log(name, checked, result);
    setData(result);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4 last:mb-0">
        <label htmlFor="beautiful" className="flex-1 select-none text-3xl">
          Đẹp
        </label>
        <div className="relative">
          <Checkbox
            className="peer/checkbox hidden h-0 w-0"
            id="beautiful"
            checked={data.beautiful}
            onChange={handleChange}
            name="beautiful"
          />
        </div>
      </div>
      <div className="mb-4 flex items-center gap-4 last:mb-0">
        <label htmlFor="fast" className="flex-1 select-none text-3xl">
          Nhanh
        </label>
        <div className="relative">
          <Checkbox
            className="peer/checkbox hidden h-0 w-0"
            id="fast"
            checked={data.fast}
            onChange={handleChange}
            name="fast"
          />
        </div>
      </div>
      <div className="mb-4 flex items-center gap-4 last:mb-0">
        <label htmlFor="cheap" className="flex-1 select-none text-3xl">
          Rẻ
        </label>
        <div className="relative">
          <Checkbox
            className="peer/checkbox hidden h-0 w-0"
            id="cheap"
            checked={data.cheap}
            onChange={handleChange}
            name="cheap"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckBoxContainer;
