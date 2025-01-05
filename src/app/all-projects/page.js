import { AllProjectPageComp } from '@/components'
import { FetchApi } from '@/utils'
import React from 'react'

// ---------------------------------------

export const getServerData = async () => {
    return await FetchApi({
        url: "/projects",
        method: "get",
        query: "populate=*"
    }).then(res => (res?.data))
}

const AllProjectPage = async () => {

    const data = await getServerData()

    return (
        <>
            <AllProjectPageComp data={data} />
        </>
    )
}

export default AllProjectPage
