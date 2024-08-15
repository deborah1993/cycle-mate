import Dashboard from "@/app/components/dashboard";
import Quiz from "@/app/components/quiz";
import { Gender } from "@/app/lib/types";
import React from "react";

export default function HomePage() {
  const user_one = {
    gender: undefined,
  };

  const user_two = {
    gender: Gender.FEMALE,
  };

  const user_three = {
    gender: Gender.MALE,
  };

  return <>{!user_one.gender ? <Quiz /> : <Dashboard />}</>;
}
