import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  return (
    <div className="pt-4">
      <div className="flex flex-col gap-3">
        {inputFields.map((field) => {
          return (
            <div className="flex flex-col gap-2" key={field.name}>
              <Label>{field.label}</Label>
              <Input type={field.type} placeholder={field.placeholder} className="text-sm"/>
            </div>
          );
        })}
      </div>
      <div>
        <Button className="w-full mt-4 p-5">Login</Button>
      </div>
    </div>
  );
};

export default Login;

const inputFields = [
  {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
  },
];
