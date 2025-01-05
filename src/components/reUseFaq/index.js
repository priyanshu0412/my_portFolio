
import { FetchApi } from '@/utils'
import FAQComponent from './faqComponent'

// ------------------------------------

export const getServerData = async () => {
    return await FetchApi({
        url: "/faqs",
        method: "get",
        query: "populate=*"
    }).then(res => (res?.data))
}

const ReUseFaq = async () => {

    const faqData = await getServerData()

    return (
        <>
            <FAQComponent faqData={faqData} />
        </>
    )
}

export default ReUseFaq
