# Sistema de Control de Inventario para Laboratorios Químicos

## Descripción

Este es un sistema SaaS de control de inventario diseñado para laboratorios químicos, garantizando seguridad, conformidad con normativas internacionales y una gestión eficiente de productos químicos y equipos.

## Tecnologías Utilizadas

- **Backend:** NestJS + Prisma + PostgreSQL
- **Autenticación:** OAuth (Google, GitHub)
- **Seguridad:** Encriptación, Protección de Rutas, Roles de Usuario
- **Despliegue y Desarrollo:** Docker (Base de Datos en contenedor)
- **Arquitectura:** Multi-Tenancy (División lógica por laboratorio/tenant)

## Características Clave

- Registro e inicio de sesión con OAuth (Google, GitHub)
- Gestión de usuarios y roles dentro de cada laboratorio
- Seguridad avanzada para evitar accesos no autorizados
- Multi-tenancy con bases de datos lógicamente separadas
- Uso de Docker para facilitar el desarrollo y la configuración de la base de datos

## Etapas del Proyecto

### **Fase 1: Autenticación y Seguridad** ✅ _(En desarrollo)_

- [x] Implementación de OAuth con Google y GitHub
- [x] Sistema de roles para controlar permisos
- [x] Protección de rutas con `Guards`
- [x] Configuración de Prisma y PostgreSQL en Docker
- [ ] Implementación completa de multi-tenancy

### **Fase 2: Gestión de Inventario** 🔜

- [ ] Creación de la estructura de datos para productos
- [ ] CRUD de productos y stock por laboratorio
- [ ] Alertas de vencimiento y niveles de stock

### **Fase 3: Reportes y Auditoría** 🔜

- [ ] Historial de cambios en el inventario
- [ ] Generación de reportes por laboratorio
- [ ] Exportación de datos en formato CSV/PDF

### **Fase 4: Optimizaciones y Despliegue** 🔜

- [ ] Pruebas unitarias y de integración
- [ ] Implementación de CI/CD
- [ ] Configuración de infraestructura para producción

## Instalación y Configuración

### **Requisitos Previos**

- Node.js 18+
- Docker y Docker Compose
- PostgreSQL (si se usa localmente sin Docker)

### **Pasos para Ejecutar el Proyecto**

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/tuusuario/laboratorio-inventario.git
   cd laboratorio-inventario
   ```

2. Instalar dependencias:

   ```sh
   npm install
   ```

3. Copiar el archivo de variables de entorno:

   ```sh
   cp .env.example .env
   ```

   **Editar el archivo `.env` con las credenciales adecuadas.**

4. Levantar la base de datos con Docker:

   ```sh
   docker-compose up -d
   ```

5. Ejecutar migraciones con Prisma:

   ```sh
   npx prisma migrate dev
   ```

6. Iniciar el servidor:
   ```sh
   npm run start:dev
   ```

### **Endpoints Disponibles**

#### **Autenticación**

- `POST /auth/google` - Iniciar sesión con Google
- `POST /auth/github` - Iniciar sesión con GitHub

#### **Usuarios y Roles**

- `GET /users` - Obtener todos los usuarios
- `PATCH /users/:id/role` - Asignar un rol a un usuario

## Contribución

Si deseas contribuir, sigue estos pasos:

1. Haz un fork del repositorio
2. Crea una nueva rama (`feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`)
4. Sube tu rama y crea un Pull Request

---

🚀 **Desarrollado por:** [José Luis Escalona P.](https://www.linkedin.com/in/jlescalonap/)  
⚗️ **Colaboradores:** Lic. [Gloria Mercedes Escalona Pazo](https://www.linkedin.com/in/gloria-mercedes-escalona-pazo-21064b66/) / [Ing. José Raul Escalona Giordanelli](https://www.linkedin.com/in/raul-escalona-giordanelli-4989b8a6/)
