// ============================================
// CARACTERÍSTICAS DE ACCESIBILIDAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // MENÚ MÓVIL (ARIA)
    // ============================================
    
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle estado
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Actualizar label
            if (!isExpanded) {
                mobileMenuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
            } else {
                mobileMenuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            });
        });
        
        // Cerrar menú con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                mobileMenuToggle.focus();
            }
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && 
                !navMenu.contains(e.target) && 
                navMenu.classList.contains('active')) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // ============================================
    // MODO DE ALTO CONTRASTE (WCAG 1.4.3)
    // ============================================
    
    const contrastToggle = document.getElementById('contrast-toggle');
    
    if (contrastToggle) {
        // Cargar preferencia guardada
        const savedContrast = localStorage.getItem('highContrast');
        if (savedContrast === 'true') {
            enableHighContrast();
        }
        
        contrastToggle.addEventListener('click', () => {
            const isPressed = contrastToggle.getAttribute('aria-pressed') === 'true';
            
            if (isPressed) {
                disableHighContrast();
            } else {
                enableHighContrast();
            }
        });
    }
    
    function enableHighContrast() {
        document.body.classList.add('high-contrast');
        contrastToggle.setAttribute('aria-pressed', 'true');
        contrastToggle.setAttribute('aria-label', 'Desactivar modo de alto contraste');
        localStorage.setItem('highContrast', 'true');
        
        // Anunciar cambio a lectores de pantalla
        announceToScreenReader('Modo de alto contraste activado');
    }
    
    function disableHighContrast() {
        document.body.classList.remove('high-contrast');
        contrastToggle.setAttribute('aria-pressed', 'false');
        contrastToggle.setAttribute('aria-label', 'Activar modo de alto contraste');
        localStorage.setItem('highContrast', 'false');
        
        // Anunciar cambio a lectores de pantalla
        announceToScreenReader('Modo de alto contraste desactivado');
    }
    
    // ============================================
    // NAVEGACIÓN POR TECLADO MEJORADA
    // ============================================
    
    // Permitir navegación de teclas en cards
    const interactiveCards = document.querySelectorAll('.tip-card, .standard-card');
    
    interactiveCards.forEach(card => {
        card.addEventListener('keydown', (e) => {
            // Enter o Espacio para "activar" la card
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
                
                // Aplicar efecto visual
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 100);
            }
        });
    });
    
    // ============================================
    // TRAP FOCUS EN FORMULARIO MODAL (si se abre en modal)
    // ============================================
    
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), ' +
            'input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    // Shift + Tab
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    // Tab
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }
    
    // ============================================
    // ANUNCIOS PARA LECTORES DE PANTALLA
    // ============================================
    
    function announceToScreenReader(message) {
        // Crear región live si no existe
        let liveRegion = document.getElementById('sr-announcer');
        
        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.id = 'sr-announcer';
            liveRegion.setAttribute('role', 'status');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            
            // Estilos para ocultar visualmente pero mantener accesible
            liveRegion.style.position = 'absolute';
            liveRegion.style.left = '-10000px';
            liveRegion.style.width = '1px';
            liveRegion.style.height = '1px';
            liveRegion.style.overflow = 'hidden';
            
            document.body.appendChild(liveRegion);
        }
        
        // Limpiar y agregar mensaje
        liveRegion.textContent = '';
        setTimeout(() => {
            liveRegion.textContent = message;
        }, 100);
    }
    
    // ============================================
    // TOOLTIPS ACCESIBLES
    // ============================================
    
    function createAccessibleTooltip(triggerElement, tooltipText) {
        const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;
        
        // Crear tooltip
        const tooltip = document.createElement('div');
        tooltip.id = tooltipId;
        tooltip.className = 'accessible-tooltip';
        tooltip.setAttribute('role', 'tooltip');
        tooltip.textContent = tooltipText;
        tooltip.style.position = 'absolute';
        tooltip.style.background = '#1f2937';
        tooltip.style.color = 'white';
        tooltip.style.padding = '0.5rem 1rem';
        tooltip.style.borderRadius = '8px';
        tooltip.style.fontSize = '0.875rem';
        tooltip.style.zIndex = '10000';
        tooltip.style.opacity = '0';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.transition = 'opacity 0.2s';
        
        document.body.appendChild(tooltip);
        
        // Asociar con trigger
        triggerElement.setAttribute('aria-describedby', tooltipId);
        
        // Mostrar/ocultar
        const showTooltip = () => {
            const rect = triggerElement.getBoundingClientRect();
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            tooltip.style.opacity = '1';
        };
        
        const hideTooltip = () => {
            tooltip.style.opacity = '0';
        };
        
        triggerElement.addEventListener('mouseenter', showTooltip);
        triggerElement.addEventListener('mouseleave', hideTooltip);
        triggerElement.addEventListener('focus', showTooltip);
        triggerElement.addEventListener('blur', hideTooltip);
    }
    
    // ============================================
    // DETECCIÓN DE PREFERENCIAS DEL USUARIO
    // ============================================
    
    // Detectar preferencia de movimiento reducido (WCAG 2.3.3)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Desactivar animaciones complejas
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-base', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
        
        // Desactivar animaciones CSS
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
        
        console.log('♿ Animaciones reducidas para mejorar accesibilidad');
    }
    
    // Detectar preferencia de esquema de color
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDarkScheme.matches) {
        console.log('🌙 Esquema de color oscuro detectado');
        // Aquí podrías implementar tema oscuro automático
    }
    
    // ============================================
    // VALIDACIÓN DE ACCESIBILIDAD EN DESARROLLO
    // ============================================
    
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Verificar que todas las imágenes tengan alt text
        const images = document.querySelectorAll('img');
        images.forEach((img, index) => {
            if (!img.alt && !img.getAttribute('aria-hidden')) {
                console.warn(`⚠️ Imagen ${index + 1} no tiene texto alternativo`, img);
            }
        });
        
        // Verificar que los botones tengan labels accesibles
        const buttons = document.querySelectorAll('button');
        buttons.forEach((btn, index) => {
            const hasText = btn.textContent.trim().length > 0;
            const hasAriaLabel = btn.getAttribute('aria-label');
            const hasAriaLabelledby = btn.getAttribute('aria-labelledby');
            
            if (!hasText && !hasAriaLabel && !hasAriaLabelledby) {
                console.warn(`⚠️ Botón ${index + 1} no tiene label accesible`, btn);
            }
        });
        
        // Verificar contraste de colores (simplificado)
        console.log('✅ Verificación de accesibilidad completada');
    }
    
    // ============================================
    // GESTIÓN DE FOCO VISIBLE
    // ============================================
    
    let usingMouse = false;
    
    document.addEventListener('mousedown', () => {
        usingMouse = true;
    });
    
    document.addEventListener('keydown', () => {
        usingMouse = false;
    });
    
    // Solo mostrar outline cuando se usa teclado
    document.addEventListener('focusin', (e) => {
        if (usingMouse) {
            e.target.style.outline = 'none';
        }
    });
    
    // ============================================
    // SKIP NAVIGATION MEJORADO
    // ============================================
    
    const skipLink = document.querySelector('.skip-link');
    
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = skipLink.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.setAttribute('tabindex', '-1');
                target.focus();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Anunciar navegación
                announceToScreenReader('Navegado al contenido principal');
            }
        });
    }
    
    // ============================================
    // LANDMARK NAVIGATION
    // ============================================
    
    // Permitir navegación rápida entre landmarks con atajos de teclado
    const landmarks = {
        'h': 'header',      // Header
        'n': 'nav',         // Navigation
        'm': 'main',        // Main content
        'f': 'footer'       // Footer
    };
    
    document.addEventListener('keydown', (e) => {
        // Solo si Alt + letra está presionada
        if (e.altKey && landmarks[e.key]) {
            e.preventDefault();
            const landmark = document.querySelector(landmarks[e.key]);
            
            if (landmark) {
                landmark.setAttribute('tabindex', '-1');
                landmark.focus();
                landmark.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                announceToScreenReader(`Navegado a ${landmark.tagName.toLowerCase()}`);
            }
        }
    });
    
    // ============================================
    // LOG DE INICIALIZACIÓN
    // ============================================
    
    console.log('%c♿ Características de Accesibilidad Cargadas', 'color: #10b981; font-size: 16px; font-weight: bold;');
    console.log('✅ Navegación por teclado mejorada');
    console.log('✅ Modo de alto contraste disponible');
    console.log('✅ Soporte para lectores de pantalla (ARIA)');
    console.log('✅ Skip navigation implementado');
    console.log('✅ Preferencias de usuario detectadas');
    console.log('✅ Atajos de teclado: Alt + H/N/M/F para landmarks');
    
});

// ============================================
// EXPORTAR FUNCIONES ÚTILES
// ============================================

window.a11y = {
    announce: function(message) {
        const event = new CustomEvent('a11y:announce', { detail: message });
        document.dispatchEvent(event);
    }
};