var e1 = 'https://ok.ru/videoembed/2186885991119';
var e2 = 'https://ok.ru/videoembed/2186884025039';
var e3 = 'https://ok.ru/videoembed/2189621988047';
var e4 = 'https://ok.ru/videoembed/2267187972815';
var e5 = 'https://ok.ru/videoembed/2267187776207';
var e6 = 'https://ok.ru/videoembed/2267187841743';
var e7 = 'https://ok.ru/videoembed/2267188038351';
var e8 = 'https://ok.ru/videoembed/2267187907279';
var e9 = 'https://ok.ru/videoembed/2189622184655';
var e10 = 'https://ok.ru/videoembed/2267188103887';
var e11 = 'https://ok.ru/videoembed/2186885860047';
var e12 = 'https://ok.ru/videoembed/2186885466831';
var e13 = 'https://ok.ru/videoembed/2186885335759';
var e14 = 'https://ok.ru/videoembed/2186884942543';
var e15 = 'https://ok.ru/videoembed/2186885139151';
var e16 = 'https://ok.ru/videoembed/2186885925583';
var e17 = 'https://ok.ru/videoembed/2186884877007';
var e18 = 'https://ok.ru/videoembed/2186433923791';
var e19 = 'https://ok.ru/videoembed/2186434448079';
var e20 = 'https://ok.ru/videoembed/2186434513615';
var e21 = 'https://ok.ru/videoembed/2186434644687';
var e22 = 'https://ok.ru/videoembed/2411239836367';
var e23 = 'https://ok.ru/videoembed/2186434906831';
var e24 = 'https://ok.ru/videoembed/2186435037903';
var e25 = 'https://ok.ru/videoembed/2186435168975';
var e26 = 'https://ok.ru/videoembed/2186435300047';
var e27 = 'https://ok.ru/videoembed/2186435365583';
var e28 = 'https://ok.ru/videoembed/2186435234511';

document.getElementById('toggle-right').addEventListener('click',main);
document.getElementById('toggle-left').addEventListener('click',main);
var i =1;
var counter = i;
function main(){
     
    if (this.id == 'toggle-right'){
        next_ep();
    }
    else if (this.id=='toggle-left') {
        prev_ep();
    }
    
function next_ep(){

    counter++;
    console.log(counter);
    document.getElementById("episode-text").innerText= 'Dirilis Ertugul Episode#'+counter;    
}
function prev_ep(){

    counter--;
    console.log(counter);
    document.getElementById("episode-text").innerText= 'Dirilis Ertugul Episode#'+counter;    
    
}
if (counter==1){
document.getElementById('MyIframe').src= e1;
}
else if (counter==2){
    document.getElementById('MyIframe').src= e2;
}
else if (counter == 3){
    document.getElementById('MyIframe').src= e3;
}
else if (counter == 4){
    document.getElementById('MyIframe').src
= e4 ;   
}
else if (counter == 5){
    document.getElementById('MyIframe').src
= e5 ;   
}
else if (counter == 6){
    document.getElementById('MyIframe').src
= e6 ;   
}

else if (counter == 7){
    document.getElementById('MyIframe').src
= e7 ;   
}
else if (counter == 8){
    document.getElementById('MyIframe').src
= e8 ;   
}
else if (counter == 9){
    document.getElementById('MyIframe').src
= e9 ;   
}
else if (counter == 10){
    document.getElementById('MyIframe').src
= e10 ;   
}
else if (counter == 11){
    document.getElementById('MyIframe').src
= e11 ;   
}

else if (counter == 12){
    document.getElementById('MyIframe').src
= e12 ;   
}
else if (counter == 13){
    document.getElementById('MyIframe').src
= e13 ;   
}
else if (counter == 14){
    document.getElementById('MyIframe').src
= e14 ;   
}
else if (counter == 15){
    document.getElementById('MyIframe').src
= e15 ;   
}
else if (counter == 16){
    document.getElementById('MyIframe').src
= e16 ;   
}

else if (counter == 17){
    document.getElementById('MyIframe').src
= e17 ;   
}
else if (counter == 18){
    document.getElementById('MyIframe').src
= e18 ;   
}
else if (counter == 19){
    document.getElementById('MyIframe').src
= e19 ;   
}
else if (counter == 20){
    document.getElementById('MyIframe').src
= e20 ;   
}
else if (counter == 21){
    document.getElementById('MyIframe').src
= e21 ;   
}
else if (counter == 22){
    document.getElementById('MyIframe').src
= e22 ;   
}

else if (counter == 23){
    document.getElementById('MyIframe').src
= e23 ;   
}
else if (counter == 24){
    document.getElementById('MyIframe').src
= e24 ;   
}
else if (counter == 25){
    document.getElementById('MyIframe').src
= e25 ;   
}
else if (counter == 26){
    document.getElementById('MyIframe').src
= e26 ;   
}

else if (counter == 27){
    document.getElementById('MyIframe').src
= e27 ;   
}
else if (counter == 28){
    document.getElementById('MyIframe').src
= e28 ;   
}

}








