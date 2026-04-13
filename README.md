<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:D4537E,100:7F77DD&height=200&section=header&text=CosmoGlowy&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Full%20Stack%20MERN%20%7C%20E-Commerce%20Cosm%C3%A9tique&descAlignY=58&descSize=20"/>

</div>

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-FF5722?style=for-the-badge)](https://cosmo-glowy.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/farah-benhadjali/Cosmoglowy-mern

</div>

---

## 📖 Description

**CosmoGlowy** est une application e-commerce fullstack dédiée aux produits cosmétiques, développée en **MERN Stack** dans le cadre d'un projet académique à **EPI Sousse**, évaluée et validée par jury. Elle offre une expérience d'achat complète côté client et un back-office d'administration complet, avec une API REST sécurisée par **JWT**.

---

## ✨ Fonctionnalités

### 👤 Espace Utilisateur
| Fonctionnalité | Page / Composant |
|---|---|
| Inscription & Connexion | `SignUpPage.jsx` · `SignInPage.jsx` |
| Navigation catalogue | `StorePage.jsx` · `HeroSection.jsx` |
| Fiche produit détaillée | `ProductDetailPage.jsx` · `ProductItem.jsx` |
| Panier & commandes | `CartPage.jsx` · `CartService.js` |
| Suivi commandes | `OrderService.js` |
| Formulaire contact / réclamation | `ContactUsPage.jsx` |
| Déconnexion sécurisée | `LogOutButton.jsx` |
| Page 404 | `NotFoundPage.jsx` |

### 🛠️ Espace Admin
| Fonctionnalité | Page |
|---|---|
| Tableau de bord | `DashboardPage.jsx` |
| Gestion produits | `ProductsPage.jsx` |
| Gestion catégories | `CategoryPage.jsx` |
| Gestion sous-catégories | `SubCategoryPage.jsx` |
| Gestion clients | `ClientPage.jsx` |
| Suivi commandes clients | `ClientOrdersPage.jsx` |
| Gestion réclamations | `ReclamationPage.jsx` |

---

## 🛠️ Stack technique

### Frontend — `front-app/`
```
React.js          → Interface utilisateur SPA
React Router      → Navigation client-side
Axios (api.js)    → Appels API REST
CSS Modules       → Styles isolés par composant
Zustand / Context → Gestion état global (auth-Store.js)
```

### Backend — Racine `/`
```
Node.js           → Environnement d'exécution
Express.js        → Framework API REST
Mongoose          → ODM MongoDB
JWT               → Authentification stateless
Multer            → Upload images produits
Bcrypt            → Hachage mots de passe
Nodemailer        → Emails reset password
CORS              → Sécurité cross-origin
```

### Base de données
```
MongoDB           → Collections : users, clients, products,
                    categories, souscategories, carts,
                    commandes, contacts, resetpass
```

---

## 🗂️ Architecture du projet

```
cosmo-glowy/
│
├── 📁 controllers/
│   ├── authController.js          → Inscription, connexion, logout
│   ├── cartController.js          → Panier & passage de commande
│   ├── categoryController.js      → CRUD catégories
│   ├── clientController.js        → Profil & gestion clients
│   ├── contactController.js       → Formulaire contact & réclamations
│   ├── productController.js       → CRUD produits + upload image
│   ├── resetPassController.js     → Réinitialisation mot de passe
│   └── sousCategoryController.js  → CRUD sous-catégories
│
├── 📁 models/
│   ├── user.js                    → Schéma utilisateur + rôle
│   ├── client.js                  → Profil client étendu
│   ├── product.js                 → Produit (nom, prix, image, stock)
│   ├── category.js                → Catégorie produit
│   ├── souscategory.js            → Sous-catégorie (lié à category)
│   ├── cart.js                    → Panier utilisateur
│   ├── commande.js                → Commande passée
│   ├── contact.js                 → Message / réclamation
│   └── resetpass.js               → Token reset password
│
├── 📁 routes/
│   ├── authRoute.js
│   ├── cartRoute.js
│   ├── categoryRoute.js
│   ├── clientRoute.js
│   ├── contactRoute.js
│   ├── productRoute.js
│   ├── resetPassRoute.js
│   └── sousCategoryRoute.js
│
├── 📁 helpers/
│   ├── authorize.js               → Middleware vérification JWT
│   ├── cartRepository.js          → Logique métier panier
│   └── role.js                    → Définition rôles (admin / client)
│
├── 📁 middleware/
│   ├── multer.js                  → Upload & stockage images
│   └── config.json                → Config middleware
│
├── 📁 front-app/
│   └── src/
│       ├── components/
│       │   ├── HeroSection.jsx    → Bannière principale
│       │   ├── LogOutButton.jsx   → Déconnexion
│       │   └── ProductItem.jsx    → Carte produit réutilisable
│       │
│       ├── pages/
│       │   ├── admin/
│       │   │   ├── AdminLayout.jsx
│       │   │   ├── DashboardPage.jsx
│       │   │   ├── ProductsPage.jsx
│       │   │   ├── CategoryPage.jsx
│       │   │   ├── SubCategoryPage.jsx
│       │   │   ├── ClientPage.jsx
│       │   │   ├── ClientOrdersPage.jsx
│       │   │   └── ReclamationPage.jsx
│       │   ├── HomePage.jsx
│       │   ├── StorePage.jsx
│       │   ├── ProductDetailPage.jsx
│       │   ├── CartPage.jsx
│       │   ├── ContactUsPage.jsx
│       │   ├── SignInPage.jsx
│       │   ├── SignUpPage.jsx
│       │   ├── NotFoundPage.jsx
│       │   ├── Layout.jsx
│       │   └── Footer.jsx
│       │
│       ├── services/
│       │   ├── admin/
│       │   │   ├── CategoryService.js
│       │   │   ├── ClientService.js
│       │   │   ├── OrderService.js
│       │   │   ├── ProductsService.js
│       │   │   └── ReclamationService.js
│       │   ├── CartService.js
│       │   ├── OrderService.js
│       │   ├── ProductService.js
│       │   ├── UserService.js
│       │   └── api.js             → Instance Axios centralisée
│       │
│       └── auth-Store.js          → État global authentification
│
├── databases.js                   → Connexion MongoDB
├── index.js                       → Point d'entrée Express
└── .env                           → Variables d'environnement
```

---

## 📡 API Endpoints

### 🔐 Auth — `/api/auth`
| Méthode | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/register` | Inscription | ❌ |
| `POST` | `/login` | Connexion → JWT | ❌ |
| `POST` | `/logout` | Déconnexion | ✅ |

### 🔑 Reset Password — `/api/resetpass`
| Méthode | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/forgot` | Demande reset | ❌ |
| `POST` | `/reset/:token` | Nouveau mot de passe | ❌ |

### 📦 Produits — `/api/product`
| Méthode | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/` | Tous les produits | ❌ |
| `GET` | `/:id` | Détail produit | ❌ |
| `POST` | `/` | Créer produit + image | 🔒 Admin |
| `PUT` | `/:id` | Modifier produit | 🔒 Admin |
| `DELETE` | `/:id` | Supprimer produit | 🔒 Admin |

### 🗂️ Catégories — `/api/category`
| Méthode | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/` | Toutes les catégories | ❌ |
| `POST` | `/` | Créer | 🔒 Admin |
| `PUT` | `/:id` | Modifier | 🔒 Admin |
| `DELETE` | `/:id` | Supprimer | 🔒 Admin |

### 📂 Sous-catégories — `/api/souscategory`
| Méthode | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/` | Toutes | ❌ |
| `GET` | `/:categoryId` | Par catégorie | ❌ |
| `POST` | `/` | Créer | 🔒 Admin |
| `PUT` | `/:id` | Modifier | 🔒 Admin |
| `DELETE` | `/:id` | Supprimer | 🔒 Admin |

### 🛒 Panier & Commandes — `/api/cart`
| Méthode | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/` | Panier connecté | ✅ |
| `POST` | `/add` | Ajouter article | ✅ |
| `PUT` | `/update/:productId` | Modifier quantité | ✅ |
| `DELETE` | `/remove/:productId` | Supprimer article | ✅ |
| `POST` | `/order` | Passer commande | ✅ |
| `GET` | `/orders` | Historique commandes | ✅ |
| `GET` | `/orders/all` | Toutes les commandes | 🔒 Admin |
| `PUT` | `/orders/:id` | Statut commande | 🔒 Admin |

### 👥 Clients — `/api/client`
| Méthode | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/profile` | Mon profil | ✅ |
| `PUT` | `/profile` | Modifier profil | ✅ |
| `GET` | `/` | Tous les clients | 🔒 Admin |

### 📬 Contact — `/api/contact`
| Méthode | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/` | Envoyer message | ❌ |
| `GET` | `/` | Lire messages | 🔒 Admin |

> ✅ JWT requis &nbsp;|&nbsp; 🔒 Admin = JWT + rôle admin &nbsp;|&nbsp; ❌ Public

---

## 🚀 Installation

### Prérequis
- Node.js v16+
- MongoDB local ou [Atlas](https://cloud.mongodb.com)
- npm

### Backend

```bash
# Cloner le repo
git clone https://github.com/farah-benhadjali/Cosmoglowy-mern.git
cd Cosmoglowy-mern

# Installer les dépendances
npm install

# Lancer le serveur
node index.js
# ou
npx nodemon index.js
```

> Serveur disponible sur **http://localhost:5000**

### Frontend

```bash
cd front-app
npm install
npm start
```

> Application disponible sur **http://localhost:3000**
---

## 🔐 Rôles & Accès

| Rôle | Accès |
|---|---|
| **Visiteur** | Catalogue, recherche, fiche produit, contact |
| **Client** | + Panier, commandes, profil, historique |
| **Admin** | + Dashboard, CRUD produits/catégories, gestion clients & réclamations |

---

## 📸 Captures d'écran

<table align="center">

  <!-- ===== PAGES UTILISATEUR ===== -->
  <tr>
    <td align="center"><b>Accueil</b></td>
    <td align="center"><b>Catalogue</b></td>
    <td align="center"><b>Fiche produit</b></td>
    <td align="center"><b>Contact</b></td>
    <td align="center"><b>Panier</b></td>
  </tr>
  <tr>
    <td><img src="screenshots/home.png" width="180"/></td>
    <td><img src="screenshots/produit.png" width="180"/></td>
    <td><img src="screenshots/détailprod.png" width="180"/></td>
    <td><img src="screenshots/contact.png" width="180"/></td>
    <td><img src="screenshots/panier.png" width="180"/></td>
  </tr>

  <!-- ===== DASHBOARD ADMIN ===== -->
  <tr>
    <td colspan="5" align="center"><br/><b>Dashboard Admin</b></td>
  </tr>
  <tr>
    <td colspan="5" align="center">
      <img src="screenshots/admin.png" width="180"/>
      <img src="screenshots/admin1.png" width="180"/>
      <img src="screenshots/admin2.png" width="180"/>
      <img src="screenshots/admin3.png" width="180"/>
      <img src="screenshots/admin4.png" width="180"/>
      <img src="screenshots/admin5.png" width="180"/>
      <img src="screenshots/admin6.png" width="180"/>
    </td>
  </tr>

  <!-- ===== GESTION PRODUITS ===== -->
  <tr>
    <td colspan="5" align="center"><br/><b>Gestion Produits</b></td>
  </tr>
  <tr>
    <td colspan="5" align="center">
      <img src="screenshots/lprod.png" width="180"/>
      <img src="screenshots/lprod1.png" width="180"/>
      <img src="screenshots/lprod2.png" width="180"/>
      <img src="screenshots/lprod3.png" width="180"/>
      <img src="screenshots/lprod4.png" width="180"/>
      <img src="screenshots/lprod5.png" width="180"/>
    </td>
  </tr>

</table>
---

## 📄 Licence

Ce projet est sous licence **MIT** — voir le fichier [LICENSE](LICENSE).

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7F77DD,100:D4537E&height=120&section=footer"/>

Développé avec 💄 par [Farah Benhadjali](https://github.com/farah-benhadjali)

*Projet académique — EPI Sousse · MERN Stack · 2024*

</div>
