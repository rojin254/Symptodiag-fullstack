import NavBar from "../components/NavBar";
import ButtonGroup from "../components/ButtonGroup";
import DropButton from "../components/DropButton";
import ListGroup from "../components/ListGroup";
import { useState, useEffect } from "react";
import axios from "axios";

/*interface UserData {
    userid: string;
    username:string;
    // other properties
  }
*/
interface Props {
  state: any;
  setState: (e: any) => void;
}

interface Disease {
  disease_name: string;
  symptoms: string;
  tests:string;
  remedies: string;
}

function Symptoms({ setState }: Props) {
  const [listOfData, setListOfData] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    axios.get<Disease[]>("http://localhost:3002/diseases").then((response) => {
      const allSymptoms = response.data.reduce((acc, disease) => {
        const diseaseSymptoms = disease.symptoms.split(' ');
        return [...acc, ...diseaseSymptoms];
      }, [] as string[]);
    const uniqueSymptoms=[...new Set(allSymptoms)]
    console.log( uniqueSymptoms)

      setListOfData(uniqueSymptoms);
    });
  }, []);


  const handleSelectionChange = (selectedOptions: string[]) => {
    setSelectedOptions(selectedOptions);
  };
  

  const options = listOfData;
  const handleContinue = () => {
    setState(selectedOptions);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="container my-5">
          <h3 className="pb-3">Enter Your Symptoms</h3>
          <DropButton
            options={options}
            selectedOptions={selectedOptions}
            onSelectionChange={handleSelectionChange}
          />
          <h3 className="my-4">Selected Symptoms Are</h3>
          <ListGroup items={selectedOptions}></ListGroup>
        </div>
        <ButtonGroup
          text="Check"
          link="#"
          onSubmit={() => {
            handleContinue();
          }}
        ></ButtonGroup>
        <ButtonGroup
          text="back"
          link="../Details"
          onSubmit={() => {
            () => {
              setState([]);
            };
          }}
        ></ButtonGroup>
      </div>
    </>
  );
}
export default Symptoms;
