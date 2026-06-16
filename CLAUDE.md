# Sérén'IT — Landing page

Page d'atterrissage (landing page) pour **Sérén'IT**, une plateforme de
cybersécurité. Site **statique**, intégré à la main en HTML / CSS / JS, déployé
automatiquement sur **GitHub Pages** à chaque push.

> Slogan : _« Voyez clair, avancez serein. »_

---

## 🎨 Maquette (source de vérité)

Le design fait foi. Toute intégration doit s'y conformer le plus fidèlement
possible.

- **Figma :** https://www.figma.com/design/d37IQPmXwdApCN9lOUwHfb/S%C3%A9r%C3%A9n-It?node-id=185-2564

Si tu n'as pas encore accès au fichier, demande une invitation avant de commencer.

---

## 🧱 Stack technique

- **HTML5** sémantique (`<header>`, `<main>`, `<section>`, `<footer>`…)
- **CSS vanilla** + variables CSS (custom properties) — voir `style.css`
- **JavaScript vanilla** (aucun framework, aucun build)

Pas de Node, pas de bundler, pas de transpilation : ce qui est dans le repo est
exactement ce qui est servi en ligne. On garde les choses simples.

---

## 📁 Structure du projet

```
.
├── index.html          # Page principale
├── style.css           # Styles (variables CSS centralisées dans :root)
├── script.js           # JavaScript
├── assets/
│   ├── images/         # Images, logos, illustrations
│   └── fonts/          # Polices auto-hébergées (si besoin)
├── .github/workflows/
│   └── deploy.yml       # CI : déploiement GitHub Pages
├── .nojekyll           # Désactive Jekyll sur GitHub Pages
└── CLAUDE.md           # Ce fichier
```

---

## ⚠️ Règle n°1 : chemins relatifs

Le site est servi sous un **sous-chemin** :
`https://owlnext-fr.github.io/serenit-landing-page/`

Il faut donc **toujours** utiliser des chemins **relatifs**, jamais absolus :

```html
<!-- ✅ BON -->
<link rel="stylesheet" href="./style.css" />
<img src="./assets/images/logo.svg" alt="Sérén'IT" />

<!-- ❌ MAUVAIS — cassé en ligne (cherche à la racine du domaine) -->
<link rel="stylesheet" href="/style.css" />
<img src="/assets/images/logo.svg" alt="Sérén'IT" />
```

C'est le piège n°1 sur GitHub Pages : ça marche en local mais c'est cassé en
ligne.

---

## 🎯 Design tokens (à extraire du Figma)

Le bloc `:root` de `style.css` est **volontairement vide** : à toi de le remplir
en relevant les valeurs depuis Figma.

Dans Figma : sélectionne un élément → panneau de droite → tu y vois la couleur
(`Fill`), la police et la taille (`Text`), les espacements, les rayons.

Centralise tout dans `:root`, puis réutilise via `var(...)` :

```css
:root {
  --color-primary: #xxxxxx; /* bleu marine */
  --color-accent: #xxxxxx; /* vert lime */
  --font-heading: "...", sans-serif;
}

.hero {
  background: var(--color-primary);
}
```

Ne mets jamais une couleur en dur deux fois : si tu la réécris, c'est qu'elle
devrait être une variable.

---

## 🗂️ Sections de la landing (d'après la maquette)

À intégrer dans cet ordre dans `index.html` :

1. **Header** — logo + navigation (Accueil, Fonctions, Prix, Clients, Contact) + bouton
2. **Hero** — titre « Voyez clair, avancez serein. » + visuel
3. **Approche** — « Quatre étapes, une seule plateforme » (4 cartes : Évaluer, Protéger, Réagir, Piloter)
4. **Posture / citation** — bandeau avec carousel
5. **Tarifs** — 3 offres (Gratuit, Pack Essentiel, Pack Croissance)
6. **Comparatif** — tableau de fonctionnalités
7. **Témoignages** — 3 avis clients
8. **Contact** — formulaire « Parlons de votre sécurité »
9. **CTA final** + **Footer** (Contact, Légal, Newsletter)

---

## 🧑‍💻 Conventions de code

- **HTML** : balises sémantiques, attribut `alt` sur chaque image, `lang="fr"`.
- **CSS** : noms de classes en `kebab-case` (`.hero-title`), une responsabilité
  par classe. Mobile-first de préférence.
- **JS** : `const`/`let` (jamais `var`), code dans `script.js`.
- **Accessibilité** : contrastes suffisants, navigation au clavier, labels sur
  les champs de formulaire.
- **Indentation** : 2 espaces.

---

## 🔀 Workflow Git

On travaille **directement sur `main`** : chaque push déclenche un déploiement.

```bash
git pull            # toujours récupérer les changements des autres AVANT
# ... tes modifications ...
git add .
git commit -m "feat: intègre la section hero"
git pull --rebase   # récupère ce qui a été poussé entre-temps
git push            # déclenche le déploiement
```

> 💡 Comme tout le monde push sur `main`, fais des `git pull` fréquents pour
> limiter les conflits, et des commits petits et fréquents.

---

## 🚀 Déploiement (GitHub Pages)

À **chaque push sur `main`**, le workflow `.github/workflows/deploy.yml` publie
le site. Suivi en direct dans l'onglet **Actions** du repo.

- **URL du site en ligne :** https://owlnext-fr.github.io/serenit-landing-page/

### Activation initiale (à faire UNE fois par un admin du repo)

`Settings` → `Pages` → **Build and deployment** → **Source : GitHub Actions**.

Sans ça, le workflow échouera au déploiement.

---

## 💻 Tester en local

Pas de build : ouvre simplement `index.html` dans le navigateur. Mais pour un
comportement identique à la prod (chemins relatifs, etc.), sers le dossier via
un petit serveur local :

```bash
# Python (souvent déjà installé)
python3 -m http.server 8000
# puis ouvre http://localhost:8000

# OU avec l'extension "Live Server" de VS Code (clic droit > Open with Live Server)
```
