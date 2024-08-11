import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let charset = lowercase;

    if (includeUppercase) charset += uppercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-md shadow-md bg-indigo-400">
      <h1 className="text-xl font-bold mb-4">Password Generator</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Length</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md"
          min={4}
          max={32}
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="block text-sm font-medium mb-2">
          Include Uppercase Letters
        </label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
          className="mr-2"
        />
      </div>
      <div className=" flex justify-between items-center mb-4">
        <label className="block text-sm font-medium mb-2">
          Include Numbers
        </label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
          className="mr-2"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="block text-sm font-medium mb-2">
          Include Symbols
        </label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
          className="mr-2"
        />
      </div>
      <button
        onClick={generatePassword}
        className="w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Generate Password
      </button>
      {password && (
        <div className="mt-4 p-2 border border-gray-300 rounded-md">
          <span className="font-mono">{password}</span>
        </div>
      )}
    </div>
  );
}
export default App;
