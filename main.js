function change()  {
    let square1 = document.getElementsByClassName('square')[0];
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    square1.style.backgroundColor = '#' +randomColor;
    // square1.style.top= Math.floor(Math.random() * 101); +'px'
    console.log(square1.style.top= Math.floor(Math.random() * 200) +'px')
    
    console.log(square1.style.left= Math.floor(Math.random() * 200) +'px')
    console.log('change is good')
};
setInterval(change, 3000);



