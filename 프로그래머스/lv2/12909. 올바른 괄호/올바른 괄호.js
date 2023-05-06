function solution(s){
    let stack = 0;
    
    if (s[0] == ")" || s.length % 2 !== 0 || s[s.length - 1] === "(") return false;
     
    for (const char of s) {
        char === '(' ? stack++ : stack--;
        if (stack < 0) {
            return false;
        }
    }
    return !stack;
}