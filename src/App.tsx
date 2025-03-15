import ExpenseTracker from "./components/app";
import { useLoggedInStore } from "./components/app/auth/set-auth";
import Dashboard from "./components/app/Dashboard";
function App() {
  const { loggedIn } = useLoggedInStore();
  return (
    <div className="flex items-center justify-center mt-3">
      {loggedIn ? <Dashboard /> : <ExpenseTracker />}
    </div>
  );
}

export default App;
