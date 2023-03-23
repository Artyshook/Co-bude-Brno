import "./App.css";
import { Layout } from "./components/navigation/Layout";
import { preloadFn } from "./api/preloadFn";
import usePreload from "./hooks/usePreload";

function App() {
  usePreload(preloadFn);
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
