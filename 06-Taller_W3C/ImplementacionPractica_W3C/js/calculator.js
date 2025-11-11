// ============================================
// CALCULADORA DE HUELLA DE CARBONO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carbon-form');
    const resultContainer = document.getElementById('result-container');
    const resultNumber = document.getElementById('result-number');
    const resultStatus = document.getElementById('result-status');
    const gaugeProgress = document.getElementById('gauge-progress');
    
    // Factores de emisión (kg CO2)
    const EMISSION_FACTORS = {
        carKm: 0.192,           // kg CO2 por km en auto
        electricity: 0.5,       // kg CO2 por kWh
        meatMeal: 6.61,         // kg CO2 por comida con carne
        waste: 0.5              // kg CO2 por kg de basura
    };
    
    // Validación del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Limpiar mensajes de error anteriores
        clearErrors();
        
        // Obtener valores
        const carKm = parseFloat(document.getElementById('car-km').value);
        const electricity = parseFloat(document.getElementById('electricity').value);
        const meatMeals = parseFloat(document.getElementById('meat-meals').value);
        const waste = parseFloat(document.getElementById('waste').value);
        
        // Validar inputs
        let isValid = true;
        
        if (isNaN(carKm) || carKm < 0) {
            showError('car-km', 'Por favor, ingresa un valor válido');
            isValid = false;
        }
        
        if (isNaN(electricity) || electricity < 0) {
            showError('electricity', 'Por favor, ingresa un valor válido');
            isValid = false;
        }
        
        if (isNaN(meatMeals) || meatMeals < 0 || meatMeals > 21) {
            showError('meat-meals', 'Ingresa un valor entre 0 y 21');
            isValid = false;
        }
        
        if (isNaN(waste) || waste < 0) {
            showError('waste', 'Por favor, ingresa un valor válido');
            isValid = false;
        }
        
        if (!isValid) {
            return;
        }
        
        // Calcular emisiones
        calculateEmissions({
            carKm,
            electricity,
            meatMeals,
            waste
        });
    });
    
    // Función para calcular emisiones
    function calculateEmissions(data) {
        // Cálculos individuales
        const transportEmissions = data.carKm * EMISSION_FACTORS.carKm;
        const energyEmissions = data.electricity * EMISSION_FACTORS.electricity;
        const foodEmissions = data.meatMeals * EMISSION_FACTORS.meatMeal * 4.33; // 4.33 semanas/mes
        const wasteEmissions = data.waste * EMISSION_FACTORS.waste * 4.33;
        
        // Total mensual
        const totalEmissions = transportEmissions + energyEmissions + foodEmissions + wasteEmissions;
        
        // Porcentajes para desglose
        const totalForPercentage = totalEmissions || 1; // Evitar división por 0
        const transportPercent = (transportEmissions / totalForPercentage) * 100;
        const energyPercent = (energyEmissions / totalForPercentage) * 100;
        const foodPercent = (foodEmissions / totalForPercentage) * 100;
        const wastePercent = (wasteEmissions / totalForPercentage) * 100;
        
        // Mostrar resultados
        displayResults(totalEmissions, {
            transport: { value: transportEmissions, percent: transportPercent },
            energy: { value: energyEmissions, percent: energyPercent },
            food: { value: foodEmissions, percent: foodPercent },
            waste: { value: wasteEmissions, percent: wastePercent }
        });
    }
    
    // Función para mostrar resultados
    function displayResults(total, breakdown) {
        // Mostrar contenedor con transición
        resultContainer.hidden = false;
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Animar número
        animateNumber(0, total, 1500, resultNumber);
        
        // Determinar estado
        let status = '';
        let statusClass = '';
        
        if (total < 300) {
            status = '¡Excelente! Tu huella es baja. Sigue así y comparte tus hábitos sostenibles.';
            statusClass = 'low';
        } else if (total < 600) {
            status = 'Tu huella es moderada. Hay oportunidades para mejorar.';
            statusClass = 'medium';
        } else {
            status = 'Tu huella es alta. Considera implementar los consejos para reducirla.';
            statusClass = 'high';
        }
        
        resultStatus.textContent = status;
        resultStatus.className = 'result-status ' + statusClass;
        
        // Animar medidor circular (gauge)
        const maxEmissions = 1000; // kg CO2 máximo para la escala
        const percentage = Math.min((total / maxEmissions) * 100, 100);
        const circumference = 2 * Math.PI * 80; // radio = 80
        const offset = circumference - (percentage / 100) * circumference;
        
        setTimeout(() => {
            gaugeProgress.style.strokeDashoffset = offset;
        }, 100);
        
        // Actualizar desglose
        updateBreakdown('transport', breakdown.transport);
        updateBreakdown('energy', breakdown.energy);
        updateBreakdown('food', breakdown.food);
        updateBreakdown('waste', breakdown.waste);
    }
    
    // Función para animar números
    function animateNumber(start, end, duration, element) {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOut;
            
            element.textContent = Math.round(current).toLocaleString('es-ES');
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // Función para actualizar desglose visual
    function updateBreakdown(category, data) {
        const fillElement = document.getElementById(`breakdown-${category}`);
        const valueElement = document.getElementById(`value-${category}`);
        const barElement = fillElement.parentElement;
        
        // Actualizar atributos ARIA
        barElement.setAttribute('aria-valuenow', Math.round(data.percent));
        
        // Animar barra
        setTimeout(() => {
            fillElement.style.width = `${data.percent}%`;
        }, 100);
        
        // Actualizar texto
        valueElement.textContent = `${Math.round(data.percent)}%`;
    }
    
    // Función para mostrar error
    function showError(fieldId, message) {
        const input = document.getElementById(fieldId);
        const errorElement = document.getElementById(`${fieldId}-error`);
        
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', `${fieldId}-error ${fieldId}-help`);
        errorElement.textContent = message;
        
        // Focus en el primer campo con error
        if (!document.querySelector('[aria-invalid="true"]')) {
            input.focus();
        }
    }
    
    // Función para limpiar errores
    function clearErrors() {
        const inputs = form.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.removeAttribute('aria-invalid');
            const errorId = `${input.id}-error`;
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    }
    
    // Limpiar formulario
    form.addEventListener('reset', () => {
        clearErrors();
        resultContainer.hidden = true;
    });
});

// ============================================
// VALIDACIÓN EN TIEMPO REAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        // Validación al escribir
        input.addEventListener('input', () => {
            const errorElement = document.getElementById(`${input.id}-error`);
            
            if (input.value && parseFloat(input.value) < 0) {
                input.setAttribute('aria-invalid', 'true');
                errorElement.textContent = 'El valor no puede ser negativo';
            } else if (input.id === 'meat-meals' && parseFloat(input.value) > 21) {
                input.setAttribute('aria-invalid', 'true');
                errorElement.textContent = 'Máximo 21 comidas por semana';
            } else {
                input.removeAttribute('aria-invalid');
                errorElement.textContent = '';
            }
        });
        
        // Accesibilidad: anunciar cuando el campo está completo
        input.addEventListener('blur', () => {
            if (input.value && !input.getAttribute('aria-invalid')) {
                // El campo es válido, remover cualquier error
                const errorElement = document.getElementById(`${input.id}-error`);
                errorElement.textContent = '';
            }
        });
    });
});

// ============================================
// TIPS INTERACTIVOS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const tipCards = document.querySelectorAll('.tip-card');
    
    // Agregar efecto de lectura al pasar el mouse
    tipCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
        
        // Accesibilidad: mismo efecto con teclado
        card.addEventListener('focus', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('blur', () => {
            card.style.transform = '';
        });
    });
});

// ============================================
// ANIMACIÓN DE ENTRADA (Intersection Observer)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos
    const elementsToAnimate = document.querySelectorAll(
        '.tip-card, .standard-card, .calculator-form'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🌍 Calculadora de Huella de Carbono', 'color: #10b981; font-size: 20px; font-weight: bold;');
console.log('%c✅ Estándares W3C implementados:', 'color: #3b82f6; font-size: 14px; font-weight: bold;');
console.log('   • HTML5 Semántico');
console.log('   • CSS3 Grid & Flexbox');
console.log('   • SVG con animaciones');
console.log('   • WCAG 2.1 Nivel AA');
console.log('   • WAI-ARIA');
console.log('%c♿ Accesible para todos', 'color: #10b981; font-size: 14px;');