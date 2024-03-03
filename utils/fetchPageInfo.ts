import { PageInfo } from "@/typings";

export const fetchPageInfo =async () => {
    const res = await fetch(`http://www.kavehrh.site/api/getPageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}

// https://cv-theta-jade.vercel.app