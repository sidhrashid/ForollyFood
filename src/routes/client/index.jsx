import AboutRoute from "./AboutRoute"
import ContactRoute from "./ContactRoute"
import ExportRoute from "./ExportRoutes"
import HomeRoute from "./HomeRoute"
import ProductsRoute from "./ProductsRoute"

const index = () => {
    return (
        <div>

            <HomeRoute />
            <AboutRoute />
            <ContactRoute />
            <ProductsRoute/>
            <ExportRoute />
        </div>
    )
}

export default index