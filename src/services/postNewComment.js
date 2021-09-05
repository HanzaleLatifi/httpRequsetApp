import http from "./http";
export function postNewComment(data){
    return http.post("/comments",data)
}