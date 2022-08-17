import React from 'react'

export default function Footer(props) {

  let mainStyle = {
    display: "flex",
    justifyContent: "center",

  }
  let myStyle1 = {
    background: "#3535d4",
    cursor: "pointer",
    margin: "10px",
    width: "20%",
    justifyContent: "center",
    display: "flex",
    color: "white", 
    fontWeight: "bold",
  }

  return (
    <div className='fixed-bottom' style={mainStyle}>
      <div onClick={() => {props.resetAll()}} style={myStyle1}>Reset</div>
      <div style={myStyle1}>Total Amout is : {props.totalAmount}</div>
      <div style={myStyle1}>pay</div>
    </div>
  )
}














// import React, { Component } from 'react'

// export default class Footer extends Component {
  
//   render() {
//    let mainStyle = {
//     display: "flex",
//     justifyContent: "center",

//   }
//   let myStyle1 = {
//     background: "#3535d4",
//     cursor: "pointer",
//     margin: "10px",
//     width: "20%",
//     justifyContent: "center",
//     display: "flex",
//     color: "white", 
//     fontWeight: "bold",
//   }
//     return (
//      <div className='fixed-bottom' style={mainStyle}>
//       <div onClick={() => {this.props.resetAll()}} style={myStyle1}>Reset</div>
//       <div style={myStyle1}>Total Amout is : {this.props.totalAmount}</div>
//       <div style={myStyle1}>pay</div>
//     </div>
//     )
//   }
// }
