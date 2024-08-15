import { Button } from "@nextui-org/react";
import React from "react";

function StepOne() {
  return (
    <div className="w-full h-screen flex justify-center items-center text-center flex-col">
      <Button className="rounded-large">Male</Button>
      <Button className="rounded-large">Female</Button>
    </div>
  );
}

export default StepOne;
