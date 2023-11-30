var db = firebase.apps[0].firestore();
var container = firebase.apps[0].storage().ref();

const txtPDF = document.querySelector('#txtPDF');
const btnLoad = document.querySelector('#btnLoad');

btnLoad.addEventListener('click', function() {
    const archivo = txtPDF.files[0];
    if (archivo == null) {
        alert('Debe seleccionar un PDF');
    } else {
        const nomarch = archivo.name;  // Nombre del archivo
        const metadata = {
            contentType: archivo.type
        };

        const subir = container.child('documentosPDF/' + nomarch).put(archivo, metadata);
        subir
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                db.collection("PDF's_modules").add({
                    "names": nomarch,  // Usamos el nombre del archivo
                    "url": url
                }).then(function(docRef) {
                    alert("ID del registro: " + docRef.id);
                    // Llama a una función limpiar() aquí si existe.
                }).catch(function(FirebaseError) {
                    alert("Error al subir el PDF: " + FirebaseError);
                });
            });
    }
});