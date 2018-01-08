import { observable, action, computed } from 'mobx';

class Filtering {
    @observable active = 'everything';
    @observable activeList = {
        'everything': true,
        'web': false,
        'graphics': false
    };

    @action.bound handleFilter(event, value) {
        event.preventDefault();
        this.active = value;
    }

    @computed get activeFilter() {
        console.log(this.active);
        return this.active;
    }
}

export default new Filtering();

