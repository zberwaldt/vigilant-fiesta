(function() {
    document.addEventListener('DOMContentLoaded', _ => {

        feather.replace();

        let nowSection = document.getElementById('welcome-section');
        let projectsSection = document.getElementById('projects');
        let socialSection = document.getElementById('social');

        let nowBounds = nowSection.getBoundingClientRect();
        let projectsBounds = projectsSection.getBoundingClientRect();
        let socialBounds = socialSection.getBoundingClientRect();

        let nowLink = document.getElementById('nowLink');
        let projectsLink = document.getElementById('projectsLink');
        let socialLink = document.getElementById('socialLink');

        nowLink.addEventListener('click', e => {
            e.preventDefault();

            window.scrollTo({
                top: nowBounds.top,
                behavior: 'smooth'
            });

        });

        projectsLink.addEventListener('click', e => {
            e.preventDefault();

            window.scrollTo({
                top: projectsBounds.top,
                behavior: 'smooth'
            });

        });

        socialLink.addEventListener('click', e => {
            e.preventDefault();

            window.scrollTo({
                top: socialBounds.top,
                behavior: 'smooth'
            });

        });

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
            });
        }

    });

})();