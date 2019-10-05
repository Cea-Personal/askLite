import pg from 'pg'
import dotenv from 'dotenv';
import redis from 'redis';
import {execFile} from 'child_process'



dotenv.config();

execFile('redis/redis-server.exe',(error,stdout)=>{
  if(error){
    throw error
  }
  console.log(stdout)
})


const client = new pg.Client({
  connectionString:process.env.postgresURL
})

client.connect().then(() => {
  console.log('Connection Successful.');
}).catch((error) => {
  console.log('Connection Not Successful.',error);
});

export const redisClient = redis.createClient()
redisClient.on('connect',()=>{
  console.log('Redis client connected')
});
redisClient.on('error', (error)=>{
  console.log('Redis not connected', error)
});
export default client