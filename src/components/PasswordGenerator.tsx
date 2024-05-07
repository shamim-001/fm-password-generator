import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { checkboxOptions } from "../constants";
import usePasswordGenerator from "../hooks/usePasswordGenerator";
import { FaRegCopy } from "react-icons/fa";
import StrengthIndicator from "./StrengthIndicator";

const PasswordGenerator = () => {
  const [length, setLength] = useState(0);
  const [checkboxData, setCheckboxData] = useState(checkboxOptions);
  const { password, generatePassword, errorMessage } = usePasswordGenerator();
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i: number) => {
    const updatedCheckbox = [...checkboxData];
    updatedCheckbox[i].state = !updatedCheckbox[i].state;
    setCheckboxData(updatedCheckbox);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md  ">
      {/* password text and copy */}
      <div className="flex justify-between items-center p-5 bg-base-300 mb-5">
        {password ? (
          <span> {password} </span>
        ) : (
          <span className="text-neu">P4$5W0rD!</span>
        )}
        <button
          className={`flex gap-3 items-center ${copied ? "text-success" : ""}`}
          onClick={handleCopy}
        >
          {copied && <span>copied</span>}
          <span>
            <FaRegCopy />
          </span>
        </button>
      </div>

      {/* password generator container */}
      <div className="p-5 bg-base-300 space-y-5">
        <div className="flex justify-between items-center">
          <span>Character Length</span>
          <span> {length} </span>
        </div>

        <div>
          <input
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            type="range"
            min={0}
            max={20}
            className="range"
          />
        </div>

        {errorMessage && <div className="text-error"> {errorMessage} </div>}
        {length < 1 && <div className="text-error"> Set password length. </div>}

        <div className="flex flex-col gap-3">
          {checkboxOptions.map((option, index) => (
            <div className="flex gap-3 items-center" key={option.label}>
              <input
                className="checkbox size-5"
                type="checkbox"
                id={option.label}
                onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor={option.label}> {option.title} </label>
            </div>
          ))}
        </div>

        <StrengthIndicator length={length} />

        <div>
          <button
            onClick={() => generatePassword(checkboxData, length)}
            className="btn text-center w-full bg-success text-success-content"
          >
            GENERATE <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
