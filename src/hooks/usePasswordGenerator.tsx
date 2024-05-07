import { useState } from "react";
import { checkboxOptionsType } from "../constants";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (
    checkboxData: checkboxOptionsType[],
    passwordLength: number
  ) => {
    const characters: string[] = [];
    let generatedPassword = "";

    const uppercaseLetters = [...Array(26).keys()].map((code) =>
      String.fromCharCode(code + 65)
    );
    const lowercaseLetters = [...Array(26).keys()].map((code) =>
      String.fromCharCode(code + 97)
    );
    const numbers = [...Array(10).keys()].map((num) => num.toString());
    const symbols = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?".split("");

    const selectedOptions = checkboxData.filter((data) => data.state);

    if (selectedOptions.length === 0) {
      setErrorMessage("Select at least one option.");
      setPassword("");
      return;
    }

    selectedOptions.forEach((option) => {
      switch (option.label) {
        case "uppercase":
          characters.push(...uppercaseLetters);
          break;
        case "lowercase":
          characters.push(...lowercaseLetters);
          break;
        case "numbers":
          characters.push(...numbers);
          break;
        case "symbols":
          characters.push(...symbols);
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, generatePassword, errorMessage };
};

export default usePasswordGenerator;
