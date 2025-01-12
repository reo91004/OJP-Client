"use server"

import client from "@/libs/mongodb";
import clientPromise from "@/libs/mongodb";


export const getProblem=async(formData)=>{
    try{
        const client=await clientPromise;
        const db=client.db("DB");
        
        const problemId=formData.get("problemId");
        //problemId doesn't exist
        if(!problemId){
            throw new Error("ProblemId is required");
        }

        const problem=await db.collection("problems").findOne({problemId:problemId});
        return problem;
    }catch(error){
        console.error("Error fetching problem id[$]:",error);
        throw new Error("Failed to fetch problem id:")
    }
};

export const getProblems= async() =>{
    try{
        const clinet=await clientPromise;
        const db=client.db("DB");

        const problems=await db.collection("problems").find().toArray();
        return problems;
    }catch(error){
        console.error("Error fetching problems:",error);
        throw new Error("Failed to fetch problmes");
    }
};