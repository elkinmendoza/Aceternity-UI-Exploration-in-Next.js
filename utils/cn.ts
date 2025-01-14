import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
/**
 * Combines multiple class names into a single string.
 * 
 * This function takes any number of class name inputs, processes them using the `clsx` utility 
 * to handle conditional and variadic class names, and then merges them using the `twMerge` 
 * utility to ensure Tailwind CSS classes are combined correctly.
 * 
 * @param {...ClassValue[]} inputs - An array of class values which can be strings, objects, arrays, etc.
 * @returns {string} - A single string containing the combined class names.
 */
export function cn(...inputs: ClassValue[]) { 
  return twMerge(clsx(inputs));
}