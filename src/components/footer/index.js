import { FetchApi } from '@/utils'
import FooterComponent from './footerComponent'

// --------------------------------------

export const getServerData = async () => {
    return await FetchApi({
        url: "/footers",
        method: "get",
        query: "populate=*"
    }).then(res => (res?.data[0]))
}

const Footer = async () => {
    const footerData = await getServerData()

    return (
        <>
            <FooterComponent footerData={footerData} />
        </>
    )
}

export default Footer
