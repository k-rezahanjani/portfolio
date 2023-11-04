import { Experience } from "@/typings";

export const fetchExperience =async () => {
    const res = await fetch(`https://portfolio-l1q056gfi-kavehs-projects-60798897.vercel.app/api/getExperience`);
    const data = await res.json();
    const experience: Experience[] = data.experience;

    return experience;
}