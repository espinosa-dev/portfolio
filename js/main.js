document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');

    const projects = [
        {
            title: "Llumor",
            description: "Desarrollo completo de la página web corporativa para Llumor, una empresa local. Diseño visual, estructura e implementación responsive.",
            tags: ["HTML", "CSS", "JavaScript", "Responsive"],
            repoLink: "https://vicentelluchllumor.com",
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

    const hardSkills = [
        { name: 'Kotlin', category: 'Lenguajes de programación y marcado', icon: 'devicon-kotlin-plain colored' },
        { name: 'Java', category: 'Lenguajes de programación y marcado', icon: 'devicon-java-plain colored' },
        { name: 'JavaScript', category: 'Lenguajes de programación y marcado', icon: 'devicon-javascript-plain colored' },
        { name: 'Python', category: 'Lenguajes de programación y marcado', icon: 'devicon-python-plain colored' },
        { name: 'C', category: 'Lenguajes de programación y marcado', icon: 'devicon-c-plain colored' },
        { name: 'HTML', category: 'Lenguajes de programación y marcado', icon: 'devicon-html5-plain colored' },
        { name: 'CSS', category: 'Lenguajes de programación y marcado', icon: 'devicon-css3-plain colored' },
        { name: 'Markdown', category: 'Lenguajes de programación y marcado', icon: 'devicon-markdown-original' },
        { name: 'Spring', category: 'Frameworks y Entornos de ejecución', icon: 'devicon-spring-original colored' },
        { name: 'Electron', category: 'Frameworks y Entornos de ejecución', icon: 'devicon-electron-original colored' },
        { name: 'Node.js', category: 'Frameworks y Entornos de ejecución', icon: 'devicon-nodejs-plain colored' },
        { name: 'MySQL', category: 'SGBD', icon: 'devicon-mysql-plain colored' },
        { name: 'MongoDB', category: 'SGBD', icon: 'devicon-mongodb-plain colored' },
        { name: 'Firebase', category: 'SGBD', icon: 'devicon-firebase-plain colored' },
        { name: 'AWS', category: 'Plataformas y Despliegue (Cloud/Hosting)', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
        { name: 'Vercel', category: 'Plataformas y Despliegue (Cloud/Hosting)', icon: 'devicon-vercel-original' },
        { name: 'GitHub', category: 'Plataformas y Despliegue (Cloud/Hosting)', icon: 'devicon-github-original' },
        { name: 'WordPress', category: 'Plataformas y Despliegue (Cloud/Hosting)', icon: 'devicon-wordpress-plain colored' },
        { name: 'Docker', category: 'Herramientas y DevOps', icon: 'devicon-docker-plain colored' },
        { name: 'Git', category: 'Herramientas y DevOps', icon: 'devicon-git-plain colored' },
        { name: 'npm', category: 'Herramientas y DevOps', icon: 'devicon-npm-original-wordmark colored' },
        { name: 'Gradle', category: 'Herramientas y DevOps', icon: 'devicon-gradle-plain colored' },
        { name: 'Bash', category: 'Shells y Scripting', icon: 'devicon-bash-plain' },
        { name: 'PowerShell', category: 'Shells y Scripting', icon: 'fas fa-terminal' },
        { name: 'Visual Studio Code', category: 'IDEs y Editores', icon: 'devicon-vscode-plain colored' },
        { name: 'IntelliJ IDEA', category: 'IDEs y Editores', icon: 'devicon-intellij-plain colored' },
        { name: 'Android Studio', category: 'IDEs y Editores', icon: 'devicon-androidstudio-plain colored' },
        { name: 'PyCharm', category: 'IDEs y Editores', icon: 'devicon-pycharm-plain colored' },
        { name: 'Figma', category: 'Diseño y Edición', icon: 'devicon-figma-plain colored' },
        { name: 'Photoshop', category: 'Diseño y Edición', icon: 'devicon-photoshop-plain colored' },
        { name: 'Notion', category: 'Planificación y Documentación', icon: 'devicon-notion-plain' },
        { name: 'Linux', category: 'Sistemas Operativos', icon: 'devicon-linux-plain colored' },
        { name: 'Windows', category: 'Sistemas Operativos', icon: 'devicon-windows8-original colored' }
    ];

    const hardSkillsGrid = document.getElementById('hard-skills-grid');
    const skillFilters = document.querySelectorAll('.skill-filter');

    function displayHardSkills(category = 'Todas') {
        if (!hardSkillsGrid) return;

        hardSkillsGrid.replaceChildren();
        hardSkills
            .filter(skill => category === 'Todas' || skill.category === category)
            .forEach(skill => {
                const card = document.createElement('div');
                card.className = 'hard-skill-card';

                const icon = document.createElement('i');
                icon.className = skill.icon;
                icon.setAttribute('aria-hidden', 'true');

                const name = document.createElement('span');
                name.textContent = skill.name;

                card.append(icon, name);
                hardSkillsGrid.appendChild(card);
            });
    }

    skillFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const selectedCategory = filter.dataset.category;
            displayHardSkills(selectedCategory);

            skillFilters.forEach(button => {
                const isSelected = button === filter;
                button.classList.toggle('active', isSelected);
                button.setAttribute('aria-pressed', String(isSelected));
            });
        });
    });

    displayHardSkills();
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

    // Contact Button Logic - Copy to Clipboard
    const emailBtn = document.getElementById('btn-email');
    if (emailBtn) {
        emailBtn.addEventListener('click', function(e) {
            // Allow default mailto behavior, but also copy to clipboard
            const email = "alvaroespinosamontesinos@gmail.com";
            
            // Try specific Clipboard API with fallback
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showFeedback(this);
                }).catch(err => {
                    console.error('Error al copiar: ', err);
                });
            } else {
                // Fallback
                const textarea = document.createElement('textarea');
                textarea.value = email;
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    showFeedback(this);
                } catch (err) {
                    console.error('Error al copiar: ', err);
                }
                document.body.removeChild(textarea);
            }
        });
    }

    function showFeedback(button) {
        const originalText = button.textContent;
        button.textContent = "¡Email Copiado!";
        button.style.backgroundColor = "#22c55e"; // Green color
        button.style.color = "#fff";
        button.style.borderColor = "#22c55e";
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = ""; // Reset to CSS default
            button.style.color = "";
            button.style.borderColor = "";
        }, 2000);
    }
});
