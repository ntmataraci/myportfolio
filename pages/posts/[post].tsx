import { useRouter } from 'next/router'
import React,{useState,useEffect} from "react"
import Link from 'next/link'
import {useSelector} from "react-redux"
import { RootState } from '../../store/store'
const PostPage=()=>{
    const router = useRouter()
    const { post } = router.query
const [Mydata,setMyData]=useState<any>()


useEffect(()=>{
    if(post){
    const fetcher = async ()=>{
        const data=await fetch("/api/"+post)
        const result=await data.json()
        setMyData(result[0])
        console.log(result)
    };
    fetcher();
}
}
    ,[post])

   
const darkmode=useSelector((state:RootState)=>state.Information.darkmode)
    return(
       
        <div className={`${darkmode?"dark":"lightMode"}`}>
        <div><Link href="/">Back Home Page</Link></div>
        {Mydata&&
        <div className=' bg-slate-900 dark:bg-white dark:text-slate-600 min-h-screen py-5 lg:px-10 px-2 text-slate-400 font-Inter flex flex-col justify-items-center justify-center m-auto'>
        <h1 className='m-auto text-2xl'>{Mydata.header}</h1>
        <img className="max-w-[300px] m-auto" src={Mydata.img}></img>
        <div className='m-auto'>{Mydata.content}</div>
        </div>
}
</div>
       
    )
}
export default PostPage
