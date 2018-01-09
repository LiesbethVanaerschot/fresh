import React, { Component } from 'react';
import classNames from 'classnames';
import { observer} from 'mobx-react';

import data from './../../pages/data/work.json';

import modal from './../../stores/modals';

@observer class Modal extends Component {
    render() {
        const modalClasses = classNames('modal', {'open': modal.modalOpen});
        if (modal.modalContentKey !== '') {
            console.log(data.projects[modal.modalContentKey].images);
        }
        return (
            <div className={modalClasses}>
                <div className="modal__content">
                    <div className="modal__header">
                        <button className="modal__close" onClick={(event) => modal.handleModalClose(event)}>
                        </button>
                    </div>
                    <div className="modal__body">
                        <div className="image-stack">
                            {(modal.modalContentKey !== '') ?
                                Object.keys(data.projects[modal.modalContentKey].images).map(function(key) {
                                    return <div key={key} className={classNames('image-stack__item', `image-stack__item--${key}`)}>
                                        <img src={`images/projects/project_${modal.modalContentKey}/${data.projects[modal.modalContentKey].images[key]}`} alt=""/></div>;
                                }) : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
