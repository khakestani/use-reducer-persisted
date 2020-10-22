import React from "react";
import Todos from "./Todos";
import { Provider } from "./Provider";

const App = () => {
  return (
    <Provider>
      <Todos />
    </Provider>
  );
};

export default App;
