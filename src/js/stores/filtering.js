import { observable, action, computed } from 'mobx';

class Filtering {
    @observable visibleItems = 3;
    @observable moreBtn = true;
    @observable active = 'everything';
    @observable activeList = [
        {
            'id': '1',
            'type': 'web'
        },
        {
            'id': '2',
            'type': 'graphics'
        },
        {
            'id': '3',
            'type': 'web'
        },
        {
            'id': '4',
            'type': 'graphics'
        },
        {
            'id': '5',
            'type': 'web'
        },
        {
            'id': '6',
            'type': 'graphics'
        }
    ];

    @observable selectedList = [];

    @action.bound handleFilter(event, value) {
        event.preventDefault();

        let newActiveList = [];

        this.active = value;

        this.activeList.map(function(key) {
            if (key.type === value) {
                newActiveList.push(key);
            }
        });

        if (this.active !== 'everything' && this.visibleItems >= newActiveList.length) {
            this.moreBtn = false;
            this.visibleItems = 3;
        } else if (this.active === 'everything' && this.visibleItems >= this.activeList) {
            this.moreBtn = false;
            this.visibleItems = 3;
        } else if (this.active === 'everything' && this.visibleItems <= this.activeList.length) {
            this.moreBtn = true;
        }

        this.selectedList = newActiveList;
    }

    @action.bound handleShow(event) {
        event.preventDefault();

        this.visibleItems += 3;

        if (this.activeList.length <= this.visibleItems) {
            this.moreBtn = false;
        }
    }

    @computed get activeFilter() {
        return this.active;
    }

    @computed get activeItems() {
        return this.activeList;
    }

    @computed get selectedItems() {
        return this.selectedList;
    }

    @computed get itemsToShow() {
        return this.visibleItems;
    }

    @computed get showMoreBtn() {
        return this.moreBtn;
    }
}

export default new Filtering();
