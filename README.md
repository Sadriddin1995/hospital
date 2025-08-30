# Hospital NestJS (TypeORM + SQLite)

This is a sample **Hospital Management REST API** built with **NestJS**, **TypeORM** and **SQLite**.
Features:
- Hospital, Patient, Worker, Appointment entities (full CRUD)
- Appointment references `doctor` (Worker with role DOCTOR) and `patient`
- Swagger documentation at `/api`
- Postman collection included
- Mermaid ER diagram (can be imported to DrawSQL manually)

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Run in development:
```bash
npm run start:dev
```

3. Open Swagger:
```
http://localhost:3000/api
```

## GitHub

I cannot create the GitHub repository for you automatically. To push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - hospital nestjs"
# create repository on GitHub web or use `gh` CLI:
# gh repo create your-username/hospital-nestjs --public --source=. --remote=origin --push
git remote add origin https://github.com/Sadriddin1995/hospital.git
git branch -M main
git push -u origin main
```

## Postman

A Postman collection JSON is included at `postman/Hospital.postman_collection.json`.

## DrawSQL / ERD

A mermaid ER diagram is included at `drawsql/erd.mmd`. You can paste that into DrawSQL or Mermaid live editors.


