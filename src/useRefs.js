import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const nameInput = useRef(null);

  const handleSubmit = event => {
    alert("A name was submitted: " + nameInput.current.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameInput} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//for input test refs
// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.input = null;
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     alert("A name was submitted: " + this.input.value);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={ref => (this.input = ref)} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
