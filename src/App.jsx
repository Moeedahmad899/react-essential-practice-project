import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";
import { useState } from "react";

function App() {

   const [userInput,setUserInput] = useState({
           intialInvestment:1000,
           annualInvestment:1200,
           expectedReturn:6,
           duration:10,
       });
   console.log(userInput);
   
       function handleChange(inputIdentifer, newValue){
              setUserInput((prevUserInput)=>{
               return {
                   ...prevUserInput,
                   [inputIdentifer]: newValue
               }
              })
              
              
       }
  return (
    
    <>
     <h1>React Investment Calculator</h1>
     <Header/>
       <UserInput userInput={userInput} onChange={handleChange} />
       <Results/>
    </>
   
  )
}

export default App
