#!/usr/bin/env node
"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
let $my_lom_dom_context;

;
"use strict";
$my_lom_dom_context = self;

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";
class $my_lom_view {
    static root;
    static mount() {
        const node = $my_lom_dom_context.document.querySelector('#root');
        if (!node)
            return;
        const View = this.root();
        const obj = new View;
        node.replaceWith(obj.dom_tree());
        setInterval(() => obj.dom_tree(), 100);
    }
    _dom_node = null;
    dom_node() {
        if (this._dom_node)
            return this._dom_node;
        const node = $my_lom_dom_context.document.createElement(this.dom_name());
        for (const [name, fn] of Object.entries(this.event())) {
            node.addEventListener(name, fn);
        }
        node.setAttribute('view', this.constructor.name);
        return this._dom_node = node;
    }
    dom_node_actual() {
        const node = this.dom_node();
        for (const [name, val] of Object.entries(this.attr())) {
            node.setAttribute(name, String(val));
        }
        for (const [name, val] of Object.entries(this.field())) {
            ;
            node[name] = val;
        }
        return node;
    }
    dom_tree() {
        const node = this.dom_node_actual();
        const node_list = this.sub().map(node => {
            if (node === null)
                return null;
            return node instanceof $my_lom_view ? node.dom_tree() : String(node);
        });
        $.$mol_dom_render_children(node, node_list);
        return node;
    }
    dom_name() {
        return 'div';
    }
    attr() {
        return {};
    }
    event() {
        return {};
    }
    field() {
        return {};
    }
    sub() {
        return [];
    }
}

;
"use strict";
Promise.resolve(() => $my_lom_view.mount());

;
"use strict";
class $my_lom_button extends $my_lom_view {
    dom_name() { return 'button'; }
    title() { return ''; }
    click(e) { }
    sub() {
        return [this.title()];
    }
    event() {
        return {
            click: (e) => this.click(e)
        };
    }
}
class $my_lom_button_minor extends $my_lom_button {
    attr() {
        return {
            'jk1mn_counter_button_minor': true,
        };
    }
}

;
"use strict";
class $my_lom_input extends $my_lom_view {
    dom_name() { return 'input'; }
    type() { return 'text'; }
    _value = '';
    value(next = this._value) {
        return this._value = next;
    }
    event_change(e) {
        this.value(e.target.value);
    }
    field() {
        return {
            value: this.value(),
        };
    }
    attr() {
        return {
            type: this.type(),
        };
    }
    event() {
        return {
            input: (e) => this.event_change(e),
        };
    }
}

;
"use strict";
class $my_lom_storage {
    static value(key, next) {
        if (next === undefined)
            return JSON.parse(localStorage.getItem(key) ?? 'null');
        if (next === null)
            localStorage.removeItem(key);
        else
            localStorage.setItem(key, JSON.stringify(next));
        return next;
    }
}

;
"use strict";
setInterval(() => {
    $my_lom_dom_context.document?.documentElement.setAttribute('my_lom_theme', new Date().getSeconds() < 30 ? 'light' : 'dark');
}, 1_000);


//# sourceMappingURL=web.js.map
