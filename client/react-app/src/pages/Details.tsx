import NavBar from "../components/NavBar";
import SingleInput from "../components/SingleInput";
import DoubleButton from "../components/DoubleButton";
import ButtonGroup from "../components/ButtonGroup";
import { useState } from "react";

interface Props {
  state: any;
  setState: (age: any , gender:any ) => void;
}

function Details({  setState }: Props) {
  const [radioState, setRadioState] = useState("male");

  const [inputState, setInputState] = useState("");
  
  return (
    <>
      <NavBar />

      <div className="container">
        <div className="container ">
          <h2 className="py-5"> Welcome </h2>
          <SingleInput
            text="Age"
            placeholder="Ex. 12, 24 ..."
            handleInput={(e) => {
              setInputState(e.target.value);
            }}
          />
        </div>
        <div className="container">
          <h4 className="pt-5">Sex:</h4>
          <DoubleButton
            text1="male"
            text2="female"
            handleOptionClick={(e) => {
              setRadioState(e.target.value);
            }}
          ></DoubleButton>
        </div>
        <ButtonGroup
          text="continue"
          link="../symptoms"
          onSubmit={() => {
            setState( inputState,  radioState );
          }}
        ></ButtonGroup>
        <ButtonGroup
          text="back"
          link="/"
          onSubmit={() => {
            setState('','');
          }}
        ></ButtonGroup>
      </div>
    </>
  );
}

export default Details;
