import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(): string {
  return new Date()
    .toLocaleDateString("en-CA", {
      weekday: "long",
    })
    .toLowerCase()
}