"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: {
      value: "",
    },
    password: {
      value: "",
    },
  });
  const { toast } = useToast();
  const updateFieldValue = (key: "password" | "email", value: any) => {
    setForm((prev) => {
      const newForm = { ...prev };
      newForm[key].value = value;
      return newForm;
    });
  };
  //

  return (
    <div className="w-full max-w-md bg-card text-foreground rounded-lg drop-shadow-xl p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary">
        Log in to CypherNotes
      </h1>
      <form>
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
            className="w-full rounded-md border shadow-sm px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium ">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={form.password.value}
            onChange={(e) => updateFieldValue("password", e.target.value)}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
            className="w-full rounded-md border shadow-sm px-3 py-2"
          />
        </div>
        <div className="flex items-center mb-4">
          <Checkbox id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm ">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-primary text-primary-foreground py-2 px-4 shadow-md hover:scale-95 transition"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Forgot your password?{" "}
        <Link href="#" className="text-primary hover:underline">
          Reset password
        </Link>
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Page;
