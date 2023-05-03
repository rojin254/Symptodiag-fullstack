
interface Props {
  text: string;
  placeholder:string;
  handleInput:(e:any)=>void
}
function SingleInput({ text,placeholder ,handleInput}: Props) {
  return (
    <div className="input-group input-group-lg">
      <span className="input-group-text" id="inputGroup-sizing-lg">
        {text}
      </span>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        placeholder={placeholder}
        aria-describedby="inputGroup-sizing-lg"
        onChange={handleInput}
      />
    </div>
  );
}

export default SingleInput;
