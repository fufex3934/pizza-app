"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const RegisterForm = () => {
  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form action="">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input name="name" id="name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input name="email" id="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" type="password" required />
          </div>
          <Button type="submit">Register</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
