var db = firebase.apps[0].firestore();

const txtPosic = document.querySelector('#txtPosic');
const txtDescrip = document.querySelector('#txtDescrip');


db.collection("datosImg").get().then(function(query){
    var des = "";
	query.forEach(txtPosic)(function(doc){
        des += doc.data().descrip
	})
    txtDescrip.value = des;
    txtPosic.focus();
    })