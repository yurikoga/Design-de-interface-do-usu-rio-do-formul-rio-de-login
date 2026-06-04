document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Tentativa de login enviada!");
    
    // Animação simples de clique no botão
    const btn = document.querySelector('.btn-signin');
    btn.innerHTML = "Logging in...";
    setTimeout(() => {
        btn.innerHTML = "Sign in";
    }, 2000);
});
