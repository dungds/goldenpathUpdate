import type { About } from "../types/about";
export async function fetchAbout():Promise<About>{
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const res=await fetch(`${baseUrl}/about`)
if(!res.ok) throw new Error("Fail to fetch About Us");
return res.json();
}