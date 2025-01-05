import { FetchApi } from '@/utils';
import ProjectSectionComponent from './projectSectionComponent';
// -----------------------------------------------

export const getServerData = async () => {
    return await FetchApi({
        url: "/projects",
        method: "get",
        query: "populate=*"
    }).then(res => (res?.data))
}

const ProjectSection = async () => {

    const data = await getServerData()

    return (
        <>
            <ProjectSectionComponent data={data} />
        </>
    )
}

export default ProjectSection
