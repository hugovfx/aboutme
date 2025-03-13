lucide.createIcons();

window.onload = function() {
    window.scrollTo(0, 0);
};

function toggleExpand(element) {
    const isExpanded = element.classList.contains('expanded');
    
    let contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.classList.remove('expanded');
    });
    
    if (!isExpanded) {
        element.classList.add('expanded');
    }
}

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(function() {
        showCopyAnimation(element);
    }).catch(function(err) {
        console.error('Error al copiar texto: ', err);
    });
}

function showCopyAnimation(element) {
    const tooltip = document.createElement('div');
    tooltip.className = 'copy-tooltip';
    tooltip.textContent = 'Copiado!';
    
    element.appendChild(tooltip);
    
    setTimeout(function() {
        tooltip.classList.add('show');
    }, 10);
    
    setTimeout(function() {
        tooltip.classList.remove('show');
        setTimeout(function() {
            element.removeChild(tooltip);
        }, 300);
    }, 1500);
}

window.addEventListener("scroll", function () {
    let presentation = document.getElementById("presentation");
    
    if (window.scrollY > 10) {
        presentation.classList.add("navbar");
    } else {
        presentation.classList.remove("navbar");
    }
});

document.querySelector('.scroll-arrow').addEventListener('click', function() {
    window.scrollTo({
        top: 11,
        behavior: 'smooth'
    });
});

document.getElementById('email-info').addEventListener('click', function(e) {
    e.stopPropagation();
    copyToClipboard('victorhugobaezarocha@gmail.com', this.parentNode);
});

document.getElementById('phone-info').addEventListener('click', function(e) {
    e.stopPropagation();
    copyToClipboard('+52 614 407 9665', this.parentNode);
});