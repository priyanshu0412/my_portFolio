import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectData } from '../../../../data';
import NotFound from '@/app/not-found';
import { SpecificProjectPage } from '@/components';

const ProjectPage = ({ params }) => {
    const { slug } = params;

    const project = ProjectData.find((proj) => proj.url === `/${slug}`);

    console.log(slug, "slug")

    if (!project) {
        return <NotFound />
    }

    return (
        <>
            {/* <h1 className="mb-4 text-3xl font-bold">{project.projectTitle}</h1>
            <Image src={project.projectImg} alt={project.projectTitle} width={600} height={400} />
            <p className="my-4">{project.projectDesc}</p>
            <Link href={project.projectLink} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                View Actual Project
            </Link> */}
            <SpecificProjectPage />
        </>
    );
};

export default ProjectPage;
