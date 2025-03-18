import { SetUpLogin, SignUp } from "./login";

const Register = () => {
  return (
    <div className="flex  items-center flex-col bg-muted gap-6 w-1/2 p-20 text-center relative  justify-center rounded-xl">
      <h1 className="text-3xl font-bold">Manage Group Expenses</h1>
      <p className="text-lg font-normal text-[#4B5563]">
        Simplify shared expenses with friends and family. Split bills, track
        expenses, and settle up with ease.
      </p>
      <div className="flex gap-8">
        <SetUpLogin />
        <SignUp />
      </div>
    </div>
  );
};

export default Register;
