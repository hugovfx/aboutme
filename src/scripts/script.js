lucide.createIcons();
        
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

        window.addEventListener("scroll", function () {
            let presentation = document.getElementById("presentation");
            
            if (window.scrollY > 50) {
                presentation.classList.add("navbar");
            } else {
                presentation.classList.remove("navbar");
            }
        });
        
        document.querySelector('.scroll-arrow').addEventListener('click', function() {
            const infoSection = document.querySelector('.info');
            infoSection.scrollIntoView({ behavior: 'smooth' });
        });