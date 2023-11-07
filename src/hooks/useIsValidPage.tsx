"use client";
import React, { useEffect, useState } from "react";

const useIsValidPage = () => {
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    if (window.innerWidth > window.innerHeight) {
      setIsValid(false);
    }
  }, []);
  return isValid;
};

export default useIsValidPage;
