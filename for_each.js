/*------forEach--------
var sum = 0;
var obj = [1,2,3];
var item;
obj.forEach (function(item) {
  console.log(item);
});
*/
/* ------ for in---------
var sum = 0;
var obj = [1,2,3];
var item;
for ( item in obj)
{
  console.log(obj[item]); //values
  console.log(item);        //index
};*/
//------for of-----------
/*var sum = 0;
var obj = [1,2,3,4];
var item;
for ( item of obj)
{
  console.log(obj[item]); //values 2 3 4 undefined
  console.log(item);        //values
};  pm2 clusters  http response get post
*/
////////////// ----------2 D array ----------------
/*var items = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(items[0][0]); // 1
console.log(items);*/
////////////// server created  ///////////////////
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());

app.get('/', function(request,response){
        
    var obj = {"item1":'value1', "item2":"value2"};
    var txt=" ";
    for(var x in obj)
    {
        txt += obj[x]+ " " ; // values
    }
    response.send(txt);
}
);

app.listen(3000);
console.log('server running at:3000');