import { FaRegCopy, FaArrowRight } from "react-icons/fa";
import './App.scss';

function App() {
  return (
    <section className="password-generator">
      <div className="wrapper">
        <h1>Password Generator</h1>
        <div className="block">
          <input
            className=""
            type="text"
            placeholder="P4$5W0rD!"
          />
          <FaRegCopy />
        </div>
        <div className="block generator">
          <div className="generator__length">
            <div>
              <h4>Character Length</h4>
            </div>
            <span>10</span>
          </div>
          <input type="range" min="0" max="20" step="1" />
          <div className="generator__checkbox-wrapper">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
              /><span class="checkmark"></span> Include Uppercase Letters
            </label>
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
              /><span class="checkmark"></span> Include Lowercase Letters
            </label>
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
              /><span class="checkmark"></span> Include Numbers
            </label>
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
              /><span class="checkmark"></span> Include Symbols
            </label>
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
