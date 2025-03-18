import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ForgetPasswordDls,
  LogInDetails,
  signInSchema,
  SignUpDetails,
  SignUpFormData,
  useAuth,
} from "../hooks/use-auth";
import {
  useErrorMsgStore,
  useErrorStore,
  useForgetPasswordStore,
} from "./set-auth";

export const SetUpLogin = () => {
  const { forgetPassword, setForgetPassword } = useForgetPasswordStore();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} onClick={() => setForgetPassword(false)}>
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent>
        {forgetPassword ? <ForgetPassword /> : <LoginForm />}
      </DialogContent>
    </Dialog>
  );
};
export const LoginForm = () => {
  const { getLogIn } = useAuth();
  const { isError } = useErrorStore();
  const { isErrorMsg } = useErrorMsgStore();
  const { setForgetPassword } = useForgetPasswordStore();

  const userSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, "Enter valid password"),
  });
  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LogInDetails) => {
    console.log("login");
    getLogIn(data);
  };

  return (
    <Card className="max-w-full m-4">
      <CardHeader>
        <CardTitle className="text-center flex flex-col gap-3">
          <p className="text-xl font-normal">Sign in to Group Expenses </p>
          <p className="text-lg font-normal text-[#4B5563]">
            Enter your credentials to access your account
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div
              className="mt-2 text-end cursor-pointer"
              onClick={() => setForgetPassword(true)}
            >
              Forgot Password
            </div>

            <DialogFooter>
              <Button type="submit" className="w-3/4 mx-16">
                Login
              </Button>
            </DialogFooter>
          </form>
        </Form>
        {isError && (
          <div className="text-red-600 text-center text-lg mt-5">
            {isErrorMsg}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const SignUp = () => {
  const { getSignUp } = useAuth();
  const { isError } = useErrorStore();
  const { isErrorMsg } = useErrorMsgStore();
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpDetails) => {
    console.log("login");
    getSignUp(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl ">
        <Card className="max-w-full m-4">
          <CardHeader>
            <CardTitle className="text-center flex flex-col gap-3">
              <p className="text-xl font-normal">Sign Up to Group Expenses </p>
              <p className="text-lg font-normal text-[#4B5563]">
                Create your account to get started
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button type="submit" className="w-3/4 mx-16">
                    Sing Up
                  </Button>
                </DialogFooter>
              </form>
            </Form>

            {isError && (
              <div className="text-red-600 text-center text-lg mt-5">
                {isErrorMsg}
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { getForgetPassword } = useAuth();
  const forgotPasswordSchema = z.object({
    email: z.string().email("Enter a valid email address"),
  });
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ForgetPasswordDls) => {
    console.log("clicked ");

    try {
      setIsLoading(true);
      await getForgetPassword(data);
      setIsLoading(false);
      toast.success("Password reset link sent successfully to your email!");
      navigate("/success-reset");
    } catch {
      toast.error("Failed to send reset link.");
    }
  };

  return (
    <Card className="max-w-full m-4">
      <CardHeader>
        <CardTitle className="text-center flex flex-col gap-3">
          <p className="text-xl font-normal">Reset Your Password</p>
          <p className="text-base text-gray-600">
            Enter your email to reset your password.
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-3/4 mx-auto mt-4">
                {isLoading ? <Spinner /> : "Send Reset Link"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
