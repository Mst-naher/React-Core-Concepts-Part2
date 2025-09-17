import {useState} from "react"

export default function Batsman() {

let [runs, setRuns] = useState(0);
const [sixes, setsixes] = useState(0);


const handleSingle = () =>{
const updatedRuns = runs + 1;
setRuns(updatedRuns);
}

const handleSix =()=> {
  const updatedRuns = runs + 6;
  const updatedSixes = sixes + 1;
  setsixes(updatedSixes);
  setRuns(updatedRuns);
}


return (
  <div>
    <h3>Player: Bangla Batsman</h3>
    <p><small>Six: {sixes}</small></p>

     {
      runs > 50 && <p>Your score: 50</p> 
     }
     {
       runs > 100 && <p>Your score: 100</p>
     }

    <h1>Score: {runs}</h1>
    <button onClick={handleSingle}>Singles</button>
    <button>Four</button>
    <button onClick={handleSix}>Six</button>
  </div>
);
}