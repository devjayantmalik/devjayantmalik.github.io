import type { NextPage } from "next";
import Image from "next/image";
import { projects } from "~src/data";

const Portfolio: NextPage = () => {
  return (
    <article>
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <section>
        <ul className="grid grid-cols-3 gap-x-4 gap-y-10">
          {projects.map(({ title, href, icon, subtitle,workTenure }) => (
            <div key={title}>
              <Image
                className="rounded mb-4 overflow-hidden w-full h-[200px] object-cover"
                src={icon}
                alt={title}
                width={300}
                height={230}
                loading="lazy"
              />
              <h3 className="project-title">{title}</h3>
              <p className="project-category mt-1">({workTenure})</p>
              <p className="project-category mt-1">{subtitle}</p>
            </div>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
