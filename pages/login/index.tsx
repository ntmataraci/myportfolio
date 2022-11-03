
import { useRef,useState } from "react";
import PostsFetcher from "../../components/Posts";
export default function Posts (){
const [userEntered,setUserEntered]=useState(false)
const [userNameHandler,setUserNameHandler]=useState()
const [userPasswordHandler,setUserPasswordHandler]=useState()
const [newPost,setNewPost]=useState(0)
    const userName:any=useRef(null)
    const password:any=useRef(null)
    const headerRef:any=useRef(null)
    const imgRef:any=useRef(null)
    const contentRef:any=useRef(null)
const checkUser = async () => {
    if(userName!==null&&password!==null){
    const client=await fetch("./api/user",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({userName:userName.current.value,password:password.current.value})
    })
    const result= await client.json()
    console.log(result.length)
    if(result.length>0){
        setUserNameHandler(result[0].username)
        setUserPasswordHandler(result[0].password)
        setUserEntered(true)}
}

}


const insertArticle = async()=>{
    const data=await fetch("./api/sender",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({username:userNameHandler,password:userPasswordHandler,header:headerRef.current.value,img:imgRef.current.value,content:contentRef.current.value})
    })
    const result=await data.json()
    console.log(result)
    headerRef.current.value=""
    imgRef.current.value=""
    contentRef.current.value=""
    setNewPost(()=>newPost+1)
}

const inputStyle="border-solid border-2 text-slate-500"

const [hidePassword,setHidePassword]=useState(true)
const [wordCount,setWordCount]=useState(0)
const wordCountHandler = (e:any) => {
   setWordCount(e.target.value.split(" ").length)
}

const sendArticle= (e:any) => {
    e.preventDefault()
    insertArticle()
}
    return(
        <>
<div className="flex w-full h-screen justify-center items-center bg-slate-500 text-slate-200">
    {!userEntered&&
<div className="flex flex-col ">
UserName : <input type="text" ref={userName} required className={inputStyle}></input>
Password: <input type={hidePassword?"password":"text"} ref={password} required className={inputStyle}></input><div className="cursor-pointer" onClick={()=>setHidePassword(!hidePassword)}>{hidePassword?"Show":"Hide"}</div>
<button onClick={checkUser} className="bg-slate-600 rounded-xl leading-10 font-bold">Login</button>
</div>
}
{userEntered&&
<div className="flex justify-evenly gap-2 w-full">
<div className="flex flex-col gap-2 w-[300px] ">
<form onSubmit={sendArticle} className="flex flex-col gap-2 w-[300px] ">
Header <input type="text" ref={headerRef} required className={inputStyle}></input>
Img Url <input type="text" ref={imgRef} className={inputStyle}></input>
Content <textarea ref={contentRef} required className={inputStyle+" h-[300px]"} onChange={wordCountHandler} />
<input type="submit"  value="Send"/>
</form>
Total Words: {wordCount}
</div>
<div>
<PostsFetcher newPost={newPost}/>
</div>
</div>
}
</div>
    </>
    )
}



                // posts:JSON.parse(JSON.stringify(posts))
