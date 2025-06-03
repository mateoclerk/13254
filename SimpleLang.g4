grammar SimpleLang;

programa      : instrucciones ;
instrucciones : instruccion+ ;
instruccion   : bucle ;

bucle     : DO LBRACE sentencia RBRACE WHILE LPAREN condicion RPAREN SEMI ;
sentencia : (salida | terminar)+ ;

salida    : PUTS LPAREN CADENA RPAREN SEMI ;
terminar  : BREAK SEMI ;
condicion : ZERO | ONE ;

DO     : 'do' ;
LBRACE : '{' ;
RBRACE : '}' ;
WHILE  : 'while' ;
LPAREN : '(' ;
RPAREN : ')' ;
SEMI   : ';' ;
PUTS   : 'puts' ;
BREAK  : 'break' ;
ZERO   : '0' ;
ONE    : '1' ;

CADENA : '"' (~["\r\n])* '"' ;
WS     : [ \t\r\n]+ -> skip ;
