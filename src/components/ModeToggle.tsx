import { useThemeContext } from "../context/ThemeProvider";
import { Sun, Moon } from "lucide-react";
const ModeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  return (
    <div className="swap swap-rotate">
      <input type="checkbox" />
      <Sun
        className={`${isDarkMode ? "swap-off" : "swap-on"}`}
        onClick={toggleTheme}
      />
      <Moon
        className={`${isDarkMode ? "swap-on" : "swap-off"}`}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ModeToggle;
