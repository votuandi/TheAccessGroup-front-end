import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import JobListPage from "./pages/JobListPage";
import NewJobPage from "./pages/NewJobPage";
import EditJobPage from "./pages/EditJobPage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/jobs" />} />
          <Route path="/jobs" element={<JobListPage />} />
          <Route path="/jobs/new" element={<NewJobPage />} />
          <Route path="/jobs/:id/edit" element={<EditJobPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
