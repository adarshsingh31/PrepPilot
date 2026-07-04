import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SidebarProvider } from "./components/SidebarContext";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup";
import OtpVerification from "./pages/OtpVerification/OtpVerification";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import MockInterview from "./pages/MockInterview/MockInterview";
import ResumeAnalyzer from "./pages/ResumeAnalyzer/ResumeAnalyzer";
import CodingPractice from "./pages/CodingPractice/CodingPractice";
import Profile from "./pages/Profile/Profile";
import QuestionBank from "./pages/QuestionBank/QuestionBank";
import Progress from "./pages/Progress/Progress";
import Settings from "./pages/Settings/Settings";
import HelpSupport from "./pages/HelpSupport/HelpSupport";
import StudyPlan from "./pages/StudyPlan/StudyPlan";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Router>
      <AuthProvider>
        <SidebarProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Singup />} />
            <Route path="/otp" element={<OtpVerification />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mock-interview" element={<MockInterview />} />
              <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
              <Route path="/coding-practice" element={<CodingPractice />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/question-bank" element={<QuestionBank />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help-support" element={<HelpSupport />} />
              <Route path="/study-plan" element={<StudyPlan />} />
            </Route>
          </Routes>
        </SidebarProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
