/* Interações leves em JavaScript puro — sem frameworks ou bibliotecas. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const header = $('.site-header');
  const menuButton = $('.menu-toggle');
  const nav = $('#main-nav');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateHeader() {
    header?.classList.toggle('is-scrolled', window.scrollY > 30);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  function closeMenu() {
    nav?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    const use = $('use', menuButton);
    use?.setAttribute('href', '#i-menu');
  }
  menuButton?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    $('use', menuButton)?.setAttribute('href', isOpen ? '#i-x' : '#i-menu');
  });
  $$('#main-nav a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!nav?.classList.contains('is-open')) return;
    if (!nav.contains(event.target) && !menuButton?.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) closeMenu();
  });

  const reveals = $$('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 65px 0px' });
    reveals.forEach(el => revealObserver.observe(el));
  }

  // Filtros dos estudos de caso.
  const filters = $$('[data-filter]');
  const cards = $$('.project-card[data-category]');
  filters.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
      if (!card.hidden) card.classList.add('is-visible');
    });
  }));

  // Dados dos modais: informações retiradas do currículo.
  // Sem métricas fictícias, links para repositórios não verificados ou dados confidenciais.
  const projects = {
    industria: {
      type: 'BUSINESS INTELLIGENCE / INDÚSTRIA',
      title: 'Dados e dashboards na indústria',
      company: 'Papelão Ondulado Seridó · Projeto profissional',
      description: 'Atuação com modelagem de dados em Excel e SQL e integração de informações de diferentes setores para apoiar painéis de visualização em Power BI.',
      points: [
        'Organização e modelagem de bases de dados empresariais.',
        'Integração de informações provenientes de diferentes setores.',
        'Construção de dashboards para visualizar informações operacionais.'
      ],
      tags: ['SQL', 'Excel', 'Power BI', 'Integração de dados']
    },
    financeiro: {
      type: 'BUSINESS INTELLIGENCE / FINANÇAS',
      title: 'Análise financeira e indicadores',
      company: 'Kynera · Projeto profissional',
      description: 'Tratamento e análise de dados empresariais com foco na área financeira, com uso de SQL e Power Query para produzir visualizações que auxiliam a análise e a tomada de decisões.',
      points: [
        'Preparação e tratamento de dados empresariais.',
        'Consultas e manipulações com SQL e Power Query.',
        'Desenvolvimento de dashboards voltados à análise financeira.'
      ],
      tags: ['SQL', 'Power Query', 'Análise financeira', 'Dashboards']
    },
    logistica: {
      type: 'AUTOMAÇÃO / LOGÍSTICA',
      title: 'Automação de dados logísticos',
      company: 'Disbecol · Projeto profissional',
      description: 'Atuação na automação da coleta de dados para planilhas com scripts Python e Power Query, incluindo análise de rotas de entregadores e apoio à operação logística.',
      points: [
        'Desenvolvimento de scripts Python para automatizar rotinas com planilhas.',
        'Uso de Power Query na obtenção e transformação de dados.',
        'Análise de rotas e apoio à comunicação sobre entregas.'
      ],
      tags: ['Python', 'Power Query', 'Excel', 'Logística']
    },
    pedidos: {
      type: 'DESENVOLVIMENTO / WEB',
      title: 'Site de pedidos empresarial',
      company: 'Papelão Ondulado Seridó · Projeto profissional',
      description: 'Participação no desenvolvimento de um site de pedidos para a empresa, conectando conhecimentos de tecnologia às necessidades de seus processos.',
      points: [
        'Desenvolvimento de solução web para pedidos da empresa.',
        'Aplicação de conhecimentos em desenvolvimento a necessidades empresariais.'
      ],
      tags: ['Desenvolvimento web', 'Pedidos', 'Processos']
    },
    estoque: {
      type: 'DESENVOLVIMENTO / PROJETO ACADÊMICO',
      title: 'Sis-Estoque',
      company: 'Projeto Sis-Estoque · Início em ago. 2023',
      description: 'Projeto de simulação de um sistema de estoque, envolvendo backend em TypeScript com NestJS e frontend em TypeScript com Angular, com atuação na organização ágil do trabalho.',
      points: [
        'Participação como Scrum Master, apoiando prazos, reuniões e distribuição de tarefas.',
        'Projeto com backend em NestJS e TypeScript.',
        'Projeto com frontend em Angular e TypeScript.'
      ],
      tags: ['TypeScript', 'NestJS', 'Angular', 'Scrum']
    }
  };
  const dialog = $('#project-dialog');
  const closeDialogButton = $('#dialog-close');
  let previousFocus = null;

  $$('[data-open-project]').forEach(button => button.addEventListener('click', () => {
    const project = projects[button.dataset.openProject];
    if (!project || !dialog) return;
    previousFocus = document.activeElement;
    $('#dialog-type').textContent = project.type;
    $('#dialog-title').textContent = project.title;
    $('#dialog-company').textContent = project.company;
    $('#dialog-description').textContent = project.description;
    const list = $('#dialog-points');
    const tags = $('#dialog-tags');
    list.replaceChildren();
    tags.replaceChildren();
    project.points.forEach(point => {
      const li = document.createElement('li');
      li.textContent = point;
      list.appendChild(li);
    });
    project.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      tags.appendChild(span);
    });
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      closeDialogButton?.focus();
    }
  }));
  closeDialogButton?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener('close', () => previousFocus?.focus());

  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Marca a seção que está em evidência na navegação (sem alterar o scroll).
  if ('IntersectionObserver' in window) {
    const navLinks = $$('#main-nav a[href^="#"]');
    const sections = navLinks.map(a => $(a.getAttribute('href'))).filter(Boolean);
    const activeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-20% 0px -63% 0px', threshold: 0 });
    sections.forEach(section => activeObserver.observe(section));
  }
})();
