/* eslint-disable @typescript-eslint/no-empty-object-type */
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type ClassNames = string | [] | {};
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export default cn;
