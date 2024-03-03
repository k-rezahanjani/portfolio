import { Experience } from "@/typings";

export const fetchExperience =async () => {
    const res = await fetch(`http://www.kavehrh.site/api/getExperience`);
    const data = await res.json();
    const experience: Experience[] = data.experience;

    return experience;
}