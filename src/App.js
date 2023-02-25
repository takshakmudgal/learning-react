import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import avatar from "./avatar.png";
import "./App.css";

function Logo(props) {
  const userPic = (
    <img
      src={avatar}
      alt={"google-png"}
      style={{ width: "100px", height: "100px" }}
    />
  );
  return userPic;
}
//Then calling the component in the App
function App() {
  //Calling the function with the help of JSX Syntax in React
  return (
    <div>
      <Header name="Andy" color="purple" />
      <Main greet="Howdy!" />
      <Sidebar greet="Hoorey" />
      <Logo />
    </div>
  );
}

export default App;
