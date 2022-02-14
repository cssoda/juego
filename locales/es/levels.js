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
  {
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Select the last element inside of another element",
    doThis : "Select the small apple and the lemon",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <lemon class="small"/>`
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Select an element by its order in another element",
    doThis : "Select the 3rd plate",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Nth Last Child Selector",
    helpTitle: "Select an element by its order in another element, counting from the back",
    doThis : "Select the 1st tray",
    selector : "tray:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
    examples : [
      '<strong>:nth-last-child(2)</strong> selects all second-to-last child elements.'
    ],
    boardMarkup: `
    <plate/>
    <tray/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <tray/>
    `
  },
  {
    selectorName: "First of Type Selector",
    helpTitle: "Select the first element of a specific type",
    doThis : "Select first apple",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Selects the first element of that type within another element.",
    examples : [
      '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Nth of Type Selector",
    doThis: "Select all even plates",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "Nth-of-type Selector with Formula",
    doThis: "Select every 2nd plate, starting from the 3rd",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <lemon class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Only of Type Selector",
    helpTitle: "Select elements that are the only ones of their type within their parent element",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Select the apple on the middle plate",
    help : "Selects the only element of its type within another element.",
    examples : [
      '<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <lemon />
    </plate>
    `
  },
  {
    selectorName: "Last of Type Selector",
    helpTitle: "Select the last element of a specific type",
    doThis : "Select the last apple and orange",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples : [
      '<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.',
      '<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <lemon />
    <lemon />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "Empty Selector",
    helpTitle: "Select elements that don't have children",
    doThis : "Select the empty bentos",
    selector : "tray:empty",
    syntax: ":empty",
    help : "Selects elements that don't have any other elements inside of them.",
    examples : [
      '<strong>div:empty</strong> selects all empty <tag>div</tag> elements.'
    ],
    boardMarkup:`
    <tray/>
    <tray>
      <lemon class="small"/>
    </tray>
    <plate/>
    <tray/>`
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all elements that don't match the negation selector",
    doThis : "Select the big apples",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <lemon class="small" />
    `
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Select the items for someone",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
    examples : [
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>[type]</strong> selects all elements that have a <strong>type="anything"</strong>. attribute'
    ],
    boardMarkup:`
    <tray><apple class="small"/></tray>
    <apple for="Ethan"/>
    <plate for="Alice"><lemon/></plate>
    <tray for="Clara"><orange/></tray>
    <lemon/>`
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Select the plates for someone",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
    examples : [
      '<strong>[value]</strong> selects all elements that have a <strong>value="anything"</strong> attribute.',
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute'
    ],
    boardMarkup:`
    <plate for="Sarah"><lemon/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <tray for="Steve"><orange/></tray>
    `
  },
  {
    selectorName: "Attribute Value Selector",
    helpTitle: "Select all elements that have a specific attribute value",
    doThis : "Select Vitaly's meal",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Attribute selectors are case sensitive, each character must match exactly.",
    examples : [
      '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <tray for="Albina"><apple /></tray>
    <tray for="Vitaly"><orange/></tray>
    <lemon/>
    `
  },
  {
    selectorName: "Attribute Starts With Selector",
    helpTitle: "Select all elements with an attribute value that starts with specific characters",
    doThis : "Select the items for names that start with 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><lemon/></plate>
    <tray for="Sarah"><apple class="small"/></tray>
    <tray for="Mary"><orange/></tray>
    `
  },
  {
    selectorName: "Attribute Ends With Selector",
    helpTitle: "Select all elements with an attribute value that ends with specific characters",
    doThis : "Select the items for names that end with 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.',
    ],
    boardMarkup:`
    <apple class="small"/>
    <tray for="Hayato"><lemon/></tray>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <lemon class="small"/>
    `
  },
  {
    selectorName: "Attribute Wildcard Selector",
    helpTitle: "Select all elements with an attribute value that contains specific characters anywhere",
    syntax: '[attribute*="value"]',
    doThis : "Select the meals for names that contain 'obb'",
    selector : '[for*="obb"]',
    help : 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> selects all image elements that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <tray for="Robbie"><apple /></tray>
    <tray for="Timmy"><lemon /></tray>
    <tray for="Bobby"><orange /></tray>
    `
  }
];
