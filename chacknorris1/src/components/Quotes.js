import React, { Component } from 'react'

const PATH_BASE = 'https://api.chucknorris.io/jokes/random?category=';


class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            categoryName: this.props.categoryName
        };
    }


    componentDidMount() {
        fetch(PATH_BASE + `${this.props.categoryName}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Примітка: важливо обробляти помилки саме тут,
                // а не в блоці catch (), щоб не перехоплювати
                // виключення з помилок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Помилка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Завантаження...</div>;
        } else {
            return (
                <div>

                    {items.value}
                    {this.props.categoryName}
                </div>
            );
        }
    }
}

export default Quotes;




