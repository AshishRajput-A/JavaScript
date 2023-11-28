var a = []
for (var i=1;i<=100;i++)
{
if(i%3==0 && i%2!==0)
    {
console.log(i);
a.push(i);
    }
}
console.log(a);
