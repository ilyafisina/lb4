exports.fibi = function (n,m) {
var sum = n, i, str, arr=[];
for( i=n; i<m; i++) {
if( arr.length > 1) sum += arr[ arr.length-2];
arr.push( sum);
}
str = arr.filter(function(i) {
return i <= m;
});
console.log(str);
}
