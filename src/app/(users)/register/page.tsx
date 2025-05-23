"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FormEvent, useState } from "react";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Registration Successful");
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input
              value={formData.name}
              onChange={hanldeChange}
              name="name"
              id="name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              value={formData.email}
              onChange={hanldeChange}
              name="email"
              id="email"
              type="email"
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="mb-2">
              Password
            </Label>
            <Input
              value={formData.password}
              onChange={hanldeChange}
              name="password"
              id="password"
              type="password"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading? 'Registering...':'Register'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
