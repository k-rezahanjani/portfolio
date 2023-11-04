import { Project } from "@/typings";

export const fetchProjects =async () => {
    const res = await fetch(`http://localhost:3000/api/getProject`);
    const data = await res.json();
    const project: Project[] = data.project;

    return project;
}