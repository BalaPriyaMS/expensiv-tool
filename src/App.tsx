import ExpenseTracker from "./components/app";
import Dashboard from "./components/app/Dashboard";
import { useLoggedInStore } from "./components/app/Dashboard/set-expense";

function App() {
  const { loggedIn } = useLoggedInStore();
  return (
    <div className="flex items-center justify-center mt-3">
      {loggedIn ? <Dashboard /> : <ExpenseTracker />}
    </div>
  );
}

export default App;
