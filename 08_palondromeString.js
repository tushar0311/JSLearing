function palindrome(str){
    var l = str.length ;
    for(var i = 0;i < l/2;i++){
      if (str[i] !== str[l - 1 - i]) {
            return false ;
        }
      }
       return true;
      
}
function isPalindrome(str){
    var result = palindrome(str);
    if(result == true){
         console.log(`The string "${str}" is palindrome`);}
    else
    {
     console.log(`The string "${str}" is not a palindrome`);
    }
}
isPalindrome("madam");
isPalindrome("arsa")


