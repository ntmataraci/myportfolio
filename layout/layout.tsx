import Blog from "./blog/Blog"
import FirstSection from "./firstSection/FirstSection"
import Footer from "./footer/Footer"
import HeaderLayout from "./header/header"
import Portfol from "./portfol/Portfol"
import Line from "./services/Line"
import Services from "./services/Services"


const Layout = () => {

    return(
      
        <div className="max-w-[1250px] mx-auto">
<HeaderLayout/>
<FirstSection/>
<Services/>
<Line/>
<Portfol/>
<Blog/>
<Footer/>
</div>

    )
}

export default Layout