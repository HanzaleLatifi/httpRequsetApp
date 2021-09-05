import http from "./http";

export function deleteComment(commentId){
    return http.delete(`/comments/${commentId}`)
}