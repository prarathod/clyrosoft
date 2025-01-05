import { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="mr-2 text-gray-700">
        {isToggled ? "On" : "Off"}
      </label>
      <div
        className={`relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full ${
          isToggled ? "bg-blue-500" : "bg-gray-400"
        }`}
      >
        <input
          id="toggle"
          type="checkbox"
          className="sr-only"
          checked={isToggled}
          onChange={handleToggle}
        />
        <span
          className={`absolute top-0 left-0 inline-block w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out transform ${
            isToggled ? "translate-x-6" : ""
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Toggle;
