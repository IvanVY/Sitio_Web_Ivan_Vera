// public/js/user-info.js
document.addEventListener('DOMContentLoaded', () => {
    // Espera a que Firebase se inicialice
    while (!window.auth) {
      console.log("Esperando inicialización de Firebase...");
    }
  
    // Verificar el estado del usuario
    window.onAuthStateChanged((user) => {
      const userInfo = document.getElementById('user-info');
      const loginSection = document.getElementById('login-section');
      const logoutBtn = document.getElementById('logout-btn');
  
      if (user) {
        // Usuario autenticado
        console.log("Usuario autenticado:", user);
        document.getElementById('user-name').textContent = user.displayName || user.email;
        userInfo.classList.remove('d-none');
        loginSection.style.display = 'none';
  
        // Manejar cierre de sesión
        if (logoutBtn) {
          logoutBtn.addEventListener('click', async () => {
            try {
              await window.signOut(window.auth);
              console.log("Sesión cerrada");
              window.location.href = "/login.html";
            } catch (error) {
              console.error("Error al cerrar sesión:", error);
            }
          });
        }
      } else {
        // Usuario no autenticado
        userInfo.classList.add('d-none');
        loginSection.style.display = 'block';
      }
    });
  });