# Guía para subir tu proyecto a GitHub

Como es la primera vez que usas Git en esta computadora, necesitamos configurarlo y luego conectarlo con tu cuenta `hjaylwin123`.

## Paso 1: Configurar tu identidad (Solo se hace una vez)
Abre la terminal (Ctrl + ñ) y escribe estos dos comandos (reemplaza el correo con el tuyo):

```powershell
git config --global user.name "hjaylwin123"
git config --global user.email "tu_correo@ejemplo.com"
```

## Paso 2: Guardar los cambios locales
Ya intentamos inicializar el repositorio, pero falta confirmar los archivos. Ejecuta:

```powershell
git add .
git commit -m "Subiendo curso de Javascript"
```

## Paso 3: Crear el repositorio en GitHub
1. Ve a [github.com/new](https://github.com/new).
2. En "Repository name" ponle: `Curso_Javascript`.
3. Dale al botón verde **"Create repository"**.

## Paso 4: Conectar y Subir
GitHub te mostrará unos comandos. Copia y pega los que se parecen a estos (asegúrate de usar el link que te den ellos):

```powershell
git branch -M main
git remote add origin https://github.com/hjaylwin123/Curso_Javascript.git
git push -u origin main
```

---

# ¿Cómo actualizarlo después?
Cada vez que hagas cambios en tus archivos y quieras guardarlos en la nube:

1. **Guardar cambios:**
   ```powershell
   git add .
   git commit -m "Descripción de lo que cambiaste"
   ```

2. **Subir a la nube:**
   ```powershell
   git push
   ```
