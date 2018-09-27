 export const setCookie =(req,res)=>{
  res.cookie ('userCookie','basil',{
    domain:'localhost:8080/api/v1',
    maxAge: 90000,
    httpOnly: true }).send(
    'cookie is set'
    )
}
export const clearCookie =(req,res)=>{
  clearCookie('userCookie');
  res.send('cookie is cleared')
}