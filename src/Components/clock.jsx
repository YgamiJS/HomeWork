import {useState} from "react"

function Clock (){
    let [date , setDate] = useState(new Date().toLocaleTimeString());

    setInterval( () =>  setDate(new Date().toLocaleTimeString()) , 1000);

    return <h2 className="hours">{date}</h2>
}

export default Clock;