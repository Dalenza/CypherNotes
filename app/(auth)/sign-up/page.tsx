// signup.tsx
"use client";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignupPage() {
  const updateFieldValue = (
    key: "password" | "email" | "password2",
    value: any
  ) => {
    setForm((prev) => {
      const newForm = { ...prev };
      newForm[key].value = value;
      return newForm;
    });
  };
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = useState({
    email: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
    password2: {
      value: "",
      error: false,
    },
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // fetch data if there is no error
    if (form.password2.error || form.password.error || form.email.error) {
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.email.value,
          email: form.email.value,
          password: form.password.value,
        }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail);
      }
      // save access token to local storage
      const data = await response.json();
      localStorage.setItem("accessToken", data.access_token);
      // redirect to home page
      router.push("/home");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error fetching data",
        description: error.message,
      });
    }
  };
  return (
    <div className="w-full max-w-md bg-card text-foreground rounded-lg drop-shadow-xl p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary">
        Create an Account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium">
            Username/Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email.value}
            onChange={(e) => updateFieldValue("email", e.target.value)}
            className="w-full rounded-md border  shadow-sm px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={form.password.value}
            onChange={(e) => updateFieldValue("password", e.target.value)}
            className="w-full rounded-md border  shadow-sm px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            required
            value={form.password2.value}
            onChange={(e) => {
              updateFieldValue("password2", e.target.value);
              if (form.password.value !== e.target.value) {
                setForm((prev) => {
                  const newForm = { ...prev };
                  newForm.password2.error = true;
                  return newForm;
                });
              } else {
                setForm((prev) => {
                  const newForm = { ...prev };
                  newForm.password2.error = false;
                  return newForm;
                });
              }
            }}
            className="w-full rounded-md border  shadow-sm px-3 py-2"
          />
          {form.password2.error && (
            <span className="mt-1 text-sm text-destructive">
              Passwords must match
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-primary text-primary-foreground py-2 px-4 shadow-md hover:scale-95 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}

export default SignupPage;
