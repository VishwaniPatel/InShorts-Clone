import "./App.css";
import Main from "./component/Layout/Master";
import Routing from "./routes/Routing";
import { NewsProvider } from "./store/ContextProvider";

function App() {
  return (
    <>
      <NewsProvider>
        <Routing />
      </NewsProvider>
    </>
  );
}

export default App;
