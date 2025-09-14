"use client";

import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerAction } from "@/features/auth/auth-action";
import { redirect } from "next/navigation";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(
    registerAction,
    undefined
  );

  if (state?.success) {
    return redirect("/");
  }
  return (
    <React.Fragment>
      <Card className=" w-full sm:w-[400px] lg:w-[500px] mx-4 sm:mx-0">
        <CardHeader>
          <CardTitle>Register to your account</CardTitle>
          <CardDescription>
            Enter your email below to register to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign In</Button>
          </CardAction>
        </CardHeader>
        <form action={formAction}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                {!state?.success && (
                  <p className="text-sm text-red-600">{state?.errors?.name}</p>
                )}
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="chan . . "
                  name="name"
                />
              </div>
              <div className="grid gap-2">
                {!state?.success && (
                  <p className="text-sm text-red-600">{state?.errors?.email}</p>
                )}

                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
                />
              </div>
              <div className="grid gap-2">
                {!state?.success && (
                  <p className="text-sm text-red-600">
                    {state?.errors?.password}
                  </p>
                )}
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-6">
            <Button type="submit" className="w-full">
              Register
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default RegisterForm;
