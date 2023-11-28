

 function reverse(str)
{
    let newstr = "";
    for(let i= str.length-1;i>=0;i--)
    {
        newstr += str[i];
    }
    
    return  newstr;
   
}
function print ()
{
    console.log("Reverse String.:",reverse("lokesh"));
}
setTimeout(print,2000);





