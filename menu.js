document.addEventListener("DOMContentLoaded", function() {
  // --- 1. ESTRUTURA DO MENU SUPERIOR (DISCIPLINAS DE DELEGADO PCDF) ---
  const menuSuperiorHTML = `
    <nav class="main-nav">
      <div class="nav-logo"><img src="logo.png" alt="Brasão PCDF"></div>
      <div class="nav-links">
        <a href="index.html">🏠 Início</a>
        <a href="administrativo.html">⚖️ Administrativo</a>
        <a href="constitucional.html">🏛️ Constitucional</a>
        <a href="penal.html">🚨 Penal</a>
        <a href="processual_penal.html">🔎 Proc. Penal</a>
        <a href="civil_empresarial.html">💼 Civil/Empresarial</a>
        <a href="tributario.html">💰 Tributário</a>
        <a href="ambiental.html">🌿 Ambiental</a>
        <a href="medicina_legal.html">💀 Medicina Legal</a>
        <a href="questao.html">📝 Questões</a>
        
        <div class="theme-switch-wrapper">
          <input type="checkbox" id="theme-checkbox" class="theme-checkbox" />
          <label class="theme-switch-label" for="theme-checkbox">
            <span class="switch-thumb">
              <span class="sun-icon">☀️</span>
              <span class="moon-icon">🌙</span>
            </span>
          </label>
        </div>

      </div>
    </nav>
  `;

  // --- 2. ESTRUTURA DO MENU LATERAL (FERRAMENTAS SELECIONADAS) ---
  const sidebarHTML = `
    <aside class="sidebar">
      <div class="sidebar-title">Ferramentas</div>
      <a href="index.html" class="sidebar-link">📄 Estrutura Edital</a>
      <a href="pecas.html" class="sidebar-link">✍️ Peças Práticas</a>
      <a href="#" class="sidebar-link">📜 Lei Seca</a>
      <a href="questao.html" class="sidebar-link">📝 Caderno Questões</a>
      <div class="sidebar-title" style="margin-top: 20px;">Utilidades</div>
      <a href="#" class="sidebar-link">🧠 Mnemônicos</a>
      <a href="#" class="sidebar-link">📅 Cronograma</a>
    </aside>
  `;

  // --- 3. INJEÇÃO DOS MENUS ---
  const topContainer = document.getElementById("menu-container");
  if (topContainer) topContainer.innerHTML = menuSuperiorHTML;

  const sideContainer = document.getElementById("sidebar-container");
  if (sideContainer) sideContainer.innerHTML = sidebarHTML;

  // --- 4. LÓGICA DO TEMA CLARO/ESCURO COM O SWITCH ---
  const themeCheckbox = document.getElementById("theme-checkbox");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    if (themeCheckbox) themeCheckbox.checked = true;
  }

  if (themeCheckbox) {
    themeCheckbox.addEventListener("change", function() {
      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // --- 5. LÓGICA DE DESTAQUE (LINK ATIVO) ---
  let paginaAtual = window.location.pathname.split("/").pop() || "index.html";
  paginaAtual = decodeURIComponent(paginaAtual);

  const todosLinks = document.querySelectorAll(".nav-links a, .sidebar-link");
  
  todosLinks.forEach(link => {
    if (link.getAttribute("href") === paginaAtual) {
      link.classList.add("ativo");
    }
  });
});