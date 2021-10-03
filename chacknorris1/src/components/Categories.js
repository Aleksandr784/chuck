import React, { Component } from 'react'

export default class categoryis extends Component {
    render() {
        return (
            <div>
                <ul className="categories">
                    {this.props.categoryTitle.map(e => (
                        <li><button>{e}</button></li>
                    ))}
                </ul>
            </div>
        )
    }
}
