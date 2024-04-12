import appStore from "../utils/store/appStore";
import Body from "./Body";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
