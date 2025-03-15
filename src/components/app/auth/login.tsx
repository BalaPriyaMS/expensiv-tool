import { useForm } from "react-hook-form";
import { z } from "zod";

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
  LogInDetails,
  signInSchema,
  SignUpDetails,
  SignUpFormData,
  useAuth,
} from "../hooks/use-auth";
import { useErrorMsgStore, useErrorStore } from "./set-auth";

export const LoginForm = () => {
  const { getLogIn } = useAuth();
  const { isError } = useErrorStore();
  const { isErrorMsg } = useErrorMsgStore();

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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Sign In</Button>
      </DialogTrigger>
      <DialogContent>
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
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
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
      </DialogContent>
    </Dialog>
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
