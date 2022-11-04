import { Provider } from "react-redux";
import "./App.css";
import NavigationSetup from "./Components/NavigationSetup";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <NavigationSetup />
    </Provider>

    // Table
    // Circular
    // Backdrop
    // Skeleton
    // App Bar
    // Text Field
  );
}

export default App;
