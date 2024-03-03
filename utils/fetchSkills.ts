import { Skill } from "@/typings";

export const fetchSkills =async () => {
    const res = await fetch(`http://www.kavehrh.site/api/getSkill`);
    const data = await res.json();
    const skill: Skill[] = data.skill;

    return skill;
}