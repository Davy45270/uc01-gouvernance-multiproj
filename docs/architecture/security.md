# Sécurité & Conformité

## Principes
- RBAC strict, audit log, moindre privilège
- OpenAPI contract-first
- Secrets dans vault (OpenBao)

## Interdits
- Secrets en clair dans le code ou README
- Endpoints non versionnés en prod
- Contournement des gates QA/RSSI
- Désactivation des audits
