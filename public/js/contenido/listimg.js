var db = firebase.apps[0].firestore();
const tabla = document.querySelector('#tabla');

db.collection("datosImg").orderBy('posic', 'asc').get().then(function(query){
	tabla.innerHTML="";
	var salida = "";
	query.forEach(function(doc){
		salida += '<div class="divAnuncio m-3">'
			salida += '<div class="imgBlock"><img src="' + doc.data().url +'" width="10%" /></div>'
			salida += '<div>'+ doc.data().descrip + '</div><br/>'
		salida += '</div>'
	})
	tabla.innerHTML = salida;
			})