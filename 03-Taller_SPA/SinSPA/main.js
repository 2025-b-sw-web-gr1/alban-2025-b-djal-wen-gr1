// ========================================
// THEME MANAGEMENT (Dark/Light Mode)
// ========================================

// Initialize theme from localStorage or default to light mode
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

// Toggle between dark and light theme
function toggleTheme() {
    document.body.classList.toggle('dark');
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

// Set up theme toggle button
function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
}

// ========================================
// DYNAMIC NAVIGATION (SPA without full reload)
// ========================================

// Load content from another page dynamically
async function loadPage(url) {
    try {
        // Show loading indicator (optional)
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            contentArea.style.opacity = '0.5';
        }

        // Fetch the HTML content from the target page
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const html = await response.text();
        
        // Create a temporary DOM element to parse the fetched HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Extract the main content area from the fetched page
        const newContent = doc.getElementById('content-area');
        
        if (newContent && contentArea) {
            // Replace the current content with the new content
            contentArea.innerHTML = newContent.innerHTML;
            
            // Restore opacity and add fade-in animation
            contentArea.style.opacity = '1';
            contentArea.classList.remove('fade-in');
            // Trigger reflow to restart animation
            void contentArea.offsetWidth;
            contentArea.classList.add('fade-in');
            
            // Update page title
            const newTitle = doc.title;
            document.title = newTitle;
            
            // Update navigation active states
            updateNavigation(url);
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Update browser history
            history.pushState({ url: url }, newTitle, url);
        }
    } catch (error) {
        console.error('Error loading page:', error);
        
        // Fallback: navigate normally if dynamic loading fails
        window.location.href = url;
    }
}

// Update navigation link styles based on current page
function updateNavigation(currentUrl) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentUrl || 
            (currentUrl.includes(linkHref) && linkHref !== 'index.html' && linkHref !== '/')) {
            // Active link styles
            link.classList.remove('text-gray-600', 'dark:text-gray-300', 'bg-gray-200', 'dark:bg-gray-700');
            link.classList.add('text-blue-600', 'dark:text-blue-400', 'bg-blue-600', 'dark:bg-blue-500', 'text-white');
        } else {
            // Inactive link styles
            link.classList.remove('text-blue-600', 'dark:text-blue-400', 'bg-blue-600', 'dark:bg-blue-500', 'text-white');
            link.classList.add('text-gray-600', 'dark:text-gray-300', 'bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-300');
        }
    });
}

// Set up navigation link event listeners
function setupNavigation() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            
            const targetUrl = link.getAttribute('href');
            
            // Only load if it's a different page
            if (targetUrl && !window.location.pathname.endsWith(targetUrl)) {
                loadPage(targetUrl);
            }
        });
    });
}

// Handle browser back/forward buttons
function setupHistoryNavigation() {
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.url) {
            // Load the page without adding to history again
            loadPageWithoutHistory(event.state.url);
        }
    });
}

// Load page without adding to history (for back/forward navigation)
async function loadPageWithoutHistory(url) {
    try {
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            contentArea.style.opacity = '0.5';
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.getElementById('content-area');
        
        if (newContent && contentArea) {
            contentArea.innerHTML = newContent.innerHTML;
            contentArea.style.opacity = '1';
            contentArea.classList.remove('fade-in');
            void contentArea.offsetWidth;
            contentArea.classList.add('fade-in');
            
            document.title = doc.title;
            updateNavigation(url);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } catch (error) {
        console.error('Error loading page:', error);
        window.location.href = url;
    }
}

// ========================================
// INITIALIZATION
// ========================================

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Setup theme toggle button
    setupThemeToggle();
    
    // Setup dynamic navigation
    setupNavigation();
    
    // Setup browser history navigation
    setupHistoryNavigation();
    
    // Set initial history state
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    history.replaceState({ url: currentPage }, document.title, currentPage);
    
    // Update navigation to show current page
    updateNavigation(currentPage);
    
    console.log('✅ SPA initialized successfully');
    console.log('🌓 Theme persistence enabled');
    console.log('🔄 Dynamic navigation enabled');
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Smooth scroll to element (optional, for internal links)
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Log theme changes for debugging
window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
        console.log('Theme changed in another tab:', e.newValue);
        initTheme();
    }
});

// Export functions for potential external use
window.spiderVerseApp = {
    loadPage,
    toggleTheme,
    smoothScrollTo
};