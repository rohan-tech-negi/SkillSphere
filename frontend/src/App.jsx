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
import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard";
import JobDetails from "./pages/JobSeeker/JobDetails";
import SavedJobs from "./pages/JobSeeker/SavedJobs";
import UserProfile from "./pages/JobSeeker/UserProfile";
// import ProtectedRoutes from "./routes/ProtectedRoutes";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import JobPostingForm from "./pages/Employer/JobPostingForm";
import ManageJobs from "./pages/Employer/Manage.Jobs";
import ApplicationViewer from "./pages/Employer/ApplicationViewer";
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage";
import ProtectedRoute from "./routes/ProtectedRoutes";


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
          <Route element={<ProtectedRoute></ProtectedRoute>} requiredRole="employer">
            <Route path="/employer-dashboard" element={<EmployerDashboard></EmployerDashboard>}></Route>
            <Route path="/post-job" element={<JobPostingForm></JobPostingForm>}></Route>
            <Route path="/manage-jobs" element={<ManageJobs></ManageJobs>}></Route>
            <Route path="/applicants" element={<ApplicationViewer></ApplicationViewer>}></Route>
            <Route path="/company-profile" element={<EmployerProfilePage></EmployerProfilePage>}></Route>
          </Route>


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