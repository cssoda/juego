var levels = [
  {
    doThis : "Selecciona los <k>platos<t>plates</t></k>",
    selector : "plate",
    selectorName : "Selector de Tipo",
    helpTitle : "Selecciona elementos según su Tipo",
    syntax : "A",
    help : "Selecciona todos los elementos de Tipo <strong>A</strong>.<br/>Tipo se refiere al tipo de tag, de modo que <tag>div</tag>, <tag>p</tag> y <tag>ul</tag> son todos diferentes <strong>tipos</strong> de elementos.",
    examples : [
      '<strong>div</strong> selecciona todos los elementos de tipo <tag>div</tag>.',
      '<strong>p</strong> selecciona todos los elementos <tag>p</tag> (párrafos).',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Selecciona las <k>bandejas<t>trays</t></k>",
    selector : "tray",
    selectorName : "Selector de Tipo",
    helpTitle : "Selecciona elementos según su Tipo",
    syntax : "A",
    help : "Selecciona todos los elementos de Tipo <strong>A</strong>.<br/>Tipo se refiere al tipo de tag, de modo que <tag>div</tag>, <tag>p</tag> y <tag>ul</tag> son todos diferentes <strong>tipos</strong> de elementos.",
    examples : [
      '<strong>div</strong> selecciona todos los elementos de tipo <tag>div</tag>.',
      '<strong>p</strong> selecciona todos los elementos <tag>p</tag> (párrafos).',
    ],
    boardMarkup: `
    <tray/>
    <plate/>
    <tray/>
    `
  },
  {
    doThis : "Selecciona el plato <k>elegante<t>fancy</t></k>",
    selector : "#fancy",
    selectorName: "Selector por ID",
    helpTitle: "Selecciona a un elemento dado su ID",
    syntax: "#id",
    help : 'Selecciona al único elemento que tiene un <strong>id</strong> específico.<br/>También puedes combinar el Selector de ID con el Selector de Tipo.',
    examples : [
      '<strong>#cool</strong> selecciona al elemento que sea que tenga su <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selecciona al tag <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <tray/>
    `
  },
  {
    doThis : "Selecciona la <k>manzana<t>apple</t></k> que está en el plato",
    selector : "plate apple",
    selectorName : "Selector Descendiente",
    helpTitle: "Selecciona un elemento dentro de otro elemento dado",
    syntax: "A&nbsp;&nbsp;B",
    help : "Selecciona a todos los <strong>B</strong> que estén contenidos dentro de <strong>A</strong>.<br/><strong>B</strong> se considera <em>descendiente</em> porque está dentro de otro elemento (o <em>desciende</em> de él)",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> selecciona a todos los elementos <tag>strong</tag> que estén dentro de cualquier <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selecciona a cualquier elemento <tag>span</tag> que esté contenido dentro del elemento con <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <tray/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Selecciona al <k>limón<t>lemon</t></k> en el plato <k>elegante<t>fancy</t></k>",
    selector : "#fancy lemon",
    helpTitle: "Combina los Selectores por ID y Descendiente",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Puedes combinar cualquier selector con el selector descendiente.',
    examples : [
      '<strong>#cool&nbsp;span</strong> selecciona todos los elementos <tag>span</tag> que estén dentro del elemento con <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <tray>
    <orange/>
    </tray>
    <plate id="fancy">
      <lemon/>
    </plate>
    <plate>
      <lemon/>
    </plate>
    `
  },
  {
    doThis : "Selecciona las manzanas <k>pequeñas<t>small</t></k>",
    selector : ".small",
    selectorName: "Selector de Clases",
    helpTitle: "Selecciona elementos según su(s) clase(s)",
    syntax: ".classname",
    help : 'El selector de clases selecciona todos los elementos que tengan esa clase en su atributo de clase (class).<br/>Los Elementos sólo pueden tener un ID, pero pueden tener muchas clases.',
    examples : [
    '<strong>.neato</strong> selecciona todos los elementos que tengan la clase "neato", como en: <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Selecciona las <k>naranjas<t>orange</t></k> <k>pequeñas<t>small</t></k>",
    selector : "orange.small",
    helpTitle: "Combina el Selector de Clases",
    syntax: "A.className",
    help : 'Puedes combinar el selector de clases con otros selectores, como por ejemplo el Selector de Tipo.',
    examples : [
      '<strong>ul.important</strong> selecciona todos los elementos <tag>ul</tag> que tienen <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selecciona al elemento con <strong>id="big"</strong> que además tenga <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <tray>
      <orange class="small"/>
    </tray>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Selecciona las <k>naranjas<t>oranges</t></k> <k>pequeñas<t>small</t></k> de las <k>bandejas<t>trays</t></k>",
    selector : "tray orange.small",
    helpTitle: "Vamos! &#128170; Que sí puedes hacerlo!..",
    syntax: "A ponerle empeño!",
    help : 'Combina lo que has aprendido en los niveles anteriores para resolver éste!',
    boardMarkup : `
    <tray>
      <orange/>
    </tray>
    <orange class="small"/>
    <tray>
      <orange class="small"/>
    </tray>
    <tray>
      <apple class="small"/>
    </tray>
    <tray>
      <orange class="small"/>
    </tray>
    `
  },
  {
    doThis : "Selecciona todos los platos y <k>bandejas<t>trays</t></k>",
    selector : "plate,tray",
    selectorName : "Lista de Selectores (por coma)",
    helpTitle: "Combina, selectores, con... comas!",
    syntax : "A, B",
    help : 'Selecciona todos los elementos que coincidan con los selectores <strong>A</strong> y <strong>B</strong>.<br/>Puedes combinar cualquier par de selectores distintos de esta forma, e incluso puedes especificar más de 2 (todos separados por coma).',
    examples: [
    '<strong>p, .fun</strong> selecciona todos los elementos <tag>p</tag> junto con todos los elementos que tengan la clase <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> selecciona (al mismo tiempo) a todos los elementos de tipo <tag>a</tag>, <tag>p</tag> y <tag>div</tag>'
    ],
    boardMarkup : `
    <lemon class="small"/>
    <lemon/>
    <plate>
      <lemon/>
    </plate>
    <tray>
      <lemon/>
    </tray>
    <plate>
      <lemon/>
    </plate>
    <lemon/>
    <lemon class="small"/>
    `
  },
  {
    doThis : "Selecciona todos los objetos y frutas!",
    selector : "*",
    selectorName:  "El Selector Universal",
    helpTitle: "Permite seleccionar todos los elementos!",
    syntax : "*",
    help : 'Puedes seleccionar a todos los elementos de tu html con el selector universal!<br/>Combinado con un selector descendiente, nos permite seleccionar todos los elementos (sin importar tu tipo ni clase) que se encuentren dentro de un elemento dado',
    examples : [
      '<strong>*</strong> selecciona absolutamente a todos los elementos de la página.',
      '<strong>p *</strong> selecciona a todos los elementos que se encuentren dentro de cualquier <tag>p</tag>.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <tray/>
    <tray>
      <orange/>
    </tray>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Selecciona a todo lo que esté en un plato",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combinando el Selector Universal",
    help : 'Esto selecciona a todos los elementos que se encuentren dentro de <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> selecciona a todos los elementos que se encuentren dentro de cualquier <tag>p</tag>.',
      '<strong>ul.fancy *</strong> selecciona todos los elementos que estén dentro de todos los <tag>ul class="fancy"</tag>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <lemon/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Selecciona las manzanas que están<br/>al lado de un plato",
    selector : "plate + apple",
    selectorName: "Selector de 'Hermanos Adyacentes",
    helpTitle: "Selecciona al elemento que siga directamente después de otro elemento.",
    syntax : "A + B",
    help : "Esto selecciona a todos los elementos <strong>B</strong> que estén directamente a continuación de un elemento <strong>A</strong>." + 
      "<br/>Por cada elemento <strong>A</strong> que se encuentre en el HTML, se seleccionará sólo un elemento <strong>B</strong> (si existe uno a su lado y al mismo nivel)." + 
      "<br/>En el código HTML de este nivel, todos los elementos que tienen la misma 'indentación' están en el mismo nivel y se consideran 'hermanos'.",
    examples : [
      '<strong>p + .intro</strong> selecciona a todos los elementos con <strong>class="intro"</strong> que sigan directamente a continuación de (y al mismo nivel que) cualquier <tag>p</tag>',
      '<strong>div + a</strong> selecciona a todos los elementos <tag>a</tag> que sigan directamente a un <tag>div</tag>'
    ],
    boardMarkup : `
    <tray>
      <apple class="small"/>
    </tray>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    doThis : "Selecciona todos los <k>limones<t>lemon</t></k> al lado de la <k>bandeja<t>tray</t></k>",
    selector : "tray ~ lemon",
    selectorName: "Selector de Hermanos Generales",
    helpTitle: "Selecciona varios elementos que vengan después de otro elemento",
    syntax: "A ~ B",
    help : "Puedes seleccionar a todos los 'hermanos' de un elemento que vengan después de este." +
      "<br/>Es similar al Selector Adyacente <strong>A + B</strong> excepto por que éste toma a todos los elementos <strong>B</strong> que vengan después del <strong>A</strong> (en lugar de sólo uno).",
    examples : [
      '<strong>A ~ B</strong> selecciona a todos los <strong>B</strong> que sigan después de <strong>A</strong>',
      '<strong>h3 ~ p</strong> selecciona a todos los párrafos <tag>p</tag> que vengan después de un título <tag>h3</tag> (y que se encuentren al mismo nivel de indentación)'
    ],
    boardMarkup : `
    <lemon/>
    <tray>
      <orange class="small"/>
    </tray>
    <lemon class="small"/>
    <lemon/>
    <plate>
      <lemon/>
    </plate>
    <plate>
      <lemon class="small"/>
    </plate>
    `
  },
  {
    doThis : "Selecciona la manzana que está<br/>directamente sobre el plato",
    selector : "plate > apple",
    selectorName: "Selector de Hijo",
    syntax: "A&nbsp;>&nbsp;B",
    helpTitle: "Selecciona a los hijos de un elemento<br/>(sólo al primer nivel de profundidad)",
    help : "Puedes seleccionar los elementos <strong>B</strong> que sean hijos directos de cualquier elemento <strong>A</strong>." +
      "<br><br/>Un elemento hijo viene siendo cualquier elemento que se encuentre contenido directamente dentro de otro elemento." + 
      "<br>Los demás elementos que están más 'adentro' en niveles más profundos dentro del elemento <strong>A</stron> se llaman 'descendientes'.",
    examples : [
      '<strong>A > B</strong> selecciona todos los <strong>B</strong> que sean hijos directos de <strong>A</strong>',
      '<strong>body > div</strong> selecciona a los bloques <tag>div</tag> "principales" que ponemos inmediatamente dentro del <tag>body</tag>'
    ],
    boardMarkup: `
    <plate>
      <tray>
        <apple/>
      </tray>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    doThis : "Selecciona la <k>naranja<t>orange</t></k> que está más arriba",
    selector : "plate :first-child",
    selectorName: 'Pseudo-clase del "Primer Hijo"',
    helpTitle: "Selecciona al primer elemento hijo dentro de otro elemento",
    syntax: ":first-child",
    help : "Puedes seleccionar al primer elemento hijo de un elemento dado." + 
      "<br/>Como ya vimos, un elemento hijo es cualquier elemento que esté directamente contenido dentro de otro elemento." +
      "<br/>Puedes combinar este selector de pseudo-clase con otros selectores.",
    examples : [
      '<strong>:first-child</strong> selecciona a todos los elementos que estén de primeros dentro de cualquier contenedor.',
      '<strong>p:first-child</strong> selecciona cualquier elemento de tipo párrafo que sea el primer hijo de algún contenedor.',
      '<strong>div p:first-child</strong> selecciona a todos los elementos <tag>p</tag> que estén de primero dentro de algún <tag>div</tag>.'
    ],
    boardMarkup :`
    <tray/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <lemon class="small" />
    `
  },
  {
    doThis : "Selecciona la <k>manzana<t>apple</t></k> y el <k>limón<t>lemon</t></k> que están<br/>solos en sus platos",
    selector : "plate :only-child",
    selectorName: "Pseudo-clase de 'Hijo Único' ",
    helpTitle: "Selecciona a un elemento que sea el único elemento dentro de otro.",
    syntax: ":only-child",
    help : "Puedes seleccionar cualquier elemento que sea el único elemento dentro de otro.",
    examples : [
      '<strong>span:only-child</strong> selecciona los elementos <tag>span</tag> que sean el único hijo de cualquier otro elemento.',
      '<strong>ul li:only-child</strong> selecciona los items de lista de toda lista <tag>ul</tag> que tenga sólo un único item <tag>li</tag>.'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <lemon />
    </plate>
    <tray>
      <lemon />
    </tray>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <lemon class="small"/>
    `
  },
];
