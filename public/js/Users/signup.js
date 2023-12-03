// JavaScript Document
// create local database firestore variable
var db = firebase.apps[0].firestore();
var auth = firebase.apps[0].auth();
var container = firebase.apps[0].storage().ref();

// create local from webpage inputs
const txtNombre = document.querySelector('#txtNombre');
const txtEmail = document.querySelector('#txtEmail');
const txtContra = document.querySelector('#txtContra');
const txtUrlPhoto = document.querySelector('#txtArchi');
const txtGradoAcademico = document.querySelector('#txtSchoolGrade');
const txtDescripcion = document.querySelector('#txtWhoAmI');

// create local insert button
const btnInsUser = document.querySelector('#btnInsUser');

// assign button listener
btnInsUser.addEventListener('click', function () {
    const archivo = txtUrlPhoto.files[0];
    const nomarch = archivo.name;
    if (archivo == null) {
        alert('Debe seleccionar una imagen');
    } else {
        const metadata = {
            contentType: archivo.type
        };
        const subir = container.child('estudents/'+ nomarch).put(archivo, metadata);
        subir.then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                // Crear usuario con email y contraseña
                auth.createUserWithEmailAndPassword(txtEmail.value, txtContra.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        // Guardar datos del usuario en Firestore
                        db.collection("datosUsuarios").add({
                            "idemp": user.uid,
                            "usuario": txtNombre.value,
                            "email": user.email,
                            "gradoAcademico": txtGradoAcademico.value,
                            "descripcion": txtDescripcion.value,
                            "urlPhoto": url
                        }).then(function (docRef) {
							alert("Usuario agregado satisfactoriamente" +docRef.id);
						}).catch(function (FirebaseError) {
							alert("Error al registrar datos del usuario." + FirebaseError);
						});
					})
					.catch((error) => {
						alert("Error al agregar el nuevo usuario: " + error.message);
					});
            });
    }
});
