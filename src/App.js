// import React, { useState } from "react";
// import data from './data';
// import Tours from "./components/Tours"


// const App = () => {

// const [tours ,setTours] = useState(data);

// function removetour(){
//     const newtour =tours.filter(tour => tour.id != id);
//     setTours(newtour);
//   }


//     return ( 
//     <div>
//      <div>saket</div>
//        <Tours tours ={tours} removetour = {removetour}></Tours>
//     </div> 
    
//   );
// };

// export default App;
import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removetour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h3>No Tours Left</h3>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removetour={removetour}></Tours>
    </div>
  )
};

export default App;