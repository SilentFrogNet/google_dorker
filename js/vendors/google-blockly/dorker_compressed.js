// Do not edit this file; automatically generated by build.py.
'use strict';


Blockly.Dorker=new Blockly.Generator("Dorker");Blockly.Dorker.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
Blockly.Dorker.ORDER_ATOMIC=0;Blockly.Dorker.ORDER_NEW=1.1;Blockly.Dorker.ORDER_MEMBER=1.2;Blockly.Dorker.ORDER_FUNCTION_CALL=2;Blockly.Dorker.ORDER_INCREMENT=3;Blockly.Dorker.ORDER_DECREMENT=3;Blockly.Dorker.ORDER_BITWISE_NOT=4.1;Blockly.Dorker.ORDER_UNARY_PLUS=4.2;Blockly.Dorker.ORDER_UNARY_NEGATION=4.3;Blockly.Dorker.ORDER_LOGICAL_NOT=4.4;Blockly.Dorker.ORDER_TYPEOF=4.5;Blockly.Dorker.ORDER_VOID=4.6;Blockly.Dorker.ORDER_DELETE=4.7;Blockly.Dorker.ORDER_DIVISION=5.1;
Blockly.Dorker.ORDER_MULTIPLICATION=5.2;Blockly.Dorker.ORDER_MODULUS=5.3;Blockly.Dorker.ORDER_SUBTRACTION=6.1;Blockly.Dorker.ORDER_ADDITION=6.2;Blockly.Dorker.ORDER_BITWISE_SHIFT=7;Blockly.Dorker.ORDER_RELATIONAL=8;Blockly.Dorker.ORDER_IN=8;Blockly.Dorker.ORDER_INSTANCEOF=8;Blockly.Dorker.ORDER_EQUALITY=9;Blockly.Dorker.ORDER_BITWISE_AND=10;Blockly.Dorker.ORDER_BITWISE_XOR=11;Blockly.Dorker.ORDER_BITWISE_OR=12;Blockly.Dorker.ORDER_LOGICAL_AND=13;Blockly.Dorker.ORDER_LOGICAL_OR=14;
Blockly.Dorker.ORDER_CONDITIONAL=15;Blockly.Dorker.ORDER_ASSIGNMENT=16;Blockly.Dorker.ORDER_COMMA=17;Blockly.Dorker.ORDER_NONE=99;
Blockly.Dorker.ORDER_OVERRIDES=[[Blockly.Dorker.ORDER_FUNCTION_CALL,Blockly.Dorker.ORDER_MEMBER],[Blockly.Dorker.ORDER_FUNCTION_CALL,Blockly.Dorker.ORDER_FUNCTION_CALL],[Blockly.Dorker.ORDER_MEMBER,Blockly.Dorker.ORDER_MEMBER],[Blockly.Dorker.ORDER_MEMBER,Blockly.Dorker.ORDER_FUNCTION_CALL],[Blockly.Dorker.ORDER_LOGICAL_NOT,Blockly.Dorker.ORDER_LOGICAL_NOT],[Blockly.Dorker.ORDER_MULTIPLICATION,Blockly.Dorker.ORDER_MULTIPLICATION],[Blockly.Dorker.ORDER_ADDITION,Blockly.Dorker.ORDER_ADDITION],[Blockly.Dorker.ORDER_LOGICAL_AND,
Blockly.Dorker.ORDER_LOGICAL_AND],[Blockly.Dorker.ORDER_LOGICAL_OR,Blockly.Dorker.ORDER_LOGICAL_OR]];
Blockly.Dorker.init=function(a){Blockly.Dorker.definitions_=Object.create(null);Blockly.Dorker.functionNames_=Object.create(null);Blockly.Dorker.variableDB_?Blockly.Dorker.variableDB_.reset():Blockly.Dorker.variableDB_=new Blockly.Names(Blockly.Dorker.RESERVED_WORDS_);var b=[];a=a.getAllVariables();if(a.length){for(var c=0;c<a.length;c++)b[c]=Blockly.Dorker.variableDB_.getName(a[c].name,Blockly.Variables.NAME_TYPE);Blockly.Dorker.definitions_.variables="var "+b.join(", ")+";"}};
Blockly.Dorker.finish=function(a){var b=[],c;for(c in Blockly.Dorker.definitions_)b.push(Blockly.Dorker.definitions_[c]);delete Blockly.Dorker.definitions_;delete Blockly.Dorker.functionNames_;Blockly.Dorker.variableDB_.reset();return b.join("\n\n")+"\n\n\n"+a};Blockly.Dorker.scrubNakedValue=function(a){return a+";\n"};Blockly.Dorker.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Dorker.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();(d=Blockly.utils.wrap(d,Blockly.Dorker.COMMENT_WRAP-3))&&(c=a.getProcedureDef?c+("/**\n"+Blockly.Dorker.prefixLines(d+"\n"," * ")+" */\n"):c+Blockly.Dorker.prefixLines(d+"\n","// "));for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Dorker.allNestedComments(d))&&(c+=Blockly.Dorker.prefixLines(d,
"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Dorker.blockToCode(e);return c+b+e};
Blockly.Dorker.getAdjusted=function(a,b,c,d,e){c=c||0;e=e||Blockly.Dorker.ORDER_NONE;a.workspace.options.oneBasedIndex&&c--;var g=a.workspace.options.oneBasedIndex?"1":"0";a=0<c?Blockly.Dorker.valueToCode(a,b,Blockly.Dorker.ORDER_ADDITION)||g:0>c?Blockly.Dorker.valueToCode(a,b,Blockly.Dorker.ORDER_SUBTRACTION)||g:d?Blockly.Dorker.valueToCode(a,b,Blockly.Dorker.ORDER_UNARY_NEGATION)||g:Blockly.Dorker.valueToCode(a,b,e)||g;if(Blockly.isNumber(a))a=parseFloat(a)+c,d&&(a=-a);else{if(0<c){a=a+" + "+c;
var f=Blockly.Dorker.ORDER_ADDITION}else 0>c&&(a=a+" - "+-c,f=Blockly.Dorker.ORDER_SUBTRACTION);d&&(a=c?"-("+a+")":"-"+a,f=Blockly.Dorker.ORDER_UNARY_NEGATION);f=Math.floor(f);e=Math.floor(e);f&&e>=f&&(a="("+a+")")}return a};Blockly.Dorker.logic={};Blockly.Dorker.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&":"|",c="&"==b?Blockly.Dorker.ORDER_LOGICAL_AND:Blockly.Dorker.ORDER_LOGICAL_OR,d=Blockly.Dorker.valueToCode(a,"A",c);a=Blockly.Dorker.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.Dorker.logic_negate=function(a){var b=Blockly.Dorker.ORDER_LOGICAL_NOT;return["-"+(Blockly.Dorker.valueToCode(a,"BOOL",b)||"true"),b]};
Blockly.Dorker.logic_null=function(a){return["null",Blockly.Dorker.ORDER_ATOMIC]};Blockly.Dorker.texts={};Blockly.Dorker.text=function(a){return[Blockly.JavaScript.quote_(a.getFieldValue("TEXT")),Blockly.Dorker.ORDER_ATOMIC]};
Blockly.Dorker.text_join=function(a){switch(a.itemCount_){case 0:return["''",Blockly.Dorker.ORDER_ATOMIC];case 1:return["String("+(Blockly.Dorker.valueToCode(a,"ADD0",Blockly.Dorker.ORDER_NONE)||"''")+")",Blockly.Dorker.ORDER_FUNCTION_CALL];case 2:var b=Blockly.Dorker.valueToCode(a,"ADD0",Blockly.Dorker.ORDER_NONE)||"''";a=Blockly.Dorker.valueToCode(a,"ADD1",Blockly.Dorker.ORDER_NONE)||"''";return["String("+b+") + String("+a+")",Blockly.Dorker.ORDER_ADDITION];default:b=Array(a.itemCount_);for(var c=
0;c<a.itemCount_;c++)b[c]=Blockly.Dorker.valueToCode(a,"ADD"+c,Blockly.Dorker.ORDER_COMMA)||"''";a="["+b.join(",")+"].join('')";return[a,Blockly.Dorker.ORDER_FUNCTION_CALL]}};Blockly.Dorker.text_append=function(a){var b=Blockly.Dorker.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.Dorker.valueToCode(a,"TEXT",Blockly.Dorker.ORDER_NONE)||"''";return b+" = String("+b+") + String("+a+");\n"};
Blockly.Dorker.text_length=function(a){return[(Blockly.Dorker.valueToCode(a,"VALUE",Blockly.Dorker.ORDER_FUNCTION_CALL)||"''")+".length",Blockly.Dorker.ORDER_MEMBER]};Blockly.Dorker.text_isEmpty=function(a){return["!"+(Blockly.Dorker.valueToCode(a,"VALUE",Blockly.Dorker.ORDER_MEMBER)||"''")+".length",Blockly.Dorker.ORDER_LOGICAL_NOT]};
Blockly.Dorker.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Dorker.valueToCode(a,"FIND",Blockly.Dorker.ORDER_NONE)||"''";b=(Blockly.Dorker.valueToCode(a,"VALUE",Blockly.Dorker.ORDER_MEMBER)||"''")+"."+b+"("+c+")";return a.workspace.options.oneBasedIndex?[b+" + 1",Blockly.Dorker.ORDER_ADDITION]:[b,Blockly.Dorker.ORDER_FUNCTION_CALL]};
Blockly.Dorker.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.Dorker.valueToCode(a,"VALUE","RANDOM"==b?Blockly.Dorker.ORDER_NONE:Blockly.Dorker.ORDER_MEMBER)||"''";switch(b){case "FIRST":return[c+".charAt(0)",Blockly.Dorker.ORDER_FUNCTION_CALL];case "LAST":return[c+".slice(-1)",Blockly.Dorker.ORDER_FUNCTION_CALL];case "FROM_START":return a=Blockly.Dorker.getAdjusted(a,"AT"),[c+".charAt("+a+")",Blockly.Dorker.ORDER_FUNCTION_CALL];case "FROM_END":return a=Blockly.Dorker.getAdjusted(a,
"AT",1,!0),[c+".slice("+a+").charAt(0)",Blockly.Dorker.ORDER_FUNCTION_CALL];case "RANDOM":return[Blockly.Dorker.provideFunction_("textRandomLetter",["function "+Blockly.Dorker.FUNCTION_NAME_PLACEHOLDER_+"(text) {","  var x = Math.floor(Math.random() * text.length);","  return text[x];","}"])+"("+c+")",Blockly.Dorker.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt).";};
Blockly.Dorker.text.getIndex_=function(a,b,c){return"FIRST"==b?"0":"FROM_END"==b?a+".length - 1 - "+c:"LAST"==b?a+".length - 1":c};
Blockly.Dorker.text_getSubstring=function(a){var b=Blockly.Dorker.valueToCode(a,"STRING",Blockly.Dorker.ORDER_FUNCTION_CALL)||"''",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2");if("FIRST"!=c||"LAST"!=d)if(b.match(/^'?\w+'?$/)||"FROM_END"!=c&&"LAST"!=c&&"FROM_END"!=d&&"LAST"!=d){switch(c){case "FROM_START":var e=Blockly.Dorker.getAdjusted(a,"AT1");break;case "FROM_END":e=Blockly.Dorker.getAdjusted(a,"AT1",1,!1,Blockly.Dorker.ORDER_SUBTRACTION);e=b+".length - "+e;break;case "FIRST":e="0";
break;default:throw"Unhandled option (text_getSubstring).";}switch(d){case "FROM_START":a=Blockly.Dorker.getAdjusted(a,"AT2",1);break;case "FROM_END":a=Blockly.Dorker.getAdjusted(a,"AT2",0,!1,Blockly.Dorker.ORDER_SUBTRACTION);a=b+".length - "+a;break;case "LAST":a=b+".length";break;default:throw"Unhandled option (text_getSubstring).";}b=b+".slice("+e+", "+a+")"}else{e=Blockly.Dorker.getAdjusted(a,"AT1");a=Blockly.Dorker.getAdjusted(a,"AT2");var g=Blockly.Dorker.text.getIndex_,f={FIRST:"First",LAST:"Last",
FROM_START:"FromStart",FROM_END:"FromEnd"};b=Blockly.Dorker.provideFunction_("subsequence"+f[c]+f[d],["function "+Blockly.Dorker.FUNCTION_NAME_PLACEHOLDER_+"(sequence"+("FROM_END"==c||"FROM_START"==c?", at1":"")+("FROM_END"==d||"FROM_START"==d?", at2":"")+") {","  var start = "+g("sequence",c,"at1")+";","  var end = "+g("sequence",d,"at2")+" + 1;","  return sequence.slice(start, end);","}"])+"("+b+("FROM_END"==c||"FROM_START"==c?", "+e:"")+("FROM_END"==d||"FROM_START"==d?", "+a:"")+")"}return[b,Blockly.Dorker.ORDER_FUNCTION_CALL]};
Blockly.Dorker.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[a.getFieldValue("CASE")];a=Blockly.Dorker.valueToCode(a,"TEXT",b?Blockly.Dorker.ORDER_MEMBER:Blockly.Dorker.ORDER_NONE)||"''";return[b?a+b:Blockly.Dorker.provideFunction_("textToTitleCase",["function "+Blockly.Dorker.FUNCTION_NAME_PLACEHOLDER_+"(str) {","  return str.replace(/\\S+/g,","      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});","}"])+"("+
a+")",Blockly.Dorker.ORDER_FUNCTION_CALL]};Blockly.Dorker.text_trim=function(a){var b={LEFT:".replace(/^[\\s\\xa0]+/, '')",RIGHT:".replace(/[\\s\\xa0]+$/, '')",BOTH:".trim()"}[a.getFieldValue("MODE")];return[(Blockly.Dorker.valueToCode(a,"TEXT",Blockly.Dorker.ORDER_MEMBER)||"''")+b,Blockly.Dorker.ORDER_FUNCTION_CALL]};Blockly.Dorker.text_print=function(a){return"window.alert("+(Blockly.Dorker.valueToCode(a,"TEXT",Blockly.Dorker.ORDER_NONE)||"''")+");\n"};
Blockly.Dorker.text_prompt_ext=function(a){var b="window.prompt("+(a.getField("TEXT")?Blockly.Dorker.quote_(a.getFieldValue("TEXT")):Blockly.Dorker.valueToCode(a,"TEXT",Blockly.Dorker.ORDER_NONE)||"''")+")";"NUMBER"==a.getFieldValue("TYPE")&&(b="parseFloat("+b+")");return[b,Blockly.Dorker.ORDER_FUNCTION_CALL]};Blockly.Dorker.text_prompt=Blockly.Dorker.text_prompt_ext;
Blockly.Dorker.text_count=function(a){var b=Blockly.Dorker.valueToCode(a,"TEXT",Blockly.Dorker.ORDER_MEMBER)||"''";a=Blockly.Dorker.valueToCode(a,"SUB",Blockly.Dorker.ORDER_NONE)||"''";return[Blockly.Dorker.provideFunction_("textCount",["function "+Blockly.Dorker.FUNCTION_NAME_PLACEHOLDER_+"(haystack, needle) {","  if (needle.length === 0) {","    return haystack.length + 1;","  } else {","    return haystack.split(needle).length - 1;","  }","}"])+"("+b+", "+a+")",Blockly.Dorker.ORDER_SUBTRACTION]};
Blockly.Dorker.text_replace=function(a){var b=Blockly.Dorker.valueToCode(a,"TEXT",Blockly.Dorker.ORDER_MEMBER)||"''",c=Blockly.Dorker.valueToCode(a,"FROM",Blockly.Dorker.ORDER_NONE)||"''";a=Blockly.Dorker.valueToCode(a,"TO",Blockly.Dorker.ORDER_NONE)||"''";return[Blockly.Dorker.provideFunction_("textReplace",["function "+Blockly.Dorker.FUNCTION_NAME_PLACEHOLDER_+"(haystack, needle, replacement) {",'  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")','                 .replace(/\\x08/g,"\\\\x08");',
"  return haystack.replace(new RegExp(needle, 'g'), replacement);","}"])+"("+b+", "+c+", "+a+")",Blockly.Dorker.ORDER_MEMBER]};Blockly.Dorker.text_reverse=function(a){return[(Blockly.Dorker.valueToCode(a,"TEXT",Blockly.Dorker.ORDER_MEMBER)||"''")+".split('').reverse().join('')",Blockly.Dorker.ORDER_MEMBER]};