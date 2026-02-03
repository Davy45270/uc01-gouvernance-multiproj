# Caddy — Architecture & modèle réutilisable

## Emplacement (machine 192.168.1.201)
- Configuration Caddy (Docker) : `/home/david/config/caddy/Caddyfile`
- Données : `/home/david/config/caddy/data`
- Config runtime : `/home/david/config/caddy/config`

## Principe général
Un seul vhost wildcard `*.pingfr.duckdns.org`.
Chaque service est routé par **match de host** → `reverse_proxy` vers IP/port.

Schéma :
```
*.pingfr.duckdns.org
  ├─ dashboard.pingfr.duckdns.org → homepage-master:3000 (host local)
  ├─ plex.pingfr.duckdns.org      → plex:32400
  ├─ photos.pingfr.duckdns.org    → immich_server:2283
  ├─ media.pingfr.duckdns.org     → 192.168.1.210:8080
  ├─ ops.pingfr.duckdns.org       → 192.168.1.220:8080
  ├─ test.pingfr.duckdns.org      → 192.168.1.230:8080
  ├─ pm-api.pingfr.duckdns.org    → 192.168.1.230:13000
  └─ pm-ui.pingfr.duckdns.org     → 192.168.1.231:3000
```

## TLS
- Email : `david.sevin@gmail.com`
- Provider : `duckdns` via token env (`DUCKDNS_TOKEN`)

Bloc TLS commun :
```
(duckdns) {
  tls {
    dns duckdns {env.DUCKDNS_TOKEN}
  }
}
```

## Modèle d’ajout d’un service
1. Ajouter un matcher `@xxx host xxx.pingfr.duckdns.org`
2. Ajouter `handle @xxx { reverse_proxy <IP|container>:<PORT> }`
3. Recharger Caddy (docker restart ou reload)

Exemple :
```
@uc01 host uc01.pingfr.duckdns.org
handle @uc01 {
  reverse_proxy 192.168.1.10:13100
}
```

## Fallback
Un `handle` final renvoie 404 si host inconnu.

## Bonnes pratiques
- Conserver des snapshots `Caddyfile.*` avant modification
- Documenter chaque nouveau service dans ce fichier
- Utiliser des ports fixes par service
