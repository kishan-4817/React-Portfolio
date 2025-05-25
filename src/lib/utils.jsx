// lib/utils.jsx
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names conditionally and merges Tailwind CSS classes.
 * @param  {...any} inputs - Class strings or conditionals
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

/**
 * Formats a date to a readable string
 * @param {Date|string} date - The date to format
 * @returns {string}
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Truncates a string to a specified length
 * @param {string} str - The string to truncate
 * @param {number} length - Maximum length
 * @returns {string}
 */
export function truncate(str, length = 100) {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + "...";
}

/**
 * Delays execution for a specified time
 * @param {number} ms - Time to delay in milliseconds
 * @returns {Promise}
 */
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates a random ID
 * @returns {string}
 */
export function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
