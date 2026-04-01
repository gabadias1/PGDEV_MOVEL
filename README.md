# 📦 Sistema de Usuários

## 📌 Sobre

Projeto simples de CRUD de usuários usando:

* Backend: Node.js + Express
* Banco: Docker --> PostgreSQL
* Frontend: Flutter

---

## ⚙️ Dependências

### Backend

Instalar tudo:

```bash
npm install
```

Caso precise instalar manualmente:

```bash
npm install express cors swagger-ui-express
npm install nodemon --save-dev
```

```
Instalar Docker Compose
Logo após instalar, suba ele usando "docker-compose up -d"
```

---

### Frontend

```bash
flutter pub get
```
Caso não tiver permissão ou não funcionar, use :

```bash
Caso não tiver permissão ou não funcionar, use :

"cd ~ git clone https://github.com/flutter/flutter.git -b stable"
e
"echo 'export PATH="$PATH:$HOME/flutter/bin"' >> ~/.bashrc
source ~/.bashrc"
```

---

## 🗄️ Banco de Dados

```sql
CREATE DATABASE teste;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100)
);
```

---

## ▶️ Como rodar

### Backend

```bash
npm run dev
```

---

### Frontend

```bash
flutter run -d chrome
```

---

## 📡 API

* GET /usuarios
* POST /usuarios
* PUT /usuarios/:id
* DELETE /usuarios/:id

---

## 🎯 Objetivo

Praticar CRUD e integração entre front, back e banco.
