import { FC } from "react";
import { Calendar, Eye, Github, LayoutDashboard, Tags } from "lucide-react";
import ProjectCard from "./project-card";
import Carousel from "./carousel";
import InfoItem from "./info-item";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/app/types/interfaces";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const carouselImages = project.images?.map((image) => ({
    src: urlForImage(image),
    alt: image.alt || project.title,
  })) || [];

  const publishedDate = project.publishedAt 
    ? new Date(project.publishedAt).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : "N/A";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ProjectCard 
          imageUrl={carouselImages[0]?.src} 
          title={project.title} 
        />
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-4xl lg:max-w-7xl">
        <DialogHeader className="bg-muted p-4 md:p-6">
          <DialogTitle className="text-foreground capitalize text-xl font-semibold truncate">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid lg:grid-cols-2 gap-4 p-4 max-h-[85vh] overflow-x-hidden overflow-y-auto">
          <Carousel images={carouselImages} />
          <div className="space-y-4 lg:space-y-6 p-2 lg:p-4 size-full">
            <p className="text-sm">{project.description}</p>
            <Separator />
            <article className="space-y-2 lg:space-y-3">
              <InfoItem icon={Calendar} label="Publié le">
                <p className="font-semibold">
                  {publishedDate}
                </p>
              </InfoItem>
              <InfoItem icon={LayoutDashboard} label="Adaptabilité">
                <p className="font-semibold">
                  {project.isResponsive ? "Responsive" : "Non responsive"}
                </p>
              </InfoItem>
              <InfoItem icon={Tags} label="Technologies">
                <div className="flex items-center flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="border rounded-sm py-1 px-2 hover:bg-muted cursor-pointer text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </InfoItem>
            </article>
            <Separator />
            <div className="flex items-center gap-2">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className={buttonVariants({ size: "sm" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir la démo"
                >
                  <Eye className="size-4 mr-2" />
                  <span>Voir la démo</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Code source"
                >
                  <Github className="size-4 mr-2" />
                  <span>Code source</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectItem;