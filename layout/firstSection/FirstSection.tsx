import Myname from "./Myname"
import Myphoto from "./Myphoto"
const FirstSection = () => {
    return(
        <div className="flex justify-between flex-wrap gap-10 m-auto mt-[90px]">
<Myname/>
<Myphoto/>
</div>
    )
}

export default FirstSection