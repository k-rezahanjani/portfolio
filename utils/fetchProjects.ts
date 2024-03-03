import { Project } from "@/typings";

export const fetchProjects =async () => {
    const res = await fetch(`http://kavehrh.site/api/getProject`);
    const data = await res.json();
    const project: Project[] = data.project;

    return project;
}
