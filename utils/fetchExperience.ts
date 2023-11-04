import { Experience } from "@/typings";

export const fetchExperience =async () => {
    const res = await fetch(`https://cv-theta-jade.vercel.app/api/getExperience`);
    const data = await res.json();
    const experience: Experience[] = data.experience;

    return experience;
}