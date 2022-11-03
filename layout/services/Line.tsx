import { DiJavascript1,DiPhp,DiNodejsSmall,DiSass } from 'react-icons/di';
import {TbBrandNextjs,TbBrandTailwind} from "react-icons/tb"
import {SiMysql,SiTypescript,SiRedux} from "react-icons/si"
import { Fragment } from 'react';

const Line = () => {

const data= [
    {
        icon:<DiJavascript1/>,
        point:0.8,

    },
    {
        icon:<TbBrandNextjs/>,
        point:0.8,

    },
    {
        icon:<SiTypescript/>,
        point:0.8,

    },
    {
        icon:<SiRedux/>,
        point:0.7,

    },
    {
        icon:<DiPhp/>,
        point:0.4,
    },
    {
        icon:<TbBrandTailwind/>,
        point:0.8,
    },
    {
        icon:<DiNodejsSmall/>,
        point:0.4,
    },
    {
        icon:<DiSass/>,
        point:0.7,
    },
    {
        icon:<SiMysql/>,
        point:0.7,
    },

]

    return(
 
        <div className='flex flex-wrap gap-5 mt-10 '>
<div className="flex w-[35%] flex-col justify-center mt-10 gap-5">
    {data.map((item,idx)=>
    <Fragment key={idx}>
    <div className='flex gap-5'>
    <div className='my-auto text-4xl'>{item.icon}</div>
    <div className="flex">
    <div className="bg-amber-400 h-[30px] my-auto text-right text-black leading-[30px]" style={{width:item.point*300+"px"}}>{item.point*100}%</div>
    <div className="bg-sky-700 h-[30px] my-auto" style={{width:300-item.point*300+"px"}}></div>
    </div>
    </div>
    </Fragment>
    )}
   
</div>
<div className='lg:w-[60%] w-full mx-auto'>
<img className='w-full mx-auto' src='./linkedin.png'></img>
</div>
</div>
    )
}

export default Line