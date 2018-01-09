import { observable, action, computed } from 'mobx';

class Modals {
    @observable modalOpen = false;
    @observable modalContentKey = '';

    @action.bound handleModalOpen(event, item) {
        event.preventDefault();
        this.modalOpen = true;
        this.modalContentKey = item;
        document.body.classList.add('overflow');
    }

    @action.bound handleModalClose(event) {
        event.preventDefault();
        this.modalOpen = false;
        this.modalContentKey = '';
        document.body.classList.remove('overflow');
    }
}

export default new Modals();
