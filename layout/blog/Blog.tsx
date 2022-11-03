import { useEffect, useState } from "react"
import Link from 'next/link'
const Blog = () => {

    const [data,setData]=useState<null|{header:string,img:string,content:string,slug:string}[]>()
    const [pagination,setPagination]=useState(0)
const fetcher = async ()=> {
        const data=await fetch("http://localhost:3000/api/posts")
        const result= await data.json()
        console.log(result)
        setData(result)
}

useEffect(()=>{fetcher()},[])


    return(
        <div className="w-full flex justify-items-center flex-col gap-5 mt-10" id="blog">
        <div className="flex justify-center"><div className="w-[50px]  bg-slate-400 h-1 mr-5 my-auto"></div> <div className="text-center text-sm">MY BLOG</div></div> 
        <div className="text-center text-white text-xl">ARTICLES</div>
        <div className="flex flex-wrap justify-center gap-5">
            {!data&&<div>Loading Data</div>}
            {data&&data.map((item,idx)=>{
            if(idx<pagination*3+3){
            return(
            <div key={idx} className="w-1/4 min-w-[300px] h-[350px] rounded-xl">
            <img className="rounded-t-xl h-[150px] w-[100%] object-cover" src={item.img}></img>
            <div className="rounded-b-xl border-slate-500 border-2 h-[200px]">
            <div className="text-xl font-bold text-center">{item.header}</div>
            <div className="text-sm font-bold text-center">{}</div>
            <div className="p-5">{item.content.split(" ").slice(0,10).join(" ")}</div>
            <div className="text-center cursor-pointer font-bold brightness-150 dark:brightness-50"><Link href={`http://localhost:3000/posts/${item.slug}`}>Continue to reading </Link></div>
            </div>
            </div>
            )}
})}
        </div>
        {data&&data?.length>(pagination+1)*3&&
        <div className="bg-white cursor-pointer text-center" onClick={()=>setPagination(pagination+1)}>Load More...</div>
        }
        </div>
    )
}

export default Blog