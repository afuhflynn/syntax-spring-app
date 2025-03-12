const APP_STATUS = process.env.APP_STATUS!;

/**
 * devLog - A function that handles logging data to the console in dev environment
 * @param ...data: unknown[] - An array of any thing passed in.
 * @example devLog("Hello, word", name);
 */
export default async function devLog(...data: unknown[]): Promise<void> {
  if (APP_STATUS === "development") console.log(...data);
}
