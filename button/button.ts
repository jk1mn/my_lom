// mam/jk1mn/counter/button/button.ts

class $my_lom_button extends $my_lom_view {
	dom_name() { return 'button' }

	title() { return '' }

	click( e: Event ) {}

	sub() {
		return [ this.title() ]
	}

	event() {
		return {
			click: (e: Event) => this.click(e)
		}
	}
}

class $my_lom_button_minor extends $my_lom_button {
	attr() {
		return {
			'jk1mn_counter_button_minor': true,
		}
	}
}
