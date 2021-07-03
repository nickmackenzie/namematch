import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoutes.js";
import SignIn from "./Pages/SignIn.js";
import SignUp from "./Pages/SignUp.js";
import NameMatch from "./Pages/NameMatch";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignIn} />
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
