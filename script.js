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
modalClose.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

/**
 * Fecha o modal e restaura o scroll da página
 */
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflor = '';
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
  })
})

// Inicializa a aplicação
window.bioApp.init();