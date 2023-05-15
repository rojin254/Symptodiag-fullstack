import NavBar from "../components/NavBar";
import ButtonGroup from "../components/ButtonGroup";
import { Accordion } from "react-bootstrap";
import { useState,useEffect } from "react";
interface ResultText{
  about:string;
  tests:string;
  remedies:string;
}
interface Props{
  result:ResultText;

}



function Result({result}:Props) {
  const [resultText,setResultText]=useState(
    {
      about:".........",
      tests:"..........",
      remedies:"---------"
    }
  )
  useEffect(()=>
  {
    setResultText(result)
  },[])
 
  return (
    <>
      <NavBar />
      <div className="container">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>
              {
                resultText.about
              }
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Tests Possible</Accordion.Header>
            <Accordion.Body>
              {
                resultText.tests
              }
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Your Remedies</Accordion.Header>
            <Accordion.Body>
              {
                resultText.remedies
              }
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
export default Result;
