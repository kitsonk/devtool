import Injector from '@dojo/widget-core/Injector';
import Store from '@dojo/stores/Store';

export default class StateInjector extends Injector {
	constructor(payload: Store) {
		super(payload);
		payload.on('invalidate', () => {
			this.emit({ type: 'invalidate' });
		});
	}
}
