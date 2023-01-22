import { useState } from "react";
import { FaRegCopy, FaArrowRight } from "react-icons/fa";
import './App.scss';

function App() {

  const [password, setPassword] = useState("")
  const [charLength, setCharLength] = useState(0)

  const checkboxes = [
    {
      "id": "uppercase_letters",
      "name": "Include Uppercase Letters"
    }, {
      "id": "lower_letters",
      "name": "Include Lowercase Letters"
    },
    {
      "id": "numbers",
      "name": "Include Numbers"
    },
    {
      "id": "symbols",
      "name": "Include Symbols"
    }
  ]


return (
  <section className="password-generator">
    <div className="wrapper">
      <h1>Password Generator</h1>
      <div className="block">
        <input
          className="password"
          type="text"
          placeholder="P4$5W0rD!"
          value={password}
          readonly
        />
        <FaRegCopy className="copy" />
      </div>
      <div className="block generator">
        <div className="generator__length">
          <div>
            <h4>Character Length</h4>
          </div>
          <span>10</span>
        </div>
        <input
          type="range"
          min="0"
          max="20"
          step="1"
          defaultValue={charLength}
          onChange={(event) => { setCharLength(event.target.value) }}
        />
        <div className="generator__checkbox-wrapper">
            {
              checkboxes.map((checkbox) => {
                return (
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id={checkbox.id}
                    onChange={(event) => { console.log(event.target.value) }}
                  /><span class="checkmark"></span> {checkbox.name}
                </label>
                )
              })
            }
        </div>
        <div className="generator__strength-meter">
          <div>Strength</div>
          <ul>
            <span>MEDIUM</span>
            <li className="poor"></li>
            <li className="low"></li>
            <li className="medium"></li>
            <li className="good"></li>
          </ul>
        </div>
        <button>
          <span>Generate</span>
          <div><FaArrowRight /></div>
        </button>
      </div>

    </div>
  </section>
);
}

export default App;
