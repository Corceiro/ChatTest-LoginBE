import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "Properties.env"});

const tokenKey = process.env.TOKENKEY;

export async function signToken() {
    
}