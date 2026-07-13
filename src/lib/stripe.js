import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  seeker_pro: "price_1TscT32aAPrFFs1W16dqq4uM",
  seeker_premium: "price_1TscvN2aAPrFFs1W3oRifOgT",
  recruiter_growth: "price_1TscwU2aAPrFFs1W7sPtXHkN",
  recruiter_enterprise: "price_1TscxP2aAPrFFs1WdHWsrvDi",
};
