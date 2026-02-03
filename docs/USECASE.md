# UC01 — Gouvernance multi‑projets (Doc fonctionnelle étendue)

## 1) Contexte & objectif
Piloter un portefeuille multi‑projets avec arbitrage capacité/budget, traçabilité des décisions et visibilité direction.

## 2) Périmètre
- Gestion portefeuille (initiatives/projets)
- Scoring et priorisation (WSJF/valeur/risque/effort)
- Gouvernance (comités, décisions, historique)
- Suivi jalons & alertes

## 3) Objets clés
Initiative, Projet, Capacité, Budget, Décision, Comité, Jalon.

## 4) Règles métier
- Priorisation sur **valeur/risque/effort**
- Décisions **auditables** et historisées
- Dépassements budget → alerte + validation

## 5) Intégrations
ERP/Finance (budget), timesheets, outils projets, reporting BI.

## 6) NFR (non‑fonctionnel)
- Traçabilité forte (audit)
- SLA de décision (comité)
- Export gouvernance

---

## Contraintes globales (applicables à tous les use cases)
- **Microservices** (pas de monolithe non justifié)
- **Échanges stateless** entre services
- **SPA** côté UI
- **UI responsive** (desktop + mobile)
- **Composants stables et à jour** uniquement
- **Documentation code obligatoire**
- **Documentation fonctionnelle obligatoire**

### Epic — Conformité aux règles globales
- Story: conformité architecture → Actions: vérifier microservices, stateless, SPA
- Story: conformité UI → Actions: responsive + composants stables/maintenus
- Story: conformité documentation → Actions: doc code + doc fonctionnelle à jour

---

## Epics / Stories / Actions
### Epic 1 — Portefeuille & scoring
- Story: créer initiative → Actions: formulaire, scoring auto, validation PMO
- Story: matrice WSJF → Actions: calcul, classement, export comité

### Epic 2 — Capacités & allocation
- Story: plan de charge → Actions: capacité par équipe, simulation
- Story: arbitrage budget → Actions: alerte dépassement, validation

### Epic 3 — Gouvernance & décisions
- Story: comité mensuel → Actions: agenda, décisions tracées
- Story: suivi jalons → Actions: statut, alertes
