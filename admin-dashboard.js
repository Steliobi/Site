document.addEventListener("DOMContentLoaded", function() {
    const auth = firebase.auth();

    // Verificar se o usuário está autenticado e se é o e-mail correto
    auth.onAuthStateChanged(user => {
        if (!user || user.email !== "dstelio207@gmail.com") {
            alert("Você não tem permissão para acessar o painel!");
            window.location.href = "index.html"; // Redireciona para a página inicial
        } else {
            loadProducts();
        }
    });

    // Função para carregar produtos (simulação, pode ser substituída por Firebase Firestore)
    function loadProducts() {
        const productsList = document.getElementById("productsList");
        productsList.innerHTML = "<p>Carregando produtos...</p>";

        // Aqui você deve integrar com seu banco de dados (ex: Firestore) para listar produtos
        setTimeout(() => {
            productsList.innerHTML = `
                <ul>
                    <li>Produto 1 - R$100</li>
                    <li>Produto 2 - R$150</li>
                    <li>Produto 3 - R$200</li>
                </ul>
            `;
        }, 1000); // Simulação de carregamento
    }

    // Função para adicionar um produto (simulação)
    document.getElementById("addProductBtn").addEventListener("click", function() {
        alert("Aqui você pode adicionar um produto!");
        // Aqui você pode implementar o formulário para adicionar produto
    });
});