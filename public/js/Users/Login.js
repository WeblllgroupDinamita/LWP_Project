// JavaScript Document
// create local database firestore variable
var db = firebase.apps[0].firestore();
var auth = firebase.apps[0].auth();


const txtEmail = document.querySelector('#txtEmail');
const txtContra = document.querySelector('#txtContra');

// create local insert button
const btnLogin = document.querySelector('#btnLogin');
const btnGoogle = document.querySelector('#googleSign');
const btnFacebook = document.querySelector('#facebookLogin');


// assign button listener
btnLogin.addEventListener('click', function () {
    auth.signInWithEmailAndPassword(txtEmail.value, txtContra.value)
        .then((userCredential) => {
            const user = userCredential.user;
            const dt = new Date();
            db.collection("datosUsuarios").where('idemp', '==', user.uid).get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // Aquí se guarda la URL de la foto en el almacenamiento local
                        // localStorage.setItem('userPhotoURL', doc.data().urlPhoto);
                        // localStorage.setItem('userName', doc.data().usuario);
                        doc.ref.update({ultAcceso: dt}).then(function () {
                            // document.getElementById('userName').textContent = doc.data().usuario;
                            // Redirección a 'index.html' después de guardar la URL de la foto
                            document.location.href = 'AllModules.html';
                        });
                    });
                })
                .catch(function (FirebaseError) {
                    Swal.fire({
                        title: 'Error',
                        text: 'Error al actualizar datos del usuario: ' + FirebaseError,
                        icon: 'error'
                    });
                });
        })
        .catch((error) => {
			Swal.fire({
                title: 'Error',
                text: 'Error de acceso al usuario: ' + error.message,
                icon: 'error'
            });
        });
});

//Auth With google
btnGoogle.addEventListener('Click', e=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result =>{
            console.log("Google Sign in")
            console.log(result)

        })
        .catch(err =>{
            console.log(err)
        })
})


//Auth With facebook
btnFacebook.addEventListener('Click', e=>{
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(resutl =>{
            console.log("Facebook Sign in")
            console.log(result)

        })
        .catch(err =>{
            console.log(err)
        })



})


