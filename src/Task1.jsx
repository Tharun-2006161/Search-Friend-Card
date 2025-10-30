import React from 'react';
import { useState, useEffect } from 'react';
import './Task1.css';
import Myimage from "/TharunKumar.jpg"
import Myimage1 from "/dinesh.jpg"
import Myimage2 from "/Jagan.jpg"
import Myimage3 from "/Mahesh.jpg"
import Myimage4 from "/Satish.jpg"
import Myimage5 from "/Santhosh.jpg"
import Myimage6 from "/Sandeep.jpg"
const Task1 = () => {
  const [CompleteData, setCompleteData] = useState([
    {
      "image" : Myimage,
      "Name": "Tharun",
      "RollNo" : "23A91A05F5",
      "College": "AEC"
    },
    {
      "image" : Myimage1,
      "Name": "Dinesh",
      "RollNo" : "23A91A05E6",
      "College": "AEC"
    },
    {
      "image" : Myimage2,
      "Name": "Jagan",
      "RollNo" : "23A91A05G5",
      "College": "ACET"
    },
    {
      "image" : Myimage3,
      "Name": "Mahesh",
      "RollNo" : "23A91A05G7",
      "College": "AEC"
    },
    {
      "image" : Myimage4,
      "Name": "Satish",
      "RollNo" : "23A91A05G2",
      "College": "AEC"
    },
    {
      "image" : Myimage5,
      "Name": "Santhosh",
      "RollNo" : "23A91A05F9",
      "College": "AEC"
    },
    {
      "image" : Myimage6,
      "Name": "Sandeep",
      "RollNo" : "23A91A0577",
      "College": "AEC"
    },
    {
      "image" : Myimage,
      "Name": "Tharun",
      "RollNo" : "23A91A05F5",
      "College": "AEC"
    },
    {
      "image" : Myimage,
      "Name": "Tharun",
      "RollNo" : "23A91A05F5",
      "College": "AEC"
    }

    
    
  ]);
  const [UserData, setUserData] = useState('');
  const [Queryresult, setQueryresult] = useState([]);
  const Capture = (event) => {
    setUserData(event.target.value);
  };
  useEffect(() => {
    if (UserData === '') {
      setQueryresult(CompleteData);
    } else {
      const temp = CompleteData.filter((ele) => ele.Name.toLowerCase().includes(UserData.toLowerCase()) || ele.RollNo.toLowerCase().includes(UserData.toLowerCase()) || ele.College.toLowerCase().includes(UserData.toLowerCase()));
      setQueryresult(temp);
    }
  });
  return (
    <>
    <br></br>
    <div className="Input">
      <input
        type="text"
        placeholder="Search...."
        onChange={(event) => Capture(event)}
      />
    </div>
      <br></br>
      <div className="Parent">
        {Queryresult.map((ele) => (
          <div className="child">
              <div className="profile">
                <img src={ele.image} alt="" />
              </div>
              <div className="bio">
                <div className="name">Name : {ele.Name}</div>
                <div className="roll">Roll : {ele.RollNo}</div>
                <div className="college">College : {ele.College}</div>
              </div>
            </div>
        ))}
      </div>
    </>
  );
};
export default Task1;
