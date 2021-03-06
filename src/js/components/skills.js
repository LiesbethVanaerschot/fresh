import React, { Component } from 'react';
import classNames from 'classnames';
import data from './../pages/data/about.json';

class Skills extends Component {
    render() {
        let design = Object.keys(data.skills.design.items).map(function(key) {
            return <li className="skills__list__item" key={key} value={key}>{data.skills.design.items[key]}</li>;
        });

        let devOne = Object.keys(data.skills.dev.items).map(function(key) {
            let items;

            if (key < 6) {
                items = <div className="skills__list__item" key={key} value={key}>{data.skills.dev.items[key]}</div>;
            }

            return items;
        });

        let devTwo = Object.keys(data.skills.dev.items).map(function(key) {
            let item;
            if (key > 5) {
                item = <div className="skills__list__item" key={key} value={key}>{data.skills.dev.items[key]}</div>;
            }

            return item;
        });

        const flex4 = classNames('flex-col', 'flex-col-sm--4');
        const flex8 = classNames('flex-col', 'flex-col-sm--8');
        const flexCol = classNames('flex-col', 'flex-col-sm--6');

        return (
            <div className="skills">
                <h3 className="skills__title">{data.skills.title}</h3>
                <div className="flex flex-sm">
                    <div className={flex4}>
                        <div className="skills__design">
                            <h4 className="skills__subtitle">{data.skills.design.title}</h4>
                            <ul className="skills__list">
                                {design}
                            </ul>
                        </div>
                    </div>
                    <div className={flex8}>
                        <div className="skills__dev">
                            <h4 className="skills__subtitle">{data.skills.dev.title}</h4>
                            <div className="flex flex-sm">
                                <div className={flexCol}>
                                    {devOne}
                                </div>
                                <div className={flexCol}>
                                    {devTwo}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
