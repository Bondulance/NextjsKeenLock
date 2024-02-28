"use server";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export async function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
