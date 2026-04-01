# 📦 Sistema de Usuários

## 📌 Sobre

Projeto simples de CRUD de usuários usando:

* Backend: Node.js + Express
* Banco: PostgreSQL
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
npm install express cors pg swagger-ui-express
npm install nodemon --save-dev
```

---

### Frontend

```bash
flutter pub get
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
flutter run
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
