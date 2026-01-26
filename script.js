// MODAL SYSTEM
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalBody = document.getElementById('modalBody');

// Informações que serão exibidas no modal
const projectsData = {
  portfolio: {
    title: '💼 Portfólio',
    subtitle: 'Meus projetos e trabalhos',
    content: `
            <h3>🔗 Sobre o Portfólio</h3>
            <p>Este é meu portfólio pessoal onde compartilho meus projetos de programação, análise de dados e desenvolvimento web.</p>
            
            <h3>O que você encontrará:</h3>
            <p>• Projetos de análise de dados<br>
            • Dashboards interativos<br>
            • Aplicações web<br>
            • Desenvolvimento fullstack</p>
            
            <a href="https://github.com/vininoronha21" class="modal-link">🔗 Acessar Portfólio</a>
          `
  },
  ultimo: {
    title: '✍🏻 Último Projeto',
    subtitle: 'Projeto mais recente',
    content: `
            <h3>📊 Dashboard Análise de Churn</h3>
            <p>Dashboard interativo desenvolvido em Python e hospedado em Streamlit Cloud para análise e previsão de Churn.</p>
            
            <div class="modal-tags">
              <span class="modal-tag">Python</span>
              <span class="modal-tag">Pandas</span>
              <span class="modal-tag">Numpy</span>
              <span class="modal-tag">Plotly</span>
              <span class="modal-tag">Streamlit</span>
            </div>
            
            <h3>Destaques:</h3>
            <p>
            • KPIs Principais<br>
            • Insights Automáticos<br>
            • Visualizações Interativas<br>
            • Evolução Temporal<br>
            • Controles e Filtros</p>
            
            <a href="https://dashboard-churn.streamlit.app" class="modal-link">Ver Projeto</a>
          `
  },
  sobre: {
    title: '👤 Sobre Mim',
    subtitle: 'Minha história e trajetória',
    content: `
            <h3>Olá! 👋</h3>
            <p>Residente em São Paulo, com forte interesse em tecnologia desde a infância. Tive meu primeiro contato com programação aos 13 anos, editando arquivos JSON em mods de Minecraft. Após iniciar Administração, percebi que não era minha área e, aos 22 anos, decidi me aprofundar de vez na área Tech. Atualmente dedico maior parte do meu tempo em estudar e, principalmente, aplicar na prática os conceitos que aprendo.</p>
            
            <h3>🎯 Objetivos:</h3>
            <p>Meu objetivo é aprender de forma sólida, criando projetos que façam sentido e tenham impacto real. Quero contribuir com a comunidade e, no futuro, ajudar pessoas que estão iniciando na área, ajudando-as a manter a motivação e não desistirem.</p>
          `

  },
  contato: {
    title: '💬 Contato',
    subtitle: 'Vamos conversar?',
    content: `
            <h3>Entre em Contato!</h3>
            <p>Estou aberto para novas oportunidades, colaborações e conversas.</p>
            
            <h3>📧 Email:</h3>
            <p><strong>contatovininoronha@gmail.com</strong></p>
            
            <h3>🌐 Redes Sociais:</h3>
            <p>• GitHub: @vininoronha21<br>
            • LinkedIn: /viniciusnoronha<br>
            • Instagram: @viniinoronha</p>
            
            <a href="mailto:contatovininoronha@gmail.com" class="modal-link">✉️ Enviar Email</a>
        `
  }
};

/**
* Abre o modal com os dados do projeto selecionado
* @param {string} projectId - ID do projeto a ser exibido
**/
function openModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  // Preenche o conteúdo do modal
  modalTitle.textContent = project.title;
  modalSubtitle.textContent = project.subtitle;
  modalBody.innerHTML = project.content;

  // Exibe o modal e bloqueia o scroll da página
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Event listeners para os cards de projeto
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const projectId = card.getAttribute('data-project');
    openModal(projectId);
  });
});



// Event listeners para fechar o modal
modalClose.addEventListener('click', closeModal);

// Fecha ao clicar fora do conteúdo do modal
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

/**
 * Fecha o modal e restaura o scroll da página
 */
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Fecha o modal ao pressionar a tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// ACTIVE LINK HIGHLIGHT
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('h2[class="section-title"]');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });
});

// COPY EMAIL ON CLICK
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const email = link.getAttribute('href').replace('mailto:', '');

    // Cria elemento temporário para copiar o texto
    const temp = document.createElement('textarea');
    temp.value = email;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);

   // Feedback visual de confirmação
    const originalText = link.innerHTML;
    link.innerHTML = '<h3>✓ Email copiado!</h3>';
    setTimeout(() => {
      link.innerHTML = originalText;
    }, 2000);
  });
});

// SMOOTH SCROLL
// Scroll suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ANIMATION ON SCROLL
// Anima elementos quando aparecem na tela usando Intersection Observer
const observerOptions = {
  threshold: 0.1, // 10% do elemento visível
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Inicializa a animação dos elementos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll(
    '.project-card, .skill-pill, .about-box, .social-container'
  );
    
  // Configura estado inicial e observa cada elemento
    animateElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });
});

// FADE SECTIONS ON SCROLL
// Controla a opacidade e animação da seção de projetos conforme o scroll
const projectsSection = document.getElementById('projectsSection');
let lastScroll = 0;
const fadeStart = 300;
const fadeEnd = 1000; 

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  let opacity = 0;

  if (currentScroll <= fadeStart) {
    opacity = 0;
  } else if (currentScroll >= fadeEnd) {
     opacity = 1;
  } else {
    opacity = (currentScroll - fadeStart) / (fadeEnd - fadeStart);
  }

  projectsSection.style.opacity = opacity;
  projectsSection.style.transform = `translateY(${20 * (1 - opacity)}px)`;

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });

// PERFORMANCE
// Lazy loading de imagens para melhorar a performance
if ('loading' in HTMLImageElement.prototype) {
  // Navegador suporta lazy loading nativo
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
});
} else {
  // Fallback: carrega libs lazysizes
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// CUSTOM CURSOR
if (window.matchMedia("(pointer: fine)").matches) {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = `<svg class="cursor-arrow" viewBox="0 0 396 433" fill="none"><g filter="url(#filter0_d_arrow)"><path d="M39.9744 31.8759C38.2182 23.4825 47.2034 16.9545 54.6432 21.2183L351.11 191.127C358.653 195.45 357.401 206.692 349.09 209.248L205.199 253.511C202.971 254.196 201.054 255.643 199.785 257.599L127.77 368.534C122.94 375.973 111.523 373.84 109.707 365.158L39.9744 31.8759Z" fill="#333333"/><path d="M346.169 199.749L202.277 244.012C197.821 245.383 193.988 248.277 191.449 252.188L119.434 363.121L49.7012 29.8407L346.169 199.749Z" stroke="white" stroke-width="19.8759"/></g><defs><filter id="filter0_d_arrow" x="0" y="0" width="395.86" height="432.694"><feFlood flood-opacity="0"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="19.8759"/><feGaussianBlur stdDeviation="19.8759"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/><feBlend in2="BackgroundImageFix"/><feBlend in="SourceGraphic"/></filter></defs></svg><svg class="cursor-hand" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.27 16.28C7.99 15.92 7.64 15.19 7.03 14.28C6.68 13.78 5.82 12.83 5.56 12.34C5.37257 12.0422 5.31819 11.6796 5.41 11.34C5.56696 10.6942 6.17956 10.2658 6.84 10.34C7.3508 10.4426 7.82022 10.693 8.19 11.06C8.44818 11.3032 8.68567 11.5674 8.9 11.85C9.06 12.05 9.1 12.13 9.28 12.36C9.46 12.59 9.58 12.82 9.49 12.48C9.42 11.98 9.3 11.14 9.13 10.39C9 9.81999 8.97 9.72999 8.85 9.29999C8.73 8.86999 8.66 8.50999 8.53 8.01999C8.41117 7.53856 8.31771 7.05122 8.25 6.55999C8.12395 5.93169 8.21566 5.2792 8.51 4.70999C8.8594 4.38136 9.37193 4.29462 9.81 4.48999C10.2506 4.81532 10.5791 5.26964 10.75 5.78999C11.0121 6.43038 11.187 7.10305 11.27 7.78999C11.43 8.78999 11.74 10.25 11.75 10.55C11.75 10.18 11.68 9.39999 11.75 9.04999C11.8194 8.68511 12.073 8.3823 12.42 8.24999C12.7178 8.15861 13.0328 8.13807 13.34 8.18999C13.65 8.2548 13.9247 8.43313 14.11 8.68999C14.3417 9.27338 14.4703 9.89259 14.49 10.52C14.5168 9.97057 14.6108 9.42652 14.77 8.89999C14.9371 8.66454 15.1811 8.49478 15.46 8.41999C15.7906 8.35954 16.1294 8.35954 16.46 8.41999C16.7311 8.51062 16.9682 8.6815 17.14 8.90999C17.3518 9.44033 17.48 10.0003 17.52 10.57C17.52 10.71 17.59 10.18 17.81 9.82999C17.9243 9.49059 18.211 9.23796 18.5621 9.16726C18.9132 9.09657 19.2754 9.21855 19.5121 9.48726C19.7489 9.75597 19.8243 10.1306 19.71 10.47C19.71 11.12 19.71 11.09 19.71 11.53C19.71 11.97 19.71 12.36 19.71 12.73C19.6736 13.3152 19.5933 13.8968 19.47 14.47C19.296 14.9771 19.0538 15.4582 18.75 15.9C18.2645 16.44 17.8633 17.0502 17.56 17.71C17.4848 18.0378 17.4512 18.3738 17.46 18.71C17.459 19.0206 17.4994 19.33 17.58 19.63C17.1711 19.6732 16.7589 19.6732 16.35 19.63C15.96 19.57 15.48 18.79 15.35 18.55C15.2857 18.4211 15.154 18.3397 15.01 18.3397C14.866 18.3397 14.7343 18.4211 14.67 18.55C14.45 18.93 13.96 19.62 13.62 19.66C12.95 19.74 11.57 19.66 10.48 19.66C10.48 19.66 10.66 18.66 10.25 18.3C9.84 17.94 9.42 17.52 9.11 17.24L8.27 16.28Z" fill="white" stroke="black" stroke-width="0.75"/></svg>`;
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

  // Atualiza posição do mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animação suave do cursor (seguimento com delay)
  function animate() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    cursorX += dx * 0.5;
    cursorY += dy * 0.5;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  // Muda cursor para "mão" ao passar por elementos interativos
  const interactiveElements = 'a, button, .project-card, .skill-pill, .social-btn, .modal-close, .info-box, .about-box, .contact-box, .section-title';
  document.querySelectorAll(interactiveElements).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  // Adiciona efeito de clique
  document.addEventListener('mousedown', () => cursor.classList.add('click'));
  document.addEventListener('mouseup', () => cursor.classList.remove('click'));
} 

// EXPORT
// Objeto global da aplicação
window.bioApp = {
  version: '1.0.0',
  author: 'Vinicius Forte',
  init: () => console.log('🚀 MyBio App iniciado!')
};

// Inicializa a aplicação
window.bioApp.init();