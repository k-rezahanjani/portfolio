import { fetchExperience } from "@/utils/fetchExperience";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";

export async function getData() {
    const socials = await fetchSocials();
    const pageInfo = await fetchPageInfo();
    const experiences = await fetchExperience();
    const skills = await fetchSkills();
  
    return {
      socials,
      pageInfo,
      experiences,
      skills
    };
  }