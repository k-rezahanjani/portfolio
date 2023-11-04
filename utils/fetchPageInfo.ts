import { PageInfo } from "@/typings";

export const fetchPageInfo =async () => {
    const res = await fetch(`https://portfolio-l1q056gfi-kavehs-projects-60798897.vercel.app/api/getPageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}