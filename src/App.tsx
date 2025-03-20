import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

import LogInSystem from "./components/app";
import { AppSidebar } from "./components/app-sidebar";
import { ResetPassword } from "./components/app/auth/reset-password";
import { useLoggedInStore } from "./components/app/auth/set-auth";
import Dashboard from "./components/app/Dashboard";
import ExpenseForm from "./components/app/Dashboard/new-expense-form";
import { Button } from "./components/ui/button";
import { SidebarProvider } from "./components/ui/sidebar";

const SuccessReset = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center text-xl font-normal h-screen w-full flex-col gap-12">
      <p>
        A password reset link has been sent successfully! Please check your
        email inbox.
      </p>
      <Button onClick={() => navigate("/")}>Go to Login</Button>
    </div>
  );
};

function App() {
  const { loggedIn } = useLoggedInStore();

  return (
    <BrowserRouter>
      <div className="flex ">
        {loggedIn && (
          <SidebarProvider>
            <AppSidebar />
          </SidebarProvider>
        )}

        <div className="flex-1 mr-12">
          <Routes>
            <Route
              path="/"
              element={loggedIn ? <Dashboard /> : <LogInSystem />}
            />
            <Route path="/add-expense" element={<ExpenseForm />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/success-reset" element={<SuccessReset />} />
          </Routes>
        </div>

        <Toaster richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;
