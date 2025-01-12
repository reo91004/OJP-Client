import { getProblems } from "@/actions";

export async function GET() {
    try{
        const problems=await getProblems();
        return new Response(JSON.stringify(problems),{
            status:200,
            headers:{"Content-Type":"application/json"},
        });
    }catch(error: any){
        return new Response(JSON.stringify({error:error.message}),{
            status:500,
            headers:{"Content-Type":"application/json"}
        })
    }
}