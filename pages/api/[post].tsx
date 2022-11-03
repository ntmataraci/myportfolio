import clientPromise from "../../lib/mongodb";
const post = async (req:any,res:any) => {
const {post}=req.query
const modifiedHeader=post.replaceAll(" ","").toLowerCase()
console.log(modifiedHeader)
    try {
        const client=await clientPromise;
        const db=client.db("blog")
        const posts= await db.collection("posts").find({slug:modifiedHeader}).limit(1).toArray();
        res.json(posts)
        }catch(e:any){
            console.error(e)
        }
}



export default post