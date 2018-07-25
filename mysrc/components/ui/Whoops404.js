import React from 'react';

import '../../stylesheets/Whoops404.scss'

export default class Whoops404 extends React.Component {
    render() {
        return (
            <div className="C404">
            <div className="Whoops404">
                    <img src={'/assets/img/404cat.svg'} />
                    <a className="error404link btn btn-info btn-sm" href={"/"}>返回RainyDev</a>
            </div>
            </div>
        );
    }
}