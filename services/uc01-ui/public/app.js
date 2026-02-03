const API = 'http://localhost:13101';

const statusEl = document.getElementById('status');
const listEl = document.getElementById('list');
const form = document.getElementById('initForm');
const refreshBtn = document.getElementById('refreshBtn');

async function health() {
  try {
    const res = await fetch(`${API}/healthz`);
    statusEl.textContent = res.ok ? 'API: ok' : 'API: KO';
  } catch {
    statusEl.textContent = 'API: offline';
  }
}

function card(item) {
  return `
    <div class="item">
      <div class="title">${item.title}</div>
      <div class="meta">WSJF: ${item.wsjf} • Effort: ${item.effort}</div>
      <div class="desc">${item.description || ''}</div>
    </div>
  `;
}

async function load() {
  const res = await fetch(`${API}/v1/initiatives`);
  const data = await res.json();
  listEl.innerHTML = data.items.map(card).join('') || '<div class="muted">Aucune initiative</div>';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const body = Object.fromEntries(formData.entries());
  body.value = Number(body.value);
  body.risk = Number(body.risk);
  body.opportunity = Number(body.opportunity);
  body.effort = Number(body.effort);
  await fetch(`${API}/v1/initiatives`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  form.reset();
  await load();
});

refreshBtn.addEventListener('click', load);

health();
load();
