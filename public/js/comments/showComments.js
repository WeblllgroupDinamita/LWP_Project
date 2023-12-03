// JavaScript Document
// create local database firestore variable
var db = firebase.apps[0].firestore();
var auth = firebase.apps[0].auth();
var container = firebase.apps[0].storage().ref();

const txtAsunto = document.querySelector('#subject');
const txtComentario = document.querySelector('#comment');
const btnSend = document.querySelector('#sendComment')


document.addEventListener('DOMContentLoaded', function() {
const urlParam = new URLSearchParams(window.location.search);
const docId = urlParam.get('docid')
 
function cargarComentarios() {
    var commentsContainer = document.getElementById('commentsContainer');
    db.collection("comentarios") // Reemplaza con el nombre de tu colección de comentarios.
        .orderBy("timestamp", "desc") // Suponiendo que tienes un campo 'timestamp' en tus documentos.
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var commentData = doc.data();
                var commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `
                    <strong>${commentData.usuario}</strong> <span>${commentData.timestamp.toDate()}</span>
                    <p>${commentData.texto}</p>
                `;
                commentsContainer.appendChild(commentElement);
            });
            if (querySnapshot.empty) {
                commentsContainer.innerHTML = '<p>No hay comentarios aún.</p>';
            }
        })
        .catch(function(error) {
            console.log("Error al obtener los comentarios: ", error);
        });
}

cargarComentarios();

btnSend.addEventListener('click', function(){
    var docRef = firebase.firestore().collection("PDF's_modules").doc(docId)
    docRef.get().then(function(doc) {
        if (doc.exists) {
            var name = doc.data().names;
            db.collection("comments").add({
                "Asunto": txtAsunto.value,
                "Comentario": txtComentario.value,
                "PDF": name.value
            })
            .then(function(docRef){
                alert("Comentario Subido! " + docRef.id)
                window.location.href = 'ModulePDF.html';
            })
        }
        else {
        // El documento no existe.
        console.log("No such document!");
        window.location.href = 'addComment.html';

        }
})
});

});











