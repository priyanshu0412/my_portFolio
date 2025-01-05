import { FetchApi } from '@/utils'
import NavbarComponent from './navbarComponent'

// ---------------------------------

export const getServerData = async () => {
    return await FetchApi({
        url: "/navbars",
        method: "get",
        query: "populate=*"
    }).then(res => (res?.data))
}

const Navbar = async () => {

    const navbar = await getServerData()

    return (
        <>
            <NavbarComponent navbar={navbar} />
        </>
    )
}

export default Navbar
