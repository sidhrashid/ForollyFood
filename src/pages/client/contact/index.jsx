import Direction from "./Direction"
// import ContactSection from "/ContactSection"
// import KeyFeatures from "../home/KeyFeatures"
import QuerySection from "./QuerySection"
import ContactHero from "./ContactHero"

const index = () => {
    return (
        <div>
            <QuerySection  />
            {/* <ContactSection /> */}
            <ContactHero/>
            <Direction />
            {/* <KeyFeatures /> */}
        </div>
    )
}

export default index