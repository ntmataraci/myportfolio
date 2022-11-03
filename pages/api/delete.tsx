import clientPromise from "../../lib/mongodb";
import { ObjectId } from 'bson'; 
const posts = async (req:any,res:any) => {

    try {
        const client=await clientPromise;
        const db=client.db("blog")
        const posts= await db.collection("posts").deleteOne({_id:new ObjectId(req.body._id)});
        console.log(posts)
        res.json(posts)
        }catch(e:any){
            console.error(e)
        }
}



export default posts