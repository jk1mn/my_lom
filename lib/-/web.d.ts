declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare let $my_lom_dom_context: typeof globalThis;

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    var $mol_dom: typeof globalThis;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare class $my_lom_view {
    static root: () => typeof $my_lom_view;
    static mount(): void;
    _dom_node: Element;
    dom_node(): Element;
    dom_node_actual(): Element;
    dom_tree(): Element;
    dom_name(): string;
    attr(): {
        [key: string]: string | number | boolean | null;
    };
    event(): {
        [key: string]: (e: Event) => any;
    };
    field(): {
        [key: string]: any;
    };
    sub(): Array<$my_lom_view | Node | string | number | boolean>;
}

declare class $my_lom_button extends $my_lom_view {
    dom_name(): string;
    title(): string;
    click(e: Event): void;
    sub(): string[];
    event(): {
        click: (e: Event) => void;
    };
}
declare class $my_lom_button_minor extends $my_lom_button {
    attr(): {
        jk1mn_counter_button_minor: boolean;
    };
}

declare class $my_lom_input extends $my_lom_view {
    dom_name(): string;
    type(): string;
    _value: string;
    value(next?: string): string;
    event_change(e: Event): void;
    field(): {
        value: string;
    };
    attr(): {
        type: string;
    };
    event(): {
        input: (e: Event) => void;
    };
}

declare class $my_lom_storage {
    static value<Value>(key: string, next?: Value): any;
}

export = $;
//# sourceMappingURL=web.d.ts.map
