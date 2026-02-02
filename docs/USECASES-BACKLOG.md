# Use Cases → EPIC / FEATURE / USER STORY (draft)

> Source: UC01–UC12 (Jira‑like, DevSecOps, multi‑projets, Kanban/Scrum/SAFe, Gantt, sécurité).

## EPIC 1 — Gouvernance multi‑projets
**Features**
- F1. Création & gestion de projets/boards
- F2. Permissions & rôles par projet

**User Stories**
- En tant qu’Admin, je peux créer un projet avec un workflow par défaut.
- En tant que PO, je peux configurer les statuts et transitions.
- En tant que PMO, je peux rattacher des équipes à un projet.

## EPIC 2 — Backlog & Roadmap
**Features**
- F1. Gestion Epic → Feature → Story
- F2. Roadmap multi‑projets

**User Stories**
- En tant que PO, je peux lier des stories à un épic.
- En tant que PMO, je peux publier une roadmap multi‑projets.

## EPIC 3 — Méthodos (Kanban/Scrum/SAFe)
**Features**
- F1. Templates de board
- F2. Règles WIP & rituels

**User Stories**
- En tant que Scrum Master, je choisis un template Scrum.
- En tant que RTE, je configure un board SAFe.

## EPIC 4 — Planification Gantt
**Features**
- F1. Gantt multi‑projets
- F2. Dépendances & jalons

**User Stories**
- En tant que PMO, je visualise un Gantt consolidé.
- En tant que CTO, je vois le chemin critique.

## EPIC 5 — DevSecOps intégré
**Features**
- F1. Chaîne CI/CD intégrée
- F2. Gates de sécurité

**User Stories**
- En tant que DevOps, je lance une CI sécurisée à chaque PR.
- En tant que RSSI, je bloque un déploiement si SAST critique.

## EPIC 6 — Gestion vulnérabilités & risques
**Features**
- F1. Import findings scanners
- F2. Scoring & remédiation

**User Stories**
- En tant que RSSI, je priorise les vulnérabilités par CVSS.
- En tant que Dev Lead, je planifie les correctifs.

## EPIC 7 — Gouvernance accès & conformité
**Features**
- F1. RBAC + audit trail
- F2. Rapports conformité

**User Stories**
- En tant qu’Admin, je définis des rôles RBAC.
- En tant que RSSI, je génère un rapport d’audit.

## EPIC 8 — Dépendances inter‑projets
**Features**
- F1. Liens & blocages
- F2. Notifications de blocage

**User Stories**
- En tant que PO, je crée une dépendance cross‑projet.
- En tant que PMO, je suis les blocages.

## EPIC 9 — Reporting & KPIs exécutifs
**Features**
- F1. Dashboards CTO/PO/RSSI
- F2. KPIs delivery

**User Stories**
- En tant que CTO, je consulte un dashboard de flux.
- En tant que PO, je vois le lead time par équipe.

## EPIC 10 — Incidents & post‑mortems
**Features**
- F1. Gestion incidents
- F2. RCA & actions correctives

**User Stories**
- En tant qu’Ops, je déclare un incident.
- En tant que CTO, je valide un RCA.

## EPIC 11 — Policies & gates automatiques
**Features**
- F1. Policy‑as‑code
- F2. Overrides contrôlés

**User Stories**
- En tant que RSSI, je définis une policy qui bloque.
- En tant que CTO, je peux approuver un override.

## EPIC 12 — Collaboration & notifications
**Features**
- F1. Mentions & notifications
- F2. SLA de réponse

**User Stories**
- En tant qu’utilisateur, je reçois une notification à chaque mention.
- En tant que PM, je configure des règles de notification.
