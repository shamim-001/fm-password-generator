import ModeToggle from "./components/ModeToggle";
import { useThemeContext } from "./context/ThemeProvider";
const App = () => {
  const { isDarkMode } = useThemeContext();
  return (
    <div
      data-theme={isDarkMode ? "dark" : "light"}
      className="min-w-full min-h-svh relative"
    >
      <div className="absolute p-5">
        <ModeToggle />
      </div>
      <div className="container p-20">
        <h1>Password Generator</h1>
      </div>
    </div>
  );
};

export default App;
