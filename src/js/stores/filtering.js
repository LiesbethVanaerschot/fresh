import { observable, action, computed } from 'mobx';

class Filtering {
    @observable active = {
        everything: true,
        web: false,
        graphics: false
    }

    @action.bound handleFilter(event, value) {
        event.preventDefault();
        Object.keys(this.active).map((keyName, keyIndex) => {
            if (value === keyName) {
                this.active[value] = true;
            } else {
                this.active[keyName] = false;
            }
        });
    }

    @computed get activeFilter() {
        Object.keys(this.active)
            .filter(keyName => this.active[keyName] === true)
            .map((keyName, keyIndex) => {
                return keyName;
            });
    }
}

export default new Filtering();

