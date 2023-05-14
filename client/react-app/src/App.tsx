import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Symptoms from "./pages/symptoms";
import Details from "./pages/Details";
import Result from "./pages/Result";
import UserLogin from "./pages/UserLogin";
import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  userid:string;
  username:string;
  age: string;
  gender: string;
  symptoms: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userdata, setUserData] = useState<User>({
    userid:"are",
    username:"",
    age: "",
    gender: "",
    symptoms: '',
  });

  const handleUserIdChange=(userid:string,username:string)=>{
    setUserData({...userdata,userid:userid,username:username})
    console.log(userdata,userid,'here')
  }
  const handleAgeGenderChange = (age: string, gender: string) => {
    setUserData({ ...userdata, age: age, gender: gender });
  };

  const handleSymptomsChange = (symptoms: string[]) => {
    setUserData({ ...userdata, symptoms: symptoms.join(' ') });
  };

  useEffect(() => {
    if (
      userdata.age !== "" &&
      userdata.gender !== "" &&
      userdata.symptoms.length > 0
    ) {
      setUsers((currentUsers) => [...currentUsers, userdata]);
      console.log(2)
    }
  }, [userdata]);

  useEffect(() => {
    if(users.length>0){

      axios.post('http://localhost:3002/userdetails',{users})
      console.log({users})
    }
    console.log(users)
  }, [users]);

  const resultState= {about:"adsjadkasd",
  tests:"ajdsksadnkans",
  remedies:"aiusdhsadjj"}


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <UserLogin state={userdata}  setState={handleUserIdChange}/>
        
        }/>
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
        <Route
          path="/Result"
          element={
            <Result result={resultState}/>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
