
interface Props {
  text1: string;
  text2: string;
  handleOptionClick:(e:any)=>void;
}

function DoubleButton({ text1, text2 , handleOptionClick}: Props) {
  
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
        value={text1}
        onChange={handleOptionClick}
        
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio1">
        {text1}
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        autoComplete="off"
        value={text2}
        onChange={handleOptionClick}
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio2">
        {text2}
      </label>
    </div>
  );
}

export default DoubleButton;
