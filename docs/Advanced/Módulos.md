# Modulos

Los módulos de JavaScript son una forma de organizar y estructurar el código. Permiten a los desarrolladores dividir su código en piezas más pequeñas y reutilizables. Puede pensar en ellos como piezas de código más pequeñas que puede importar y exportar entre diferentes partes de una aplicación.

## Uso
Para reutilizar la funcionalidad de un archivo en otro, el código debe exportarse en un archivo e importarse en otro.

> `file1.js`
>```javascript
>let name = "Muhammad Ali"
>```

> `file2.js`
>```javascript
>function generateUserCertificate(userName, date): 
>    // generate user certificate. 
>const myName = name
>generateUserCertificate(myName, "2023-09-04")
>```
Para usar la variable "name" dentro del segundo archivo , debe exportarlo desde el primer archivo e importarlo al segundo archivo.

### Tipos de exports en Javascript

#### Default exports

```javascript
function getAllUser()
export default getAllUser

// Otra opción para declarar el export default
export default function getAllUser():
```
#### Named exports
Las exportaciones con nombre le permiten compartir varios módulos desde un archivo, a diferencia de las exportaciones predeterminadas que solo pueden tener uno en un archivo.

No necesitará usar la sintaxis "predeterminada" cuando use exportaciones con nombre. Las exportaciones con nombre también deben estar encerradas entre corchetes si está exportando más de un módulo.

```javascript
const name = "Muhammad Ali"

export name;

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

export function sayHello(user) {
  alert(`Hello, ${user}!`);
}
```
Se puede **exportar multiples variables a la vez**
```javascript
const age = 404;

function sayHola(user) {
  alert(`Hola, ${user}!`);
}

export {age, sayHola};
```

Se pueden **combinar los exports por defecto y con nombre**
```javascript
const age = 404;

const name = "Muhammad Alli"

export default function sayHello(user) {
  alert(`Hello, ${user}!`);
}

export {age, name};
```

Se pueden **renombrar exports**
```javascript
export function sayHello(user) {
  alert(`Hello, ${user}!`);
}

export { sayHello as greet };
```

### Tipos de imports en Javascript

#### Default import
```javascript
import getAllUser from "getuser.js";
```

#### How to Import a Single Named Export
Here is how to import a single named export.
```javascript
import {name} from "username.js"
```

#### How to Import Multiple Named Exports
Here is how to export multiple named exports.
```javascript
 import {name, sayHello} from 'user.js'
 ```

#### How to Rename Imports
You can also rename exports before using them in a JavaScript file. 
```javascript
import {userName as name, greet as sayHello} from 'user.js'
```

#### How to Import an Entire Module
```javascript
import * as User from 'user.js'
```

Here is how you can use it in the module exported to:
```javascript
import * as User from 'user.js'

User.name
User.sayHi
```