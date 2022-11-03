import clientPromise from "../../lib/mongodb";
const posts = async (req:any,res:any) => {

    try {
        const client=await clientPromise;
        const db=client.db("blog")
        const posts= await db.collection("posts").find({}).sort({_id:-1}).toArray();
        res.json(posts)
        }catch(e:any){
            console.error(e)
        }
}



export default posts