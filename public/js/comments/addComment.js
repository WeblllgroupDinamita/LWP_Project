// JavaScript Document
// create local database firestore variable
var db = firebase.apps[0].firestore();
var auth = firebase.apps[0].auth();
var container = firebase.apps[0].storage().ref();


const txtAsunto = document.querySelector('#subject');
const txtComentario = document.querySelector('#comment');


document.addEventListener("DOMContentLoaded", function(){
    const urlParam = new URLSearchParams(window.location.search);
    const docId = urlParam.get('ID')

    var docRef = firebase.firestore().collection("PDF's_modules").doc(docId)
    docRef.get().then(function(doc) {
        if (doc.exists) {
        var name = doc.data().names;
        var acceptButton = document.getElementById('sendComment');
        if (acceptButton) {
            acceptButton.addEventListener('click', function() {
                db.collection("comments").add({
                    "Asunto": txtAsunto.value,
                    "Comentario": txtComentario.value,
                    "PDF": name.value
                })
                .then(function(){
                    alert
                    window.location.href = 'englishModule.html';
                })
            });
        }
        } else {
        // El documento no existe.
        console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    


})