import http from 'node:http';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const mem = {
  initiatives: new Map(),
  projects: new Map(),
  decisions: new Map(),
  capacities: new Map(),
  budgets: new Map(),
};

function id(prefix) {
  return `${prefix}_${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      if (!body) return resolve(null);
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
  });
}

function json(res, status, obj) {
  res.writeHead(status, {
    'content-type': 'application/json',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'content-type',
    'access-control-allow-methods': 'GET,POST,PATCH,DELETE,OPTIONS',
  });
  res.end(JSON.stringify(obj));
}

function wsjfScore(value, risk, opportunity, effort) {
  const v = Number(value || 0);
  const r = Number(risk || 0);
  const o = Number(opportunity || 0);
  const e = Number(effort || 1);
  return Math.round(((v + r + o) / e) * 100) / 100;
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'access-control-allow-origin': '*',
        'access-control-allow-headers': 'content-type',
        'access-control-allow-methods': 'GET,POST,PATCH,DELETE,OPTIONS',
      });
      return res.end();
    }

    if (req.url === '/healthz') return json(res, 200, { ok: true, service: 'uc01-api' });

    // Initiatives
    if (req.method === 'POST' && req.url === '/v1/initiatives') {
      const body = (await readJson(req)) || {};
      if (!body.title) return json(res, 400, { error: 'invalid_request', message: 'title is required' });
      const item = {
        id: id('init'),
        title: body.title,
        description: body.description || '',
        value: body.value || 0,
        risk: body.risk || 0,
        opportunity: body.opportunity || 0,
        effort: body.effort || 1,
        status: body.status || 'new',
        owner: body.owner || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      item.wsjf = wsjfScore(item.value, item.risk, item.opportunity, item.effort);
      mem.initiatives.set(item.id, item);
      return json(res, 201, item);
    }

    if (req.method === 'GET' && req.url.startsWith('/v1/initiatives')) {
      if (req.url === '/v1/initiatives') {
        const items = Array.from(mem.initiatives.values()).sort((a, b) => b.wsjf - a.wsjf);
        return json(res, 200, { items });
      }
      const idPart = req.url.split('/')[3];
      const item = mem.initiatives.get(idPart);
      if (!item) return json(res, 404, { error: 'not_found' });
      return json(res, 200, item);
    }

    if (req.method === 'PATCH' && req.url.startsWith('/v1/initiatives/')) {
      const idPart = req.url.split('/')[3];
      const current = mem.initiatives.get(idPart);
      if (!current) return json(res, 404, { error: 'not_found' });
      const body = (await readJson(req)) || {};
      const next = { ...current, ...body, updatedAt: new Date().toISOString() };
      next.wsjf = wsjfScore(next.value, next.risk, next.opportunity, next.effort);
      mem.initiatives.set(idPart, next);
      return json(res, 200, next);
    }

    if (req.method === 'DELETE' && req.url.startsWith('/v1/initiatives/')) {
      const idPart = req.url.split('/')[3];
      if (!mem.initiatives.has(idPart)) return json(res, 404, { error: 'not_found' });
      mem.initiatives.delete(idPart);
      res.writeHead(204, { 'access-control-allow-origin': '*' });
      return res.end();
    }

    // Projects
    if (req.method === 'POST' && req.url === '/v1/projects') {
      const body = (await readJson(req)) || {};
      if (!body.name) return json(res, 400, { error: 'invalid_request', message: 'name is required' });
      const item = {
        id: id('prj'),
        name: body.name,
        initiativeId: body.initiativeId || null,
        budget: body.budget || 0,
        capacity: body.capacity || 0,
        status: body.status || 'planned',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      mem.projects.set(item.id, item);
      return json(res, 201, item);
    }

    if (req.method === 'GET' && req.url.startsWith('/v1/projects')) {
      if (req.url === '/v1/projects') return json(res, 200, { items: Array.from(mem.projects.values()) });
      const idPart = req.url.split('/')[3];
      const item = mem.projects.get(idPart);
      if (!item) return json(res, 404, { error: 'not_found' });
      return json(res, 200, item);
    }

    if (req.method === 'PATCH' && req.url.startsWith('/v1/projects/')) {
      const idPart = req.url.split('/')[3];
      const current = mem.projects.get(idPart);
      if (!current) return json(res, 404, { error: 'not_found' });
      const body = (await readJson(req)) || {};
      const next = { ...current, ...body, updatedAt: new Date().toISOString() };
      mem.projects.set(idPart, next);
      return json(res, 200, next);
    }

    if (req.method === 'DELETE' && req.url.startsWith('/v1/projects/')) {
      const idPart = req.url.split('/')[3];
      if (!mem.projects.has(idPart)) return json(res, 404, { error: 'not_found' });
      mem.projects.delete(idPart);
      res.writeHead(204, { 'access-control-allow-origin': '*' });
      return res.end();
    }

    // Decisions
    if (req.method === 'POST' && req.url === '/v1/decisions') {
      const body = (await readJson(req)) || {};
      if (!body.initiativeId) return json(res, 400, { error: 'invalid_request', message: 'initiativeId is required' });
      const item = {
        id: id('dec'),
        initiativeId: body.initiativeId,
        committee: body.committee || 'COPIL',
        verdict: body.verdict || 'pending',
        justification: body.justification || '',
        decidedAt: new Date().toISOString(),
      };
      mem.decisions.set(item.id, item);
      return json(res, 201, item);
    }

    if (req.method === 'GET' && req.url === '/v1/decisions') {
      return json(res, 200, { items: Array.from(mem.decisions.values()) });
    }

    return json(res, 404, { error: 'not_found' });
  } catch (e) {
    return json(res, 500, { error: 'internal_error', message: String(e?.message || e) });
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(JSON.stringify({ level: 'info', msg: 'listening', port }));
});
