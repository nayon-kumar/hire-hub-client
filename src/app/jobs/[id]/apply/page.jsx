import { getApplicationsByApplicant } from "@/lib/api/applications";
import { getJobById } from "@/lib/api/jobs";
import { getPlanById } from "@/lib/api/plans";
import { getUserSession } from "@/lib/core/session";
import React from "react";

const page = async () => {
  const user = await getUserSession();
  console.log("Fetching applications...");
  const applications = await getApplicationsByApplicant(user.id);
  console.log("Applications:", applications);

  console.log("Fetching plan...");
  const plan = await getPlanById(user?.plan || "seeker_free");
  console.log("Plan:", plan);

  console.log("Fetching job...");
  const job = await getJobById(id);
  console.log("Job:", job);
  return (
    <div>
      <p>Apply page</p>
    </div>
  );
};

export default page;
