import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomePage from "./components/HomePage";

function MyButton() {
  return <button style={{ color: "blue", shadowSize: 2 }}>I'm a button</button>;
}
// const Heading = <h1 className="heading">Hello World</h1>;

// const HomePage = () => {
//   return ( 
//     <div>
//       <h1 className="m-5">My Blog App</h1>
//       <p style={{ fontSize: "18px" }}>
//         Welcome to my blog! I'm excited to share my thoughts with the world.
//       </p>
//       <div
//         style={{ width: "100%", display: "flex", justifyContent: "center" }} 
//         className="m-5 p-5"
//       >
//         <div className="card m-5" style={{ width: "18rem" }}> 
//           <img src={logo} className="card-img-top" alt="..." /> 
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">
//               Some quick example text to build on the card title and make up the bulk of the card's content.
//             </p>
//             <a href="#" className="btn btn-primary">
//               Read
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           <MyButton />

//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
