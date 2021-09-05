import http from "./http";

export function getAllComments(){
   return http.get('/comments')
}