import { Skill,SkillCategory } from "@/app/types/interfaces";
import { client } from "./client";

export async function getSkills(category:SkillCategory){
    const query = `
    *[_type=="skills" && category=="${category}"]{
        _id,label,value, category
  }[]
  `;

const data = await client.fetch(query);
return data as Skill[];
}