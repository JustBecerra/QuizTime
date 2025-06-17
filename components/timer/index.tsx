import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

interface props {
  active: number;
  answerChosen: boolean;
}

export const Timer = (props: props) => {
  const [time, setTime] = useState(30);
  const [color, setColor] = useState("green");
  const { active, answerChosen } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (!answerChosen) {
          if (prevTime <= 0) {
            clearInterval(interval);
            if (time === 0) redirect("/");
            return 0;
          }
          return prevTime - 1;
        }
        return prevTime;
      });

      if (time < 20) setColor("yellow");
      if (time < 10) setColor("red");
    }, 1000);

    return () => clearInterval(interval);
  }, [answerChosen, time]);

  useEffect(() => {
    setTime(30);
    setColor("green");
  }, [active]);

  const getColorClass = () => {
    switch (color) {
      case "red":
        return "text-red-500";
      case "yellow":
        return "text-yellow-500";
      default:
        return "text-green-500";
    }
  };

  const getProgressColor = () => {
    switch (color) {
      case "red":
        return "stroke-red-500";
      case "yellow":
        return "stroke-yellow-500";
      default:
        return "stroke-green-500";
    }
  };

  return (
    <div className="flex justify-center items-center">
      {/* Desktop Timer */}
      <div className="hidden sm:block relative w-[120px] h-[120px]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="stroke-gray-200"
            strokeWidth="8"
            fill="none"
            cx="50"
            cy="50"
            r="42"
          />
          <circle
            className={getProgressColor()}
            strokeWidth="8"
            fill="none"
            cx="50"
            cy="50"
            r="42"
            strokeDasharray={`${(time / 30) * 264} 264`}
            strokeDashoffset="0"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${getColorClass()}`}>{time}</span>
        </div>
      </div>

      {/* Mobile Timer */}
      <div className="sm:hidden relative w-[80px] h-[80px]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="stroke-gray-200"
            strokeWidth="8"
            fill="none"
            cx="50"
            cy="50"
            r="42"
          />
          <circle
            className={getProgressColor()}
            strokeWidth="8"
            fill="none"
            cx="50"
            cy="50"
            r="42"
            strokeDasharray={`${(time / 30) * 264} 264`}
            strokeDashoffset="0"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-lg font-bold ${getColorClass()}`}>{time}</span>
        </div>
      </div>
    </div>
  );
};
