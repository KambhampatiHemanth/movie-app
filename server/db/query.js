import { usernameExists } from './utils.js'
import { getConnection } from './connection.js'
import { table } from './schema.js';
import {v4 as uuid} from 'uuid'

const connection = await getConnection();

export const getId = async (email)=>{
    const [result] = await connection.query(`select id from ${table.users} where email=?`,[email])
    const data = result[0]
    if(data.length === 0 ) return  "data not found"
    return data[0].id
} 

export const insertData = async (username,password,email)=>{
    const id = uuid()
    if(await usernameExists(username)){
        return "Username already exists pls choose another"
    }
    await connection.query(`INSERT INTO ${table.users}(id,username,password,email) values(?,?,?,?)`,[id,username,password,email])
    return "successfully registered"
}


export const verifyUser = async (email,password)=>{
    const [result] = await connection.query(`SELECT id FROM ${table.users} WHERE email=? AND password=?`,[email,password])
    const id = result && result[0] && result[0].id
    return id    
} 