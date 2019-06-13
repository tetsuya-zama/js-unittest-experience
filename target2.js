/*global localStorage */
function setCache(key,obj){
    localStorage.setItem(key, JSON.stringify(obj));
}
 
 
function getCache(key){
    return JSON.parse(localStorage.getItem(key));
}

//↑のテスタビリティを強化↓
//YOUR CODE HERE



//exportsもどうなるか自分で考えてみよう
//exports.XXX