module.exports = optins=>{
    return async function adminauth(ctx,next){
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body={data:'nologin'}
        }
    }
}