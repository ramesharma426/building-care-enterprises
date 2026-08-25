import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Building Care",
    description:
      "Building materials, sanitary & plumbing, and machinery tools supplier in Hetauda, Makawanpur, Nepal.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0369a1",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
