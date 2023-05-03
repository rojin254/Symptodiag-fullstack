import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
  onSubmit:()=>void;
}

function ButtonGroup({ text, link = "#" ,onSubmit}: Props) {
  return (
    <>
      <div className="d-grid gap-2 col-2 mx-auto pt-1">
        <Link to={link} className="btn-link-white w-100">
          {
            <button className="btn btn-primary" type="submit" onClick={onSubmit}>
              {text}
            </button>
          }
        </Link>
      </div>
     
    </>
  );
}
export default ButtonGroup;
