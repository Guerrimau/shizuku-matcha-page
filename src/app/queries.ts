import { query } from "@/utils/strapi";
import { Experience, Faq, Tea } from "./types";

export const getFaqs = async () => {
  const response = await query<{ data: Faq[] }>("faqs", {
    tags: ["faqs"],
  });
  return response.data;
};

export const getTeas = async () => {
  const response = await query<{ data: Tea[] }>("products?populate=*");
  return response.data;
};

export const getExperience = async () => {
  const response = await query<{ data: Experience }>(
    "benefits-shizuku-experience?populate=*",
  );
  return response.data;
};
