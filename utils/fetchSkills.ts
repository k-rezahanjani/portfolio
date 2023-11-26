import { Skill } from "@/typings";

export const fetchSkills =async () => {
    const res = await fetch(`https://cv-theta-jade.vercel.app/api/getSkill`);
    const data = await res.json();
    const skill: Skill[] = data.skill;

    return skill;
}