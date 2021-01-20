function storeUsers(arr) {
const answer =[[],[]];
arr.forEach(user=>answer[user.id%2].push(user));
return answer;
}