document.addEventListener("DOMContentLoaded", function () {
    const auth = firebase.auth();
    const db = firebase.firestore();
    const storage = firebase.storage();

    // Verificando se o usuário está autenticado
    auth.onAuthStateChanged(user => {
        if (!user || user.email !== "dstelio207@gmail.com") {
            alert("Apenas administradores podem acessar esta página!");
            window.location.href = "index.html";
        }
    });

    const uploadForm = document.getElementById("uploadForm");

    if (uploadForm) {
        uploadForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("productName").value;
            const price = document.getElementById("productPrice").value;
            const file = document.getElementById("productImage").files[0];

            if (!file) {
                alert("Por favor, selecione uma imagem para o produto!");
                return;
            }

            // Fazendo upload da imagem para o Firebase Storage
            const storageRef = storage.ref("products/" + file.name);
            const uploadTask = storageRef.put(file);

            uploadTask.on("state_changed", function (snapshot) {
                // Aqui você pode monitorar o progresso do upload (opcional)
            }, function (error) {
                alert(error.message);
            }, function () {
                // Quando o upload for concluído, salva os dados do produto no Firestore
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    // Salvar dados no Firestore
                    db.collection("products").add({
                        name: name,
                        price: price,
                        imageUrl: downloadURL,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(function () {
                        alert("Produto adicionado com sucesso!");
                        window.location.href = "index.html";
                    }).catch(function (error) {
                        alert("Erro ao adicionar produto: " + error.message);
                    });
                });
            });
        });
    }
});