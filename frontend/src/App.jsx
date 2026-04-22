import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Toaster} from "react-hot-toast"
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>

          <Route path="/find-jobs" element={<JobSeekerDashboard></JobSeekerDashboard>}></Route>
          <Route path="/job/:jobId" element={<JobDetails></JobDetails>}></Route>
          <Route path="/saved-jobs" element={<SavedJobs></SavedJobs>}></Route>
          <Route path="/profile" element={<UserProfile></UserProfile>}></Route>

          {/* protected routes */}


          {/* catch all routes */}
          <Route path="*" element={<Navigate to="/" replace></Navigate>}></Route>

        </Routes>

      </Router>
      <Toaster
        toastOptions={{
          className:"",
          style:{
            fontSize: "13px"
          }
        }}
      ></Toaster>

    </div>
  )
}

export default App