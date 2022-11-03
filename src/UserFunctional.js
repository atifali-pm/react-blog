import React from "react";

function UserFunctional(p){
    const red = () => {
        alert("Hello I am a click")
    }

    return <div >
        <h1 onClick={red}>{p.text}</h1>
    </div>
}

export default UserFunctional;