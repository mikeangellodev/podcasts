### Next.js

#### Introducción

Nexts.Js es básicamente un pequeño framework para renderizar nuestras vistas desde el servidor (SSR), este fue construido sobre React, Webpack y Babel. Next nos permite arrancar un proyecto de una manera sencilla, siendo de cero configuración y solo teniendo que agregar unos pequeños comandos para tener el proyecto listo y a la orden.

```bash
➜  yarn init

➜  yarn add react react-dom next --exact

➜  mkdir pages
```

- **package.json**

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

#### Styled JSX

- Es mas acorde a React
- Evitamos problemas al escalar
- Escribimos CSS3 como siempre
- Solo aplica al componente
- Tampoco aplica a componentes internos y externos

- pages/index.js

```jsx
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Hello Platzi!</h1>
        <p>Welcome to the Next.js course</p>
        <img src="/static/platzi-logo.png" alt="Platzi"/>

        <style jsx>{`
          h1 {
            color: red;
          }
          :global(p) {
            color: green;
          }
          img {
            max-width: 30%;
            display: block;
            margin: 0 auto;
          }
        `}</style>
        
        <style jsx global>{`
          body {
            background-color: white;
          }
        `}</style>
      </>
    )
  }
}
```

#### 