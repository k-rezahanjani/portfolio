import { Project } from "@/typings";

export const fetchProjects =async () => {
    const res = await fetch(`https://portfolio-l1q056gfi-kavehs-projects-60798897.vercel.app/api/getProject`);
    const data = await res.json();
    const project: Project[] = data.project;

    return project;
}