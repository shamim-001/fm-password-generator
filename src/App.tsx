import ModeToggle from "./components/ModeToggle";
import PasswordGenerator from "./components/PasswordGenerator";
import { useThemeContext } from "./context/ThemeProvider";
const App = () => {
  const { isDarkMode } = useThemeContext();
  return (
    <div
      data-theme={isDarkMode ? "dark" : "light"}
      className="min-w-full px-5 min-h-svh relative"
    >
      <div className="absolute p-5">
        <ModeToggle />
      </div>

      <div className="min-h-svh flex flex-col justify-center items-center">
        <h1 className="text-center mb-5">Password Generator</h1>
        <PasswordGenerator />
      </div>
    </div>
  );
};

export default App;
