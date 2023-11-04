import { Skill } from "@/typings";

export const fetchSkills =async () => {
    const res = await fetch(`https://portfolio-l1q056gfi-kavehs-projects-60798897.vercel.app/api/getSkill`);
    const data = await res.json();
    const skill: Skill[] = data.skill;

    return skill;
}