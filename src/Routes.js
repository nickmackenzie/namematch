import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoutes.js";
import Landing from "./Pages/Landing.js";
import SignUp from "./Components/SignUp.js";
import NameMatch from "./Pages/NameMatch";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/signup" component={SignUp} />
      <ProtectedRoute
        exact
        path="/nameMatch"
        component={NameMatch}
      ></ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
