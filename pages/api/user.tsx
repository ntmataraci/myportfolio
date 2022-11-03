import clientPromise from "../../lib/mongodb";

export default async (req:any,res:any)=> {
    try {
        const client=await clientPromise;
        const db=client.db("blog")
        const user= await db.collection("users").find({username:req.body.username,password:req.body.password}).limit(1).toArray();
        res.json(user)
        }catch(e:any){
            console.error(e)
        }
}