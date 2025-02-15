// public/js/auth.js
document.addEventListener('DOMContentLoaded', async () => {
    // Espera a que Firebase se inicialice
    while (!window.auth || !window.onAuthStateChanged) {
      await new Promise(resolve => setTimeout(resolve, 100)); // Espera 100ms y verifica nuevamente
    }
  
    const googleLoginButton = document.getElementById('google-login');
    const githubLoginButton = document.getElementById('github-login');
  
    // Inicio de sesión con Google
    if (googleLoginButton) {
      googleLoginButton.addEventListener('click', async () => {
        const provider = new window.GoogleAuthProvider();
        try {
          const result = await window.signInWithPopup(window.auth, provider);
          console.log("Usuario logueado:", result.user);
          alert(`Bienvenido, ${result.user.displayName}`);
          updateUI(result.user); // Actualiza la interfaz
          window.location.href = "/";
        } catch (error) {
          console.error("Error al iniciar sesión:", error);
          alert("Hubo un error al iniciar sesión.");
        }
      });
    }
  
    // Inicio de sesión con GitHub
    if (githubLoginButton) {
      githubLoginButton.addEventListener('click', async () => {
        const provider = new window.GithubAuthProvider();
        try {
          const result = await window.signInWithPopup(window.auth, provider);
          console.log("Usuario logueado:", result.user);
          alert(`Bienvenido, ${result.user.displayName}`);
          updateUI(result.user); // Actualiza la interfaz
          window.location.href = "/";
        } catch (error) {
          console.error("Error al iniciar sesión:", error);
          alert("Hubo un error al iniciar sesión.");
        }
      });
    }
  
    // Verificar el estado del usuario después de cargar Firebase
    window.onAuthStateChanged((user) => {
      if (user) {
        console.log("Usuario autenticado:", user);
        updateUI(user); // Actualiza la interfaz si ya está logueado
      } else {
        resetUI(); // Restablece la interfaz si no hay usuario
      }
    });
  
    // Función para actualizar la interfaz
    function updateUI(user) {
      const userInfo = document.getElementById('user-info');
      const loginSection = document.getElementById('login-section');
      userInfo.classList.remove('d-none');
      loginSection.style.display = 'none';
      document.getElementById('user-name').textContent = user.displayName || user.email;
    }
  
    // Función para restablecer la interfaz
    function resetUI() {
      const userInfo = document.getElementById('user-info');
      const loginSection = document.getElementById('login-section');
      userInfo.classList.add('d-none');
      loginSection.style.display = 'block';
    }
  });