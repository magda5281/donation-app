import React from 'react';
import decoration from "../assets/Decoration.svg";

const Decoration = ({marginTop, marginBottom}) => {
    return (
            <div className="decoration" style ={{ marginTop:marginTop,
                     marginBottom:marginBottom}}>
                <img src={decoration} alt={"decoration"}/>
            </div>
    );
};

export default Decoration;