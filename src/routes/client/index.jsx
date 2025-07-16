import AboutRoute from "./AboutRoute"
import ContactRoute from "./ContactRoute"
import HomeRoute from "./HomeRoute"
import ProductsRoute from "./ProductsRoute"

const index = () => {
    return (
        <div>

            <HomeRoute />
            <AboutRoute />
            <ContactRoute />
            <ProductsRoute/>
        </div>
    )
}

export default index