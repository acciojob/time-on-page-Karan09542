import React, { useEffect, useState } from "react";

const StayHere = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return `You've been on this page for ${time} seconds.`;
};

export default StayHere;
