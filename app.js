var div, container = document.getElementById('container')

for( let i = 0; i < 5 ; i++){
    div = document.createElement('div')
    div.className = "div"
    div.onclick = function(){
        alert('this is box #' + i)
    }
    container.appendChild(div)
}


/* document.body.innerHTML = `
<section>
 <header>
 <h1>The HTML5 Blog</h1>
 </header>
 
 <footer>
 <p>copyright ${new Date().getYear()} | The HTML5 Blog</p>
 </footer>
</section>
` */