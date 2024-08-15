"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  useEffect(() => {
    // In case the user signs out while on the page.
    console.log({ isLoaded, userId });
    if (!isLoaded || !userId) {
      router.push("/signin");
    } else {
      router.push("/home");
    }
  }, [isLoaded, userId]);
}
