// ==============================
// LOGIN
// ==============================

const loginForm = document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {

            alert("Preencha todos os campos.");
            return;
        }

        

      window.location.href = "loading.html?pagina=telaincial.html";
    });

}

// ==============================
// CADASTRO - CONTINUE COM E-MAIL
// ==============================

const emailButton = document.getElementById("email-button");
const emailForm = document.getElementById("email-form");

if (emailButton && emailForm) {

    emailButton.addEventListener("click", function() {

        console.log("Botão Continue com o e-mail funcionando!");

        emailButton.style.display = "none";

        emailForm.style.display = "block";

    });

}
// ==============================
// CADASTRO - CRIAR CONTA
// ==============================

const criarContaButton = document.getElementById("criar-conta");

if (criarContaButton) {

    criarContaButton.addEventListener("click", function() {

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmar-senha").value;


        // Verificar campos vazios

        if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {

            alert("Preencha todos os campos.");

            return;
        }


        // Verificar se as senhas são iguais

        if (senha !== confirmarSenha) {

            alert("As senhas não são iguais.");

            return;
        }


        // Criar objeto do usuário

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };


        // Salvar usuário no navegador

        localStorage.setItem("usuario", JSON.stringify(usuario));


        // Mensagem de sucesso

        alert("Conta criada com sucesso!");

    });

}
// ==============================
// CURTIR PUBLICAÇÃO
// ==============================

const curtir = document.getElementById("curtir");

if (curtir) {

    curtir.addEventListener("click", function () {

        if (curtir.textContent === "♡") {
            curtir.textContent = "♥";
        } else {
            curtir.textContent = "♡";
        }

    });

}


// ==============================
// COMPARTILHAR
// ==============================

const compartilhar = document.getElementById("compartilhar");

if (compartilhar) {

    compartilhar.addEventListener("click", function () {

        alert("Publicação compartilhada!");

    });

}


// ==============================
// TUTORIAL
// ==============================

const tutorial = document.getElementById("tutorial");

if (tutorial) {

    tutorial.addEventListener("click", function () {

        alert("Aqui aparecerá o tutorial do artesanato.");

    });

}
// ==============================
// LOADING
// ==============================

const paginaDestino = new URLSearchParams(window.location.search).get("pagina");

if (paginaDestino) {

    setTimeout(function() {

        window.location.href = paginaDestino;

    }, 2000);

}
// ==============================
// BOTÃO VER TUTORIAL
// ==============================

const botaoTutorial = document.querySelector(".botao-tutorial");

if (botaoTutorial) {

    botaoTutorial.addEventListener("click", function() {

        window.location.href = "loading.html?pagina=tutoriais.html";

    });

}

