var s;
for (let i =0;i<6;i++)
{
    for (let j =0;j<i;j++)
    {
         s+="*";
        
    }
    s+="\n";
}
console.log(s);


let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



var v1 = 5;
var s1 = "";
for (let i=0;i<v1;i++)
{

    for (let j=0;j<v1-i;j++)
    {
        s1 +="*";
    }
    s1+="\n";
}
console.log(s1);
