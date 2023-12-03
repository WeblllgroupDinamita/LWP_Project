document.addEventListener('DOMContentLoaded', (event) => {
    var db = firebase.apps[0].firestore();

    const divPDFs = document.querySelector('#divPDFs');
    divPDFs.style.display = 'flex';  // Set display property to flex
    divPDFs.style.flexWrap = 'wrap';  // Allow items to wrap to the next row
    divPDFs.style.justifyContent = 'space-between';  // Center align items horizontally with space between

    function cargarPDFs() {
        db.collection("PDF's_modules").get().then((querySnapshot) => {
            let pdfCount = 0;

            querySnapshot.forEach((doc) => {
                var datos = doc.data();
                var nombre = datos.names;
                var url = datos.url;

                var cardElement = document.createElement('div');
                cardElement.setAttribute('data-doc-id', doc.id);
                cardElement.classList.add('card');
                cardElement.style.width = 'calc(25% - 10px)';  // Adjust width for four items with space in between
                cardElement.style.marginBottom = '10px';  // Optional margin between cards
                cardElement.innerHTML = `
                    <iframe src="${url}" class="card-img-top" style="width: 100%; height: 200px;"></iframe>
                    <div class="SelectedPDF" class="card-body text-center" style="height: 100px;"> <!-- Set the height of card-body -->
                        <p class="card-text">${nombre}</p>
                        <a href="${url}" download="${nombre}" class="btn btn-primary rounded-4" style="background-color: #6d20b9;">Visualizar</a>
                    </div>
                `;

                divPDFs.appendChild(cardElement);
                pdfCount++;

                // Display four PDFs per row
                if (pdfCount % 4 === 0) {
                    var spacerElement = document.createElement('div');
                    spacerElement.style.flexBasis = '100%';  // Start a new row after every fourth item
                    divPDFs.appendChild(spacerElement);
                }
                // Añadir evento de clic
                cardElement.querySelector('.SelectedPDF').addEventListener('click', function() {
                    var docId = this.parentNode.getAttribute('data-doc-id');
                    window.location.href = `addComment.html?docid=${docId}`; // Redireccionar a la página de comentarios con el id del documento
                });
            });
            
        }).catch(function(error) {
            console.log("Error al obtener los documentos: ", error);
        });
    }

    cargarPDFs();
});