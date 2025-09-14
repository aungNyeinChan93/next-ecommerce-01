import RegisterForm from "@/components/auth/register-form";
import React from "react";

const RegisterPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 flex justify-center items-center">
        <RegisterForm />
      </main>
    </React.Fragment>
  );
};

export default RegisterPage;
