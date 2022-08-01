const CheckisNan=(x) =>{
  const notanum=x
  
  if (isNaN(notanum)){
    alert("enter a numeric value") 
    return (true)
}else{
    return (false)
}
}
export default CheckisNan