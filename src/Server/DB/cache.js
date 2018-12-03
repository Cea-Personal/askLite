import {redisClient} from 'connect'

redisClient.set('tokenid','test value', redis.print);
client.get('test key',(error, result)=>{
    if(error){
        console.log(error);
        throw error;
    }
    console.log('Result:'+ result)
})
client.quit()*/