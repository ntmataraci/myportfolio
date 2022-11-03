import clientPromise from "../../lib/mongodb";
import { ObjectId } from 'bson'; 
export default async (req:any,res:any)=> {
    console.log(req.body)
    try {
        const client=await clientPromise;
        const db=client.db("blog")
        const posts= await db.collection("posts").updateOne(
            {_id:new ObjectId(req.body._id)},
            {$set:{header:req.body.header,img:req.body.img,content:req.body.content}}
        )
        res.send(posts)
        }catch(e:any){
            console.error(e)
        }
}