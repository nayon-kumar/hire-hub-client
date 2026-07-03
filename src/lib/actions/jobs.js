"use server";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getJobs = async (newJobData) => {
  const res = await fetch(`${baseURL}/api/jobs`);
};
