// JavaScript Document
			// create local database firestore variable
			var db = firebase.apps[0].firestore();
			var auth = firebase.apps[0].auth();

			// create local from webpage inputs
			const txtNombre = document.querySelector('#txtNombre');
			const txtSchoolGrade = document.querySelector('#txtSchoolGrade');
			const txtWhoIAm = document.querySelector('#txtWhoAmI');
			const txtImage = document.querySelector('#txtArchi');
			const txtEmail = document.querySelector('#txtEmail');
			const txtContra = document.querySelector('#txtContra');

			// create local insert button
			const btnInsUser = document.querySelector('#btnInsUser');

			// assign button listener
			btnInsUser.addEventListener('click', function () {
				auth.createUserWithEmailAndPassword(txtEmail.value, txtContra.value)
					.then((userCredential) => {
						const archivo = txtImage.files[0];
						const nomarch = archivo.name;
						if(archivo == null){
							alert('Debe seleccionar una imagen');
						}
						else{
							const metadata = {
								contentType : archivo.type
							}
						
						const user = userCredential.user;
						const subir = container.child('estudents/'+nomarch).put(archivo, metadata);
						
						subir.then(snapshot => snapshot.ref.getDownloadURL())
						.then( url =>{
							db.collection("datosUsuarios").add({
								"idemp": user.uid,
								"usuario": txtNombre.value,
								"email": user.email, 
								"SchoolGrade": txtSchoolGrade.value,
								"WhoAmI": txtWhoIAm.value,
								"url": url
							}).then(function (docRef) {
								alert("Usuario agregado satisfactoriamente");
								limpiar();
							}).catch(function (FirebaseError) {
								alert("Error al registrar datos del usuario." + FirebaseError);
							});
					})
					.catch((error) => {
						alert("Error al agregar el nuevo usuario: " + error.message);
					});
				}
					
			});
			
			function limpiar(){
				txtNombre.value = '';
				txtEmail.value = '';
				txtContra.value = '';
				txtNombre.focus();
			}
		})