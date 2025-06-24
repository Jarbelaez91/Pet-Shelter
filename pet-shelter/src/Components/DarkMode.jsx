import React from "react";
import "../css/DarkModeToggle.css"

function DarkMode({ darkModeEnabled, toggleDarkMode }) {
  const handleToggle = () => {
    toggleDarkMode(); 
  };

  return (
    <div >
      <button className="light-mode-toggle" onClick={handleToggle}>
        {darkModeEnabled ? "☀️" : "🌙"  }
      </button>
    </div>
  );
}

export default DarkMode;