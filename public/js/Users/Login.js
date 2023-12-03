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
btnGoogle.addEventListener('click', e=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result =>{
            const user = result.user;
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const accessToken = credential.accessToken;
            alert("Welcome " + user.displayName)
            document.location.href = 'AllModules.html';
        })
        .catch(err =>{
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorMessage +"Code "+ errorCode);
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
})


//Auth With facebook
btnFacebook.addEventListener('click', e=>{
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(result =>{
            const user = result.user;
            // const credential = FacebookAuthProvider.credentialFromResult(result);
            // const accessToken = credential.accessToken;
            alert("Welcome " + user.displayName)
            document.location.href = 'AllModules.html';
        })
        .catch(err =>{
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorMessage + "Code: " + errorCode);
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
        })



})


