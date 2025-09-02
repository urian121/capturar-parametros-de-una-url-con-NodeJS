# Capturar Parámetros de URL con Node.js

Proyecto de ejemplo que demuestra cómo extraer y procesar parámetros de una URL usando Node.js y Express.

## 🚀 Instalación

```bash
npm init -y
npm i express
```

## 📋 Funcionalidad

El proyecto muestra cómo:
- Parsear una URL completa con el módulo `url` nativo de Node.js
- Extraer componentes individuales (host, puerto, pathname, query params)
- Acceder a parámetros específicos de la query string

## 🔧 Uso

```bash
node app.js
```

El servidor se ejecuta en `http://localhost:5300` y procesa la URL de ejemplo:
`http://localhost:8080/index.php?edad=25&sexo=masculino&profesion=developer`

## 📊 Salida de Ejemplo

```javascript
// Componentes de la URL
q.host        // 'localhost:8080'
q.port        // '8080'
q.hostname    // 'localhost'
q.pathname    // '/index.php'
q.search      // '?edad=25&sexo=masculino&profesion=developer'

// Parámetros individuales
q.query.edad      // '25'
q.query.sexo      // 'masculino'
q.query.profesion // 'developer'
```

### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

## No olvides SUSCRIBIRTE 👍