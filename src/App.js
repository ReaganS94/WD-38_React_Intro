import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const myName = "Adam";
  const age = 20;

  const whatsMyName = () => {
    console.log("My name is Foram");
  };
  return (
    <div className="app">
      <h1 onClick={whatsMyName}>HELLO REACT</h1>
      <Navbar myName={myName} age={age} greet="hello" />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
