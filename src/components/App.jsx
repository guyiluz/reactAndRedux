import React from 'react';
import Timer from "../containers/Timer"
import TimersBoxes from "../containers/TimersBoxes"



const App = (props) => {
    return (
        <div>
     <Timer  timer={"prepare"}  />
     <TimersBoxes />
        </div>
    )
}


export default App