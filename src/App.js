// import "./App.css";
// import Throttling from "./components/throttling/Throttling";
// import Reff2 from "./components/useStateREff/Reff2";
import Parent from "./components/childToparent/Parent";
import Normal from "./components/customHooks/Normal";
import Debouncing from "./components/debouncing/Debouncing";
// import DiffUseReffanduseState from "./components/useStateREff/DiffUseReffanduseState";

import DebouncingWithApi from "./components/debouncing/DebouncingWithApi";
import Nested from "./components/nestedArrayFields/Nested";
import MainComment from "./components/nestedComment/MainComment";
import FolderStruture from "./components/nestedFolder/FolderStruture";
import CheckUI from "./components/tailwindCSS/CheckUI";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App-header">
      {/* <DiffUseReffanduseState /> */}
      {/* <Reff2 /> */}
      {/* <Debouncing /> */}
      {/* <Throttling /> */}
      {/* <MainComment /> */}
      {/* <FolderStruture /> */}
      {/* <Nested /> */}
      {/* <CheckUI /> */}
      {/* <DebouncingWithApi /> */}
      {/* <Timer /> */}
      {/* <Normal /> */}
      <Parent />
    </div>
  );
}

export default App;
