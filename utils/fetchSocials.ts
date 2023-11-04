import { Social } from "@/typings";
import { cache } from "react";

export const fetchSocials = async () => {
    try {
      const res = await fetch(`https://portfolio-l1q056gfi-kavehs-projects-60798897.vercel.app/api/getSocials`);
      if (!res.ok) {
        throw new Error(`Failed to fetch social data: ${res.status}`);
      }
      const data = await res.json();
      const socials: Social[] = data.socials;
  
      return socials;
    } catch (error) {
      console.error("Error fetching social data:", error);
      return [];
    }
  };
  



  