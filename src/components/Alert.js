import React from 'react'

function Alert(props) {
    return (
       <div style={{height:'50px'}}> 
        {props.alert &&     <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>{props.alert.msg}</strong> : {props.alert.type}  
                          </div>}
        </div>
    )
}

export default Alert
