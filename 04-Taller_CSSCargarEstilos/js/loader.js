// ============================================
// LOADER.JS - Lógica de Carga Dinámica de CSS
// ============================================

console.log('🎨 Loader.js cargado correctamente');

// ============================================
// 1. ACTIVAR PRELOAD (Convertir preload a stylesheet)
// ============================================

function activatePreloadCSS() {
    console.log('⚡ Activando CSS precargado...');
    
    const preloadLink = document.getElementById('preload-style');
    
    if (preloadLink) {
        // Cambiar rel de "preload" a "stylesheet" para aplicar los estilos
        preloadLink.rel = 'stylesheet';
        
        // Actualizar el indicador visual
        const indicator = document.querySelector('.preload-indicator');
        if (indicator) {
            indicator.classList.add('active');
            indicator.textContent = '✓ Estilos precargados activados exitosamente';
        }
        
        // Mostrar mensaje de éxito
        setTimeout(() => {
            alert('✅ Estilos precargados activados!\nEl archivo CSS ya estaba descargado (preload) y ahora se aplica instantáneamente.');
        }, 100);
        
        console.log('✓ CSS precargado activado');
    } else {
        console.error('❌ No se encontró el elemento preload-style');
    }
}

// ============================================
// 2. CARGAR TEMA OSCURO DINÁMICAMENTE
// ============================================

let darkThemeLoaded = false;

function loadDarkTheme() {
    console.log('🌙 Cargando tema oscuro...');
    
    if (darkThemeLoaded) {
        // Si ya está cargado, solo alternar la clase
        document.body.classList.toggle('dark-theme');
        
        // Alternar el indicador
        const indicator = document.querySelector('.dark-theme-indicator');
        if (indicator) {
            indicator.remove();
        } else {
            showDarkThemeIndicator();
        }
        
        console.log('🔄 Tema oscuro alternado');
        return;
    }
    
    // Crear elemento <link> dinámicamente
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/theme-dark.css';
    link.id = 'dark-theme-link';
    
    // Evento cuando se carga el CSS
    link.onload = () => {
        console.log('✓ Tema oscuro cargado exitosamente');
        document.body.classList.add('dark-theme');
        darkThemeLoaded = true;
        
        // Mostrar indicador
        showDarkThemeIndicator();
        
        // Mensaje de éxito
        setTimeout(() => {
            alert('🌙 Tema oscuro cargado!\nSe creó un nuevo elemento <link> y se inyectó en el <head>.');
        }, 100);
    };
    
    link.onerror = () => {
        console.error('❌ Error al cargar theme-dark.css');
        alert('❌ Error al cargar el tema oscuro');
    };
    
    // Insertar en el <head>
    document.head.appendChild(link);
    console.log('📥 Elemento <link> para tema oscuro insertado en <head>');
}

function showDarkThemeIndicator() {
    // Crear indicador visual
    const indicator = document.createElement('div');
    indicator.className = 'dark-theme-indicator';
    indicator.textContent = 'Tema Oscuro Activo';
    document.body.appendChild(indicator);
}

// ============================================
// 3. CARGAR CSS CON FETCH Y INYECTAR COMO <style>
// ============================================

let textSnippetLoaded = false;

function loadCSSWithFetch() {
    console.log('🚀 Cargando CSS con Fetch API...');
    
    if (textSnippetLoaded) {
        alert('ℹ️ Los estilos ya fueron cargados previamente.');
        return;
    }
    
    // Usar Fetch API para descargar el CSS como texto
    fetch('css/text-snippet.css')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(cssText => {
            console.log('✓ CSS descargado como texto:', cssText.substring(0, 100) + '...');
            
            // Crear elemento <style> y agregar el CSS
            const styleElement = document.createElement('style');
            styleElement.id = 'fetched-styles';
            styleElement.textContent = cssText;
            
            // Insertar en el <head>
            document.head.appendChild(styleElement);
            
            console.log('✓ CSS inyectado como <style> en el DOM');
            textSnippetLoaded = true;
            
            // Actualizar la interfaz
            const container = document.getElementById('fetch-demo-container');
            if (container) {
                container.innerHTML = `
                    <div class="fetch-loaded-box">
                        ¡Estilos cargados con Fetch API!
                    </div>
                    <div class="fetch-success-message">
                        El archivo CSS fue descargado como texto y ahora está inyectado en un elemento &lt;style&gt; en el DOM.
                    </div>
                `;
            }
            
            // Mensaje de éxito
            setTimeout(() => {
                alert('🚀 Estilos cargados con Fetch!\nEl CSS fue descargado como texto y se inyectó en un nuevo elemento <style>.');
            }, 100);
        })
        .catch(error => {
            console.error('❌ Error al cargar CSS con fetch:', error);
            alert('❌ Error al cargar el CSS con Fetch API.\nAsegúrate de estar ejecutando con un servidor HTTP (npm start).');
        });
}

// ============================================
// 4. VISTA PREVIA DE IMPRESIÓN
// ============================================

function showPrintPreview() {
    console.log('🖨️ Abriendo vista previa de impresión...');
    
    // Mostrar información
    alert('📄 Vista de Impresión\n\nLos estilos de print.css se aplicarán cuando uses Ctrl+P o Cmd+P.\n\nObserva cómo cambia el diseño para optimizar la impresión.');
    
    // Abrir diálogo de impresión
    window.print();
}

// ============================================
// 5. INICIALIZACIÓN Y EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM cargado - Inicializando event listeners');
    
    // Botón para activar preload
    const btnActivatePreload = document.getElementById('btn-activate-preload');
    if (btnActivatePreload) {
        btnActivatePreload.addEventListener('click', activatePreloadCSS);
        console.log('✓ Event listener agregado: btn-activate-preload');
    }
    
    // Botón para cargar tema oscuro
    const btnLoadDarkTheme = document.getElementById('btn-load-dark-theme');
    if (btnLoadDarkTheme) {
        btnLoadDarkTheme.addEventListener('click', loadDarkTheme);
        console.log('✓ Event listener agregado: btn-load-dark-theme');
    }
    
    // Botón para cargar CSS con Fetch
    const btnLoadWithFetch = document.getElementById('btn-load-with-fetch');
    if (btnLoadWithFetch) {
        btnLoadWithFetch.addEventListener('click', loadCSSWithFetch);
        console.log('✓ Event listener agregado: btn-load-with-fetch');
    }
    
    // Botón para vista previa de impresión
    const btnPrintPreview = document.getElementById('btn-print-preview');
    if (btnPrintPreview) {
        btnPrintPreview.addEventListener('click', showPrintPreview);
        console.log('✓ Event listener agregado: btn-print-preview');
    }
    
    console.log('🎉 Todos los event listeners configurados correctamente');
});

// ============================================
// 6. UTILIDADES Y HELPERS
// ============================================

// Función para verificar si un archivo CSS está cargado
function isCSSLoaded(href) {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    for (let link of links) {
        if (link.href.includes(href)) {
            return true;
        }
    }
    return false;
}

// Función para listar todos los archivos CSS cargados
function listLoadedCSS() {
    console.log('📋 Listando archivos CSS cargados:');
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach((link, index) => {
        console.log(`  ${index + 1}. ${link.href}`);
    });
    
    const styles = document.querySelectorAll('style');
    console.log(`📋 Elementos <style> en el DOM: ${styles.length}`);
}

// Exponer funciones globalmente para debugging
window.cssLoader = {
    activatePreloadCSS,
    loadDarkTheme,
    loadCSSWithFetch,
    showPrintPreview,
    isCSSLoaded,
    listLoadedCSS
};

console.log('🔧 Funciones expuestas en window.cssLoader para debugging');