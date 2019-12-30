import React from 'react';

function GetData(props) {
    console.log(props.props)
    props.props.getDataObject()
    
    return (
        <div>
            <button onClick={()=>{props.props.test()}}></button>
            <p> data1 </p>
            <p> data2 </p>
            <p> data3 </p>
        </div>
    );
}

export default GetData