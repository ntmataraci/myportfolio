import {useState,useEffect, useRef} from "react"
const PostsFetcher = ({newPost}:any) => {
const [allData,setAllData]=useState<any>()
const [editWindow,setEditedWindow]=useState<null|{header:string,img:string,content:string,_id:string}>()

    useEffect( ()=>{
        const fetcher= async()=>{
            const data=await fetch("http://localhost:3000/api/posts")
            const result= await data.json()
            console.log(result)
            setAllData(result)
            }
            fetcher()
    }
       
        ,[newPost])

const deleteHandler= async (id:string)=>{
    const data=await fetch("http://localhost:3000/api/delete",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({_id:id}) 
    })
    const result=await data.json()
   setAllData((prev:{_id:string}[])=>prev.filter(item=>item._id!=id))
}

const editHandler= async (item:any)=>{
    if(!item){setEditedWindow(null)}
    else{
    await setEditedWindow(null)
    await setEditedWindow((prev)=>({...prev,header:item.header,img:item.img,content:item.content,_id:item._id}))}
}

const updateHandler= async (id:string) => {
    const data=await fetch("http://localhost:3000/api/update",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        // body:JSON.stringify({header:headerVal,img:imgVal,content:contentVal,_id:id}) 
        body:JSON.stringify({header:headerRef.current.value,img:imgRef.current.value,content:contentRef.current.value,_id:id}) 
    })
    const result=await data.json() 
   setAllData((prev:{_id:string}[])=>{
  const filtering=prev.filter(item=>item._id!=id)
    return([...filtering,{header:headerRef.current.value,img:imgRef.current.value,content:contentRef.current.value,_id:id}])
})
}

const headerRef:any=useRef(null)
const imgRef:any=useRef(null)
const contentRef:any=useRef(null)

    return (
        <>
        {allData&&allData.map((item:any,idx:number)=>
            <div key={idx} className="flex justify-between w-[300px] mt-2">{item.header}<div><button onClick={()=>editHandler(item)} className="bg-slate-400 rounded-md px-2 mr-1">Edit</button><button onClick={()=>deleteHandler(item._id)} className="bg-sky-400 rounded-md">Delete</button></div> </div>
            )}
           <div className="mt-5"> EDIT WINDOW</div>
{editWindow&&
<div className="text-slate-500">

   <div className="text-slate-200"> header: </div><input defaultValue={editWindow.header} ref={headerRef}/>
   <div className="text-slate-200"> img: </div> <input defaultValue={editWindow.img} ref={imgRef}  />
   <div className="text-slate-200"> content: </div><textarea defaultValue={editWindow.content} ref={contentRef} ></textarea>
    <div className="text-slate-200 font-bold flex gap-2"><button onClick={()=>updateHandler(editWindow._id)}>Save</button><button onClick={()=>editHandler(null)}>Cancel</button></div>
</div>
}
        </>
    )
}

export default PostsFetcher