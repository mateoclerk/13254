import SimpleLangLexer from "./generated/SimpleLangLexer.js";
import SimpleLangParser from "./generated/SimpleLangParser.js";
import CustomSimpleLangVisitor from "./CustomSimpleLangVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";

const archivos = [
    "InputCorrecto1.txt",
    "InputCorrecto2.txt",
    "InputIncorrecto1.txt",
    "InputIncorrecto2.txt"
];

async function analizarArchivo(nombreArchivo) {
    console.log(`\n======= Analizando archivo: ${nombreArchivo} =======`);

    let input;
    try {
        input = fs.readFileSync(nombreArchivo, "utf8");
    } catch (err) {
        console.error(`❌ No se pudo leer el archivo: ${nombreArchivo}`);
        return;
    }

    // Paso 1: Generar tokens con el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new SimpleLangLexer(inputStream);
    const tokens = lexer.getAllTokens();

    if (tokens.length === 0) {
        console.error("⚠ No se generaron tokens. Verifica el contenido del archivo.");
        return;
    }

    // Mostrar tabla de tokens
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema                         | Token          |");
    console.log("--------------------------------------------------");
    for (let token of tokens) {
        const lexema = token.text;
        const tokenType = SimpleLangLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        console.log(`| ${lexema.padEnd(30)} | ${tokenType.padEnd(14)} |`);
    }
    console.log("--------------------------------------------------");

    // Paso 2: Volver a crear el lexer para el parser (porque getAllTokens los consume)
    inputStream = CharStreams.fromString(input);
    lexer = new SimpleLangLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SimpleLangParser(tokenStream);

    // Agregar listener de errores personalizado
    let errores = 0;
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
            errores++;
            console.error(`❌ Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
        }
    });

    // Paso 3: Parsear y generar árbol
    try {
        const tree = parser.programa();

        if (errores === 0) {
            console.log("\n✅ Entrada válida según la gramática.");
            const cadenaTree = tree.toStringTree(parser.ruleNames);
            console.log("\nÁrbol de derivación:");
            console.log(cadenaTree);

            // Visitar el árbol
            const visitor = new CustomSimpleLangVisitor();
            visitor.visit(tree);
        } else {
            console.log("\n❌ La entrada contiene errores sintácticos.");
        }
    } catch (e) {
        console.error("❌ Error fatal al parsear:", e.message);
    }
}

async function main() {
    for (const archivo of archivos) {
        await analizarArchivo(archivo);
    }
}

main();
