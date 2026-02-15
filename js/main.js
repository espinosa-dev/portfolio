document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');

    const projects = [
        {
            title: "Llumor",
            description: "Desarrollo completo de la página web corporativa para Llumor, una empresa local. Diseño visual, estructura e implementación responsive.",
            tags: ["HTML", "CSS", "JavaScript", "Responsive"],
            repoLink: "https://github.com/espinosa-dev",
            demoLink: "https://vicentelluchllumor.com",
            language: "HTML"
        },
        {
            title: "MICROODS",
            description: "Proyecto realizado en clase de programacion, se trata de una aplicacion web donde realizas micro juegos relacionado con los Objetivos de Desarrollo Sostenible (ODS).",
            tags: ["HTML", "CSS", "JavaScript"],
            repoLink: "https://github.com/espinosa-dev/MICROODS",
            demoLink: "https://espinosa-dev.github.io/MICROODS/",
            language: "HTML"
        },
        {
            title: "Arbol Navidad",
            description: "Proyecto realizado en clase de programacion, se trata de un arbol de navidad interactivo.",
            tags: ["JAVA", "Batch"],
            repoLink: "https://github.com/espinosa-dev/ArbolNavidad",
            demoLink: "",
            language: "JAVA"
        },
        {
            title: "StreetFootwear",
            description: "Proyecto realizado en clase de aplicaciones web, se trata de una página básica sobre una tienda de ropa.",
            tags: ["HTML", "CSS", "JavaScript"],
            repoLink: "https://github.com/espinosa-dev/StreetFootwear",
            demoLink: "https://espinosa-dev.github.io/StreetFootwear/",
            language: "HTML"
        },
        {
            title: "Calculadora",
            description: "Calculadora básica realizada en Python.",
            tags: ["Python"],
            repoLink: "https://github.com/espinosa-dev/calculadora.py",
            demoLink: "",
            language: "Python"
        },
        {
            title: "Batalla de dados",
            description: "Juego por consola de dados entre dos jugadores.",
            tags: ["Python"],
            repoLink: "https://github.com/espinosa-dev/dados.py",
            demoLink: "",
            language: "Python"
        },
    ];

    function displayProjects(projects) {
        projectsGrid.innerHTML = '';

        if (projects.length === 0) {
            projectsGrid.innerHTML = '<p>No hay proyectos para mostrar aún.</p>';
            return;
        }

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            const languageColor = getLanguageColor(project.language);
            const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

            projectCard.innerHTML = `
                <div class="card-header">
                    <div class="folder-icon">
                        <i class="far fa-folder"></i>
                    </div>
                    <div class="links">
                        <a href="${project.repoLink}" target="_blank" aria-label="Ver Código"><i class="fab fa-github"></i></a>
                        ${project.demoLink && project.demoLink !== '#' ? `<a href="${project.demoLink}" target="_blank" aria-label="Ver Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="repo-title">${project.title}</h3>
                    <p class="repo-desc">${project.description}</p>
                    <div class="tags-container">
                        ${tagsHtml}
                    </div>
                </div>
                <div class="card-footer">
                    <a href="${project.repoLink}" target="_blank" class="btn-view-project">Ver Proyecto</a>
                </div>
            `;

            projectsGrid.appendChild(projectCard);
        });
    }

    function getLanguageColor(language) {
        const colors = {
            'JavaScript': '#f1e05a',
            'Python': '#3572A5',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'TypeScript': '#2b7489',
            'Java': '#b07219'
        };
        return colors[language] || '#8e969a';
    }

    displayProjects(projects);

    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if(navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
});

