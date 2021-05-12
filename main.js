(function() {
    document.addEventListener('DOMContentLoaded', _ => {

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

    });

})();