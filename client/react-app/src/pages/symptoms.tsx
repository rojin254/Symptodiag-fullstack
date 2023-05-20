import NavBar from "../components/NavBar";
import ButtonGroup from "../components/ButtonGroup";
import DropButton from "../components/DropButton";
import ListGroup from "../components/ListGroup";
import { useState, useEffect } from "react";
import axios from "axios";
import { stringify } from "uuid";

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
  tests: string;
  remedies: string;
}

function Symptoms({ setState }: Props) {
  const [listOfData, setListOfData] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [symptomArr, setSymptomArr] = useState<string[][]>([[]]);


  useEffect(() => {
    axios.get<Disease[]>("http://localhost:3002/diseases").then((response) => {
      const allSymptomsArr = response.data;
      const allSymptoms = response.data.reduce((acc, disease) => {
        const diseaseSymptoms = disease.symptoms.split(" ");
        return [...acc, ...diseaseSymptoms];
      }, [] as string[]);
      const uniqueSymptoms = [...new Set(allSymptoms)];
      let bigArr: string[][] = [];
      allSymptomsArr.forEach((disease) => {
        bigArr.push(disease.symptoms.split(" "));
      });
      console.log(bigArr);
      setSymptomArr(bigArr);

      setListOfData(uniqueSymptoms);
    });
  }, []);

  const handleSelectionChange = (selectedOptions: string[]) => {
    setSelectedOptions(selectedOptions);
    console.log(symptomArr, "hi");
  };

  const calculateRatios = (arr: string[][], inputValues: string[]) => {
    var output = [];
    var setArr = arr.map((subarray) => new Set(subarray)); // Convert subarrays to sets

    for (var i = 0; i < setArr.length; i++) {
      var setSubarray = setArr[i];
      var count = 0;
      for (var j = 0; j < inputValues.length; j++) {
        var value = inputValues[j];
        if (setSubarray.has(value)) {
          // Efficient membership check
          count++;
        }
      }
      output.push(count / arr[i].length);
    }

    return output;
  };


  const options = listOfData;
  const handleContinue = () => {
    setState(selectedOptions);
    console.log(calculateRatios(symptomArr,selectedOptions))
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
