document.addEventListener("DOMContentLoaded", function () {
    const auth = firebase.auth();

    // Cadastro de usuário
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            auth.createUserWithEmailAndPassword(email, password)
                .then(() => {
                    alert("Conta criada com sucesso!");
                    window.location.href = "index.html";
                })
                .catch(error => alert(error.message));
        });
    }

    // Login de usuário
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                    alert("Login realizado!");
                    window.location.href = "index.html";
                })
                .catch(error => alert(error.message));
        });
    }

    // Logout
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            auth.signOut().then(() => {
                alert("Você saiu!");
                window.location.href = "login.html";
            });
        });
    }

    // Proteção da página de upload
    const protectedPage = document.getElementById("uploadForm");
    if (protectedPage) {
        auth.onAuthStateChanged(user => {
            if (!user || user.email !== "dstelio207@gmail.com") {
                alert("Apenas administradores podem acessar esta página!");
                window.location.href = "index.html";
            }
        });
    }
});