import { createClient } from "@sanity/client"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error("Sanity project ID or dataset is not set in environment variables")
}

const config = {
  projectId,
  dataset,
  apiVersion: "2023-10-16",
  useCdn: process.env.NODE_ENV === "production",
}

export const client = createClient(config)
