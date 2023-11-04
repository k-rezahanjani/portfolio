import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSocials } from "@/utils/fetchSocials";

// export async function getData() {
//     const socials = await fetchSocials();
//     const pageInfo = await fetchPageInfo();
//     const experiences = await fetchExperience();
//     const skills = await fetchSkills();
  
//     return {
//       socials,
//       pageInfo,
//       experiences,
//       skills
//     };
//   }

export async function getStaticProps() {
  const socials = await fetchSocials()
  const pageInfo = await fetchPageInfo()
  const experiences = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
  const res = experiences.json()
  const skills = await await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkill`)
  const skill = skills.json()
  
  return { props: { 
    socials,
    pageInfo,
    res,
    skill
  } }
}