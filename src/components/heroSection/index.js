import { FetchApi } from '@/utils';
import HeroSectionComponents from './heroSectionComponent';

// --------------------------------

export const getServerData = async () => {
    return await FetchApi({
        url: "/hero-sections",
        method: "get",
        query: "populate=*"
    }).then(res => (res?.data))
}

const HeroSection = async () => {

    const data = await getServerData()

    return (
        <>
            <HeroSectionComponents data={data} />
        </>
    )
}

export default HeroSection
