document.addEventListener('DOMContentLoaded', () => {
    const runCodeButton = document.getElementById('run-code');
    const codeEditor = document.getElementById('code-editor');
    const output = document.getElementById('output');

    if (runCodeButton && codeEditor && output) {
        runCodeButton.addEventListener('click', () => {
            // Limpiar el contenido anterior
            output.textContent = "";

            const code = codeEditor.value;
            try {
                // Ejecutar el código dentro de una función anónima
                const result = new Function(`
                    try {
                        return (function() {
                            ${code}
                        })();
                    } catch (error) {
                        throw error;
                    }
                `)();
                
                // Mostrar el resultado en el contenedor #output
                if (result !== undefined) {
                    output.textContent = result;
                } else {
                    output.innerHTML = `
                        <p>Código ejecutado correctamente, pero no devolvió ningún valor.</p>
                        <p class="text-info">Si usaste <code>console.log</code>, revisa la consola del navegador.</p>
                    `;
                }
            } catch (error) {
                // Mostrar errores en el contenedor #output
                output.textContent = `Error: ${error.message}`;
            }
        });
    }
});