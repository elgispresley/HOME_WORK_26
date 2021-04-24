// document.querySelector('#h3').onclick = helloFunction
// document.querySelector('#h3').onclick = byeFunction
// document.querySelector('#h3').onclick = function(){ 
//     helloFunction();
//     byeFunction();
// }

function helloFunction () {
    console.log(this)
     console.log('hi');
}
function byeFunction () {
    console.log(this)
    console.log('bye');
}

document.querySelector('#h3').addEventListener('click', helloFunction);
document.querySelector('#h3').addEventListener('click', byeFunction);
document.querySelector('#h3').removeEventListener('click', helloFunction);

