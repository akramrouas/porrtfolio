import { Project } from "@/app/types/interfaces";
import { client } from "@/sanity/lib/client";

export async function getProjects() {
  const query = `
        *[_type=="projects"]{
            _id,
            title,
            description,
            images,
            tags,
            demoLink,
            githubLink,
            publishedAt,
            isResponsive
      }
      `;

  const data = await client.fetch(query);
  return data as Project[];
}