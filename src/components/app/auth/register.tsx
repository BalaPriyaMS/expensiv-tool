import { LoginForm, SignUp } from "./login";

const Register = () => {
  return (
    <div className="flex justify-start items-center flex-col bg-muted gap-6 w-[90%] p-10 text-center relative top-36 ">
      <h1 className="text-3xl font-bold">Manage Group Expenses</h1>
      <p className="text-lg font-normal text-[#4B5563]">
        Simplify shared expenses with friends and family. Split bills, track
        expenses, and settle up with ease.
      </p>
      <div className="flex gap-8">
        <LoginForm />
        <SignUp />
      </div>
    </div>
  );
};

export default Register;
