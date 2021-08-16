let f=document.getElementById('from');
function toNum(x){
    return Number(x.replace(',',''));
}
function option(x,y,z){
let o=document.createElement('option');
let t=document.createTextNode(y);
o.appendChild(t);
o.setAttribute('value',toNum(z));
x.appendChild(o);

}
for(x in data.rates)
{
   option(from,x,data.rates[x])
    
}
