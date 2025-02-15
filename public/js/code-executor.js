// public/js/code-executor.js
document.addEventListener('DOMContentLoaded', () => {
    const runCodeButton = document.getElementById('run-code');
    const codeEditor = document.getElementById('code-editor');
    const output = document.getElementById('output');
  
    if (runCodeButton && codeEditor && output) {
      runCodeButton.addEventListener('click', () => {
        output.textContent = "";
        const code = codeEditor.value;
  
        try {
          const result = new Function(code)();
          if (result !== undefined) {
            output.textContent = result;
          } else {
            output.innerHTML = `
              <p>Código ejecutado correctamente, pero no devolvió ningún valor.</p>
              <p class="text-info">Si usaste <code>console.log</code>, revisa la consola del navegador.</p>
            `;
          }
        } catch (error) {
          output.textContent = `Error: ${error.message}`;
        }
      });
    }
  });