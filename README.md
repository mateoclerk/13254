Este proyecto implementa un analizador léxico y sintáctico que reconoce y procesa estructuras repetitivas del tipo do { ... } while (condición); utilizando ANTLR4 y JavaScript (Node.js). Funcionalidades del analizador

Verifica si el código fuente cumple con la gramática definida para ciclos do-while.

Muestra una tabla con los tokens y lexemas identificados por el lexer.

Genera y muestra el árbol de derivación (sintáctico) del programa.

Permite analizar múltiples archivos de entrada, e informa si cada uno es válido o contiene errores.

Utiliza un visitor personalizado para recorrer el árbol y extender semánticas si se desea.
 Cómo ejecutar el proyecto

Asegurarse de tener Node.js instalado.

Colocar los archivos de entrada en el mismo directorio con nombres:

    InputCorrecto1.txt

    InputCorrecto2.txt

    InputIncorrecto1.txt

    InputIncorrecto2.txt

Ejecutar el comando:

npm start

El programa procesará cada archivo e imprimirá:

Tabla de tokens y lexemas.

Árbol de derivación (si es válido).

Errores de sintaxis (si existen).
