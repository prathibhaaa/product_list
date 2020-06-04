import React ,{useEffect}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// https://codesandbox.io/s/2wmp02q5xy

// https://www.tutorialkart.com/nodejs/node-js-examples/#Node-Example-Create-a-File

// https://www.fullstack.cafe/blog/7-hardest-nodejs-interview-questions-and-answers
// https://www.vskills.in/practice/nodejs-mock-test

// class Message extends React.Component {
//   state = {
//     isShow :false
//   }
//  onClickHandler=(e) => {
//    e.preventDefault() ;
//     console.log(this.state)
//     this.setState({isShow: !this.state.isShow})
//  } 
  
//   render() {
//     return (<React.Fragment>
//           <a href="#" onClick={(e)=>this.onClickHandler(e)}>Want to buy a new car?</a>
//           {this.state.isShow && <p>Call +11 22 33 44 now!</p>}
//         </React.Fragment>);
//   }
// }

// document.body.innerHTML = "<div id='root'> </div>";
  
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Message />, rootElement);



// function App() {

// 	const firstNameRef = useRef(null)

// 	useEffect(()=>{
// 		firstNameRef.current.focus();
// 	},[])

// 	return (
// 		<div>
// 			<input type='text' ref={firstNameRef} />
// 			<button ref={submitRef}></button>
// 		</div>
// 	)
// }








