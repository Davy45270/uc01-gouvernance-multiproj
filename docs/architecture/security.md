# Sécurité & Conformité

## Principes
- RBAC strict, audit log, moindre privilège
- OpenAPI contract-first
- Secrets dans vault (OpenBao)

## Interdits
- Architecture monolithique non justifiée
- Échanges stateful entre services
- UI multi-page (hors dérogation)
- Code non documenté
- Fonctionnel non documenté
- Secrets en clair dans le code ou README
- Endpoints non versionnés en prod
- Contournement des gates QA/RSSI
- Désactivation des audits
