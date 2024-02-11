import BotLayout from "./botlayout";
import { BrowserRouter } from "react-router-dom";
// import botCollection from "./components/botCollection"

function App() {
  return (
    <div>
      {/* <BotCollection /> */}
      <BrowserRouter>
        <BotLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;