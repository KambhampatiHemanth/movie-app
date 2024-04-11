import dotenv from 'dotenv'
import mysql from 'mysql2/promise'
import { table , userSchema  } from './schema.js'
dotenv.config()
export const connectDB = async ()=>{
    try {
        const connection = await mysql.createConnection({
            host : process.env.host,
            user : process.env.user,
            password : process.env.password
        })
        await connection.query(`create database if not exists ${process.env.database}`);
        await connection.query(`use ${process.env.database}`);
        await connection.query(`create table if not exists ${table.users}(${userSchema})`)
        
        console.log("connected to db")

        return connection

    }catch (err) {
        console.error(`Error in connecting db/creating Tables : ${err.message}`)        
    }
}

export const getConnection = async ()=>{
    const connection = await connectDB()
    return connection;
}
   


