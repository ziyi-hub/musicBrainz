# Projet "musicBrainz"

## Équipes
- Tania OLIVIA
- Ziyi WANG

## Build Setup

``` bash
# install dependencies
npm install

# lancer le programme et tapez localhost:8080 sur un navigateur
npm run dev

# build for production with minification
npm run build

# api de titres
https://musicbrainz.org/ws/2/cdstub/?query=title:Doo&fmt=json

#api d'artistes
https://musicbrainz.org/ws/2/artist/?query=artist:fred&fmt=json

# api d'info titre
https://musicbrainz.org/ws/2/cdstub/?query=discid:zsXyqGWvw0zF024A_saTokxIMzo-&fmt=json

#api d'info artiste
https://musicbrainz.org/ws/2/artist/?query=artist:fred&fmt=json

```
# User-Agent String
Pour User-Agent, il n'est pas compatible avec Chrome. Ça donne l'erreur "Refused to set unsafe header user-agent". Par contre, il est compatible avec Safari.

