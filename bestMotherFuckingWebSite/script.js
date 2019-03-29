setTimeout(function(){ 
	if(confirm("Veux tu aller sur xxxvidsxxx ?")){
	window.location.href = "http://www.youtube.com/watch?v=dQw4w9WgXcQ"	
}
}, 1000);

let a = document.getElementsByTagName('body');
a = a[0];
let b = document.createElement('input');
b.type = 'submit';
b.value = 'mode psychédélique';
a.insertBefore(b, a.firstChild);
a.style.backgroundColor = 'white'

let c = document.getElementsByTagName('p');
let d = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
let i = 0;
b.addEventListener('click', function(){ 
	if(i===0){
		a.style.backgroundColor = 'magenta'
		for(let k = 0; k<c.length; k++){
			c[k].style.color = 'blue';
			c[k].style.fontFamily = 'monPapyrus';
		}
		for(let k = 0; k< d.length; k++){
			d[k].style.color = 'green';
			d[k].style.fontFamily = 'monComic';
		}
		i=1;
	}
	else{
		a.style.backgroundColor = 'white'
		for(let k = 0; k<c.length; k++){
			c[k].style.color = 'black';
			c[k].style.fontFamily = 'serif';
		}
		for(let k = 0; k < d.length; k++){
			d[k].style.color = 'black';
			d[k].style.fontFamily = 'serif';
		}
		i=0;
	}
});

