export const handleError = (status, message)=>
{
   const error = new Error()
   error.status = 404;
   error.message = message
   return error
}