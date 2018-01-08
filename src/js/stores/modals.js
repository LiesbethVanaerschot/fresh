import { observable, action, computed } from 'mobx';

class Modals {
    @observable modalOpen = false;
}

export default new Modals();
