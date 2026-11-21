# MediTurno | Sistema de Gestión de Turnos Médicos

Este repositorio contiene el desarrollo integral de **MediTurno**, una plataforma optimizada para la gestión digital de turnos médicos en instituciones de salud, cubriendo desde el análisis inicial de requerimientos hasta el despliegue final en producción.

---

## 🚀 Arquitectura y Tecnologías Utilizadas
El ecosistema completo se encuentra desplegado de forma real y operativa en un servidor virtual de **IBM LinuxONE Cloud**, integrando la totalidad de los recursos obligatorios de la cátedra:

- **Backend y Servidor Web:** Django y Gunicorn (configurado en el puerto HTTP estándar 80).
- **Base de Datos:** SQLite nativo integrado al ORM.
- **Dominio y Red Segura:** Redirección dinámica mediante Duck DNS.
- **Asistente Virtual:** Python-Telegram-Bot (operativo 24/7 en producción mediante el proceso de fondo `nohup`).

---

## 🤖 Funcionamiento del Proyecto Bot
El bot de Telegram está amoldado estrictamente a la **lógica de negocio** de MediTurno utilizando procesamiento de lenguaje natural por coincidencia de palabras clave. Responde simulando de manera inteligente los flujos de los tres actores principales del sistema definidos en las etapas de diseño:

1. **Pacientes:** Orientación inmediata para solicitar, consultar o cancelar turnos médicos en las distintas especialidades (Cardiología, Pediatría, Traumatología, Clínica Médica).
2. **Médicos:** Acceso simulado para la consulta de agendas y horarios de atención en tiempo real.
3. **Administradores:** Herramientas de control para la gestión de profesionales, modificación de horarios y supervisión general.

---

## 📁 Estructura del Repositorio
- `Documentacion/`: Contiene los entregables de las etapas I a V (Plan de trabajo, Requerimientos funcionales, Diagramas UML de Casos de Uso, Clases y Modelo de Base de Datos).
- `Codigo/MediTurno/`: Contiene los archivos de control y lógica del asistente virtual (`main.py` y `responses.py`).
- `backend/`: Configuración estructural del servidor e inicialización del entorno web de Django.

---
*Desarrollado por Aaron Gordillo para la materia Práctica Profesionalizante II (2026).*