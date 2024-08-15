"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";

function Quiz() {
  const [step, setStep] = useState(0);
  return (
    <div className="w-full h-screen flex justify-center items-center text-center flex-col">
      <Button className="rounded-large">Male</Button>
      <Button className="rounded-large">Female</Button>
    </div>
  );
}

export default Quiz;
