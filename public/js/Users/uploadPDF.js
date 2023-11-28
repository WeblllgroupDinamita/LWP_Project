var db = firebase.apps[0].firestore();
var container = firebase.apps[0].storage().ref();

const txtPDF = document.querySelector('#txtPDF');
const btnLoad  = document.querySelector('#btnLoad');

btnLoad.addEventListener('click', function(){
    const archivo = txtPDF.files[0];
    const nomarch = archivo.name;
    if(archivo == null){
        alert('Debe seleccionar una pdf');
    }else{
        const metadata = {
            contentType : archivo.type
        }
        const subir = container.child('documentosPDF/'+nomarch).put(archivo, metadata);
        subir
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then( url =>{
                db.collection("PDF's_modules").add({
                    "Id" : parseInt(Id.value),
                    "names" : names.value,
                    "url"   : url
                }).then(function(docRef) {
                    alert("ID del registro: " + docRef.id);
                    limpiar();
                }).catch(function(FirebaseError) {
                    alert("Error al subir el PDF: " + FirebaseError);
                });
            });
    }
});