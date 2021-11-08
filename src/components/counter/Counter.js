import React, {useState} from 'react';


function Counter() {
    const [counter, setCounter] = useState(0)

    const countChange1 = ()=>{
        setCounter(counter + 1)
    }

    const countChange2 = ()=>{
        setCounter(counter - 1)
    }

    return (
        <>
            <div style={{display:"flex", margin:"50px auto", justifyContent:"center"}}>
                <button placeholder="+" style={{width:"100px", margin:"0px 10px"}}
                onClick = {countChange2}

                >-</button>
                    <h3>{counter}</h3>
                    <button placeholder="+" style={{width:"100px", margin:"0px 10px"}}
                    onClick = {countChange1}
                    >+</button>
                </div>


        </>
    )
}

export default Counter
