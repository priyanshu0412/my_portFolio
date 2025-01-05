import { FetchApi } from '@/utils';
import AboutMeComponent from './aboutMeComponent';

// -------------------------------------

export const getServerData = async () => {
    return await FetchApi({
        url: "/abouts",
        method: "get",
        query: "populate=*"
    }).then(res => (res?.data[0]))
}


const AboutMeSection = async () => {
    const aboutData = await getServerData()

    return (
        <>
            <AboutMeComponent aboutData={aboutData} />
        </>
    )
}

export default AboutMeSection
