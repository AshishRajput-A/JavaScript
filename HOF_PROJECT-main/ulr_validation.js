/*const url= "https://pwskills.com/ashish%1234rajput";
const weburl = url.replace(/%\d\d\d\d/,"");
console.log(weburl);*/

function isValidURL(str) {
    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str) || /^(http:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
         console.log('YES');
     } else {
         console.log('NO');
     }
 }
   
 isValidURL("http://www.geeksforgeeks.org");
  