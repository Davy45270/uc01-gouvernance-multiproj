# UC01 — Modèle & règles (WSJF)

## Objets métier
- **Initiative**: id, titre, description, valeur, risque, effort, statut, owner, dates
- **Projet**: id, nom, initiativeId, budget, capacité, statut
- **Décision**: id, initiativeId, comité, verdict, justification, date
- **Capacité**: équipe, période, capacitéTotale, capacitéEngagée
- **Budget**: année, enveloppe, consommé, reste

## Règles WSJF (Weighted Shortest Job First)
Score = (Valeur Métier + Réduction de Risque + Opportunité) / Effort

- Valeur, risque, opportunité : 1–10
- Effort : 1–10
- Priorité triée par score décroissant

## Règles d’arbitrage
- Toute décision est **auditée** (qui, quand, pourquoi)
- Dépassement budget → **validation comité**
- Dépendances critiques → **escalade**
