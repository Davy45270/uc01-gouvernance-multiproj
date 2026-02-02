# Priorisation Use Cases (CTO + PO + RSSI)

## Synthèse CTO (MoSCoW)
**MUST**
- UC01 Gouvernance multi‑projets
- UC02 Backlog & Roadmap
- UC03 Méthodos Kanban/Scrum/SAFe
- UC07 Accès & conformité (RBAC + audit)
- UC12 Collaboration & notifications

**SHOULD**
- UC08 Dépendances inter‑projets
- UC09 Reporting & KPIs
- UC06 Vulnérabilités & risques
- UC04 Gantt

**COULD**
- UC10 Incidents & post‑mortems
- UC05 DevSecOps intégré (CI/CD)
- UC11 Policies & gates auto

### Arbitrages CTO
1) Socle d’usage d’abord (gouvernance, backlog, méthodes, RBAC, collab)  
2) KPIs après stabilisation des données  
3) Sécurité avancée repoussée (DevSecOps/policies/vulns)  
4) PMO avancé ensuite (Gantt/dépendances)

---

## Synthèse PO (valeur/difficulté/malus)
**Top priorités (scores PO)**
1) UC01 Gouvernance multi‑projets  
2) UC02 Backlog & Roadmap  
3) UC07 Accès & conformité  
4) UC03 Méthodos  
5) UC12 Collaboration & notifications

**Backlog P0/P1/P2 (PO)**
- **P0** : UC01, UC02, UC03, UC07, UC12
- **P1** : UC08, UC09, UC04
- **P2** : UC05, UC11, UC06, UC10

---

## Synthèse RSSI (sécurité)
**Top sécurité**
1) UC07 Accès & conformité  
2) UC11 Policies & gates auto  
3) UC05 DevSecOps intégré  
4) UC06 Vulnérabilités & risques  
5) UC09 Reporting & KPIs

---

## Consensus proposé (Global)
**Wave 1 (MVP)**
- UC01 Gouvernance multi‑projets
- UC02 Backlog & Roadmap
- UC03 Méthodos Kanban/Scrum/SAFe
- UC07 Accès & conformité (RBAC + audit)
- UC12 Collaboration & notifications

**Wave 2 (Pilotage & PMO)**
- UC08 Dépendances inter‑projets
- UC09 Reporting & KPIs
- UC04 Gantt

**Wave 3 (DevSecOps avancé)**
- UC05 DevSecOps intégré
- UC11 Policies & gates auto
- UC06 Vulnérabilités & risques
- UC10 Incidents & post‑mortems

---

## Backlog EPIC/FEATURE/STORY
Voir : `docs/USECASES-BACKLOG.md`
