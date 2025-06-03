// Generated from SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
const serializedATN = [4,1,13,53,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,4,1,20,8,1,11,1,12,1,21,1,2,1,2,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,4,4,38,8,4,11,4,12,4,39,1,5,
1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,
1,0,10,11,47,0,16,1,0,0,0,2,19,1,0,0,0,4,23,1,0,0,0,6,25,1,0,0,0,8,37,1,
0,0,0,10,41,1,0,0,0,12,47,1,0,0,0,14,50,1,0,0,0,16,17,3,2,1,0,17,1,1,0,0,
0,18,20,3,4,2,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,
22,3,1,0,0,0,23,24,3,6,3,0,24,5,1,0,0,0,25,26,5,1,0,0,26,27,5,2,0,0,27,28,
3,8,4,0,28,29,5,3,0,0,29,30,5,4,0,0,30,31,5,5,0,0,31,32,3,14,7,0,32,33,5,
6,0,0,33,34,5,7,0,0,34,7,1,0,0,0,35,38,3,10,5,0,36,38,3,12,6,0,37,35,1,0,
0,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,9,1,0,0,0,
41,42,5,8,0,0,42,43,5,5,0,0,43,44,5,12,0,0,44,45,5,6,0,0,45,46,5,7,0,0,46,
11,1,0,0,0,47,48,5,9,0,0,48,49,5,7,0,0,49,13,1,0,0,0,50,51,7,0,0,0,51,15,
1,0,0,0,3,21,37,39];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, "'do'", "'{'", "'}'", "'while'", "'('", 
                            "')'", "';'", "'puts'", "'break'", "'0'", "'1'" ];
    static symbolicNames = [ null, "DO", "LBRACE", "RBRACE", "WHILE", "LPAREN", 
                             "RPAREN", "SEMI", "PUTS", "BREAK", "ZERO", 
                             "ONE", "CADENA", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.instrucciones();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruccion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(SimpleLangParser.DO);
	        this.state = 26;
	        this.match(SimpleLangParser.LBRACE);
	        this.state = 27;
	        this.sentencia();
	        this.state = 28;
	        this.match(SimpleLangParser.RBRACE);
	        this.state = 29;
	        this.match(SimpleLangParser.WHILE);
	        this.state = 30;
	        this.match(SimpleLangParser.LPAREN);
	        this.state = 31;
	        this.condicion();
	        this.state = 32;
	        this.match(SimpleLangParser.RPAREN);
	        this.state = 33;
	        this.match(SimpleLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLangParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 8:
	                this.state = 35;
	                this.salida();
	                break;
	            case 9:
	                this.state = 36;
	                this.terminar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 39; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8 || _la===9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLangParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(SimpleLangParser.PUTS);
	        this.state = 42;
	        this.match(SimpleLangParser.LPAREN);
	        this.state = 43;
	        this.match(SimpleLangParser.CADENA);
	        this.state = 44;
	        this.match(SimpleLangParser.RPAREN);
	        this.state = 45;
	        this.match(SimpleLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleLangParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(SimpleLangParser.BREAK);
	        this.state = 48;
	        this.match(SimpleLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleLangParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.DO = 1;
SimpleLangParser.LBRACE = 2;
SimpleLangParser.RBRACE = 3;
SimpleLangParser.WHILE = 4;
SimpleLangParser.LPAREN = 5;
SimpleLangParser.RPAREN = 6;
SimpleLangParser.SEMI = 7;
SimpleLangParser.PUTS = 8;
SimpleLangParser.BREAK = 9;
SimpleLangParser.ZERO = 10;
SimpleLangParser.ONE = 11;
SimpleLangParser.CADENA = 12;
SimpleLangParser.WS = 13;

SimpleLangParser.RULE_programa = 0;
SimpleLangParser.RULE_instrucciones = 1;
SimpleLangParser.RULE_instruccion = 2;
SimpleLangParser.RULE_bucle = 3;
SimpleLangParser.RULE_sentencia = 4;
SimpleLangParser.RULE_salida = 5;
SimpleLangParser.RULE_terminar = 6;
SimpleLangParser.RULE_condicion = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(SimpleLangParser.DO, 0);
	};

	LBRACE() {
	    return this.getToken(SimpleLangParser.LBRACE, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	RBRACE() {
	    return this.getToken(SimpleLangParser.RBRACE, 0);
	};

	WHILE() {
	    return this.getToken(SimpleLangParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(SimpleLangParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(SimpleLangParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(SimpleLangParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitBucle(this);
		}
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminarContext);
	    } else {
	        return this.getTypedRuleContext(TerminarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitSentencia(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_salida;
    }

	PUTS() {
	    return this.getToken(SimpleLangParser.PUTS, 0);
	};

	LPAREN() {
	    return this.getToken(SimpleLangParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(SimpleLangParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(SimpleLangParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(SimpleLangParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitSalida(this);
		}
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(SimpleLangParser.BREAK, 0);
	};

	SEMI() {
	    return this.getToken(SimpleLangParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitTerminar(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_condicion;
    }

	ZERO() {
	    return this.getToken(SimpleLangParser.ZERO, 0);
	};

	ONE() {
	    return this.getToken(SimpleLangParser.ONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCondicion(this);
		}
	}


}




SimpleLangParser.ProgramaContext = ProgramaContext; 
SimpleLangParser.InstruccionesContext = InstruccionesContext; 
SimpleLangParser.InstruccionContext = InstruccionContext; 
SimpleLangParser.BucleContext = BucleContext; 
SimpleLangParser.SentenciaContext = SentenciaContext; 
SimpleLangParser.SalidaContext = SalidaContext; 
SimpleLangParser.TerminarContext = TerminarContext; 
SimpleLangParser.CondicionContext = CondicionContext; 
