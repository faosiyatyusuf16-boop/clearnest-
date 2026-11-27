async function loadComponents(selector, path) {
  const container = document.querySelector(selector);

  if (!container) return;

  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Fail to load ${path}:`, response.status);
  }

  container.innerHTML = await response.text();
}

async function loadSharedComponents() {
  await Promise.all([
    loadComponents("#header-component", "/components/header.html"),
    loadComponents("#footer-component", "/components/footer.html"),
  ]);
}

document.addEventListener("DOMContentLoaded", loadSharedComponents);
