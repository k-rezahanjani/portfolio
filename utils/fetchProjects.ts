import { Project } from "@/typings";

export const fetchProjects =async () => {
    const res = await fetch(`https://cv-theta-jade.vercel.app/api/getProject`);
    const data = await res.json();
    const project: Project[] = data.project;

    return project;
}
