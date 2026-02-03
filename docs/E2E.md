# Tests E2E — UC01

## Prérequis
- Docker compose en cours d'exécution (API + UI)
- Node.js >= 18

## Lancer
```bash
cd e2e
npm install
npx playwright install --with-deps
npm test
```

## Cibles
- UI: http://localhost:13100
- API: http://localhost:13101
