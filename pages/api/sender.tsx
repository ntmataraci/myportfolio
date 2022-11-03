import clientPromise from "../../lib/mongodb";

export default async (req:any,res:any)=> {
    console.log(req.body)
    try {
        const client=await clientPromise;
        const db=client.db("blog")
        const user= await db.collection("users").find({username:req.body.username,password:req.body.password}).limit(1).toArray();
        if (user.length>0){
        const posts= await db.collection("posts").insertOne({header:req.body.header, img:req.body.img,content:req.body.content,slug:req.body.header.replaceAll(" ","").toLowerCase()})
        res.json(posts)
        }
       
        }catch(e:any){
            console.error(e)
        }
}