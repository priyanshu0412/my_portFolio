"use client";
import React, { useEffect, useState, useCallback } from "react";
import NotFound from "@/app/not-found";
import { SpecificProjectPage } from "@/components";
import { FetchApi } from "@/utils";

const ProjectPage = ({ params }) => {
    const { slug } = params;
    const [project, setProject] = useState(null);

    const fetchProject = useCallback(async () => {
        try {
            const response = await FetchApi({
                url: "/projects",
                method: "get",
                query: "populate=*",
            });
            const projects = response?.data || [];

            const foundProject = projects.find(
                (proj) => proj.slugURL === `/${slug}`
            );
            setProject(foundProject || null);
        } catch (error) {
            console.error("Error fetching project:", error);
            setProject(null);
        }
    }, [slug]);

    useEffect(() => {
        fetchProject();
    }, [slug, fetchProject]);

    if (!project) {
        return <NotFound />;
    }

    return (
        <>
            <SpecificProjectPage project={project} />
        </>
    );
};

export default ProjectPage;
