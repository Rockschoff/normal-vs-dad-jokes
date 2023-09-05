import "./styles.css";
import Jokes from "./Jokes";
export default function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="left">
          <Jokes type={"dad_jokes"} />
        </div>
        <div className="right">
          <Jokes type={"jokes"} />
        </div>
      </div>
    </div>
  );
}
