import {BsFillSunFill,BsFillMoonFill} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import { RootState } from "../../store/store"
import { darkmodeHandling } from "../../store/slice"
const HeaderLayout = () => {

    const dispatch=useDispatch()
    const darkmode=useSelector((state:RootState)=>state.Information.darkmode)

    const darkMode = () => {
dispatch(darkmodeHandling())
console.log(darkmode)
setDarkIconHandler(!darkIconHandler)
    }

const [darkIconHandler,setDarkIconHandler]=useState(false)
const [closedMenu,setClosedMenu]=useState(true)
    return (
        <>
  <div className="bg-clip-text bg-gradient-to-r from-indigo-500  font-extrabold text-transparent text-8xl absolute top-[20px] lg:top-[50px]">NTM</div>
<div className="md:flex justify-around font-medium sticky top-0 bg-slate-900 dark:bg-white z-50 hidden">
<div className="flex gap-5">
<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#blog">Blog</a>
</div>
<div className="text-xl" onClick={darkMode}>{darkIconHandler?<BsFillMoonFill/>:<BsFillSunFill/>}</div>
</div>


{//mobile//
}
<div className="lg:hidden">
{closedMenu?
<div className="text-2xl fixed right-5 top-5 z-[100]" onClick={()=>setClosedMenu(false)}><GiHamburgerMenu/></div>
:
<div className="text-2xl fixed right-5 top-5 z-[100]" onClick={()=>setClosedMenu(true)}>X</div>
}
<div className="fixed backdrop-blur-xl w-full h-full top-0 left-0 z-[99]" style={{display:closedMenu?"none":"block"}}>
<div className="bg-clip-text bg-gradient-to-r from-indigo-500  font-extrabold text-transparent text-8xl absolute top-[20px] lg:none z-[-5]">NTM</div>
<div className="flex flex-col gap-1 text-xl text-center mt-[30px]">
<a href="#services" onClick={()=>setClosedMenu(true)}>Services</a>
<a href="#portfolio" onClick={()=>setClosedMenu(true)}>Portfolio</a>
<a href="#blog" onClick={()=>setClosedMenu(true)}>Blog</a>
    <div className="mx-auto" onClick={darkMode}>{darkIconHandler?<BsFillMoonFill/>:<BsFillSunFill/>}</div>
</div>
</div>
</div>
</>
    )
}

export default HeaderLayout
