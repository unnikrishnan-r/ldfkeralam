// Importing all the components
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WorkSpaceDetail from "./pages/WorkSpaceDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // React router Component
    <Router>
      <div>
        {/* Used to select which routes to take */}
        <Switch>
        <Route exact path="/workspacedetail" component={WorkSpaceDetail} />
        </Switch>
      </div>
    </Router>
  );
}

// Exporting App function
export default App;
