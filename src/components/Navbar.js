import Contact from "./Contact";

function Navbar({ myName, age }) {
  console.log(myName);

  return (
    <div>
      <h1>I AM THE NAVBAR</h1>
      <p>Hey how is it going</p>
      <Contact myName={myName} />
    </div>
  );
}

export default Navbar;
