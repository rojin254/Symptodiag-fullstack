import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Symptoms from "./pages/symptoms";
import Details from "./pages/Details";
import { useState, useEffect } from "react";

interface User {
  age: string;
  gender: string;
  symptoms: string[];
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userdata, setUserData] = useState<User>({
    age: "",
    gender: "",
    symptoms: [],
  });

  const handleAgeGenderChange = (age: string, gender: string) => {
    setUserData({ ...userdata, age: age, gender: gender });
  };

  const handleSymptomsChange = (symptoms: string[]) => {
    setUserData({ ...userdata, symptoms: symptoms });
  };

  useEffect(() => {
    if (
      userdata.age !== "" &&
      userdata.gender !== "" &&
      userdata.symptoms.length > 0
    ) {
      setUsers((currentUsers) => [...currentUsers, userdata]);
    }
  }, [userdata]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Router>
      <Routes>
        <Route
          path="/Details"
          element={
            <Details state={userdata} setState={handleAgeGenderChange} />
          }
        ></Route>

        <Route
          path="/Symptoms"
          element={
            <Symptoms state={userdata} setState={handleSymptomsChange} />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

//useEffect(() => {
//if (userdata.age!='' && userdata.gender!='') {
//setUsers((currentUsers) => [...currentUsers, userdata]);
//}
//}, [userdata]);
