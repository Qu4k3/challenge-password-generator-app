import { useState, useRef, useEffect } from "react";
import { FaRegCopy, FaArrowRight } from "react-icons/fa";
import './App.scss';

function App() {

  const [password, setPassword] = useState("")
  const [charLength, setCharLength] = useState(1)
  const [strength, setStrength] = useState(0)
  const tooltipRef = useRef(null);
  const copyBtnRef = useRef(null);
  const sliderRef = useRef(null)
  const [checkboxes, setCheckboxes] = useState([
    { "id": "uppercase", "name": "Include Uppercase Letters", "checked": false },
    { "id": "lowercase", "name": "Include Lowercase Letters", "checked": false },
    { "id": "numbers", "name": "Include Numbers", "checked": false },
    { "id": "symbols","name": "Include Symbols", "checked": false }
  ])

  const PASSWORD_SETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '1234567890',
    symbols: '!@#$%^&*()',
  }

  useEffect(() => {
    const password = btoa(Math.random().toString()).substring(0, charLength);
    setPassword(password)
  }, [charLength]);

  const handleCheckboxChange = (id) => {
    setCheckboxes(checkboxes => {
      return checkboxes.map(checkbox => {
        if (checkbox.id === id) {
          return { ...checkbox, checked: !checkbox.checked }
        } else {
          return checkbox;
        }
      })
    })
  }

  useEffect(() => {
    const checkboxCheckedCount = checkboxes.filter(checkbox => checkbox.checked === true).length;
    setStrength(checkboxCheckedCount)
  }, [checkboxes]);
  
  const handleSliderChange = (value) => {
    setCharLength(value)
    const minSlider = 1;
    const maxSlider = 20;
    const sliderBgSize = `${(value - minSlider) * 100 / (maxSlider - minSlider)}% 100%`
    sliderRef.current.style.backgroundSize = sliderBgSize
  }

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(password);
    tooltipRef.current.innerHTML = password ? "Copied!" : "Nothing to copy";
  }

  const handleMouseOutCopyClipboard = () => {
    tooltipRef.current.innerHTML = "Copy to clipboard";
  }

  return (
    <section className="password-generator">
      <div className="wrapper">
        <h1>Password Generator</h1>
        <div className="block">
          <input
            className="password"
            type="text"
            placeholder="P4$5W0rD!"
            value={strength > 0 ? password : ""}
            readOnly            
          />
          <div
            className="copy"
            ref={copyBtnRef}
            onClick={() => handleCopyClipboard()}
            onMouseOut={() => handleMouseOutCopyClipboard()}
          >
            <span ref={tooltipRef} className="tooltip">Copy to clipboard</span>
            <FaRegCopy />
          </div>
        </div>
        <div className="block generator">
          <div className="generator__length">
            <div>
              <h4>Character Length</h4>
            </div>
            <span>{charLength}</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            defaultValue={charLength}
            ref={sliderRef}
            onChange={(event) => { handleSliderChange(event.target.value) }}
          />
          <div className="generator__checkbox-wrapper">
            {
              checkboxes.map((checkbox) => (
                <label key={checkbox.id} className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id={checkbox.id}
                    value={checkbox.id}
                    onChange={(event) => { handleCheckboxChange(event.target.id) }}
                  /><span className="checkmark"></span> {checkbox.name}
                </label>
              ))
            }
          </div>
          <div className="generator__strength-meter">
            <div>Strength</div>
            <ul data-strength={strength}>
              {
                (() => {
                  switch (strength) {
                    case 1:
                      return <span>POOR</span>;
                    case 2:
                      return <span>LOW</span>;
                    case 3:
                      return <span>MEDIUM</span>;
                    case 4:
                      return <span>GOOD</span>;
                    default:
                      return null;
                  }
                })()
              }
              {[...Array(4)].map((_, index) => (
                <li key={index} className={index < strength ? "active" : ""}></li>
              ))}
            </ul>
          </div>
          <button>
            <span>Generate</span>
            <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}

export default App;
