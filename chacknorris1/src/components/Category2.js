import React, { Component } from 'react'



class Category2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
           
        }; 
       /*  this.onClick = this.onClick.bind(this); */
       /*  this.removeFromCart = this.removeFromCart.bind(this); */
    }

    componentDidMount() {
        fetch("https://api.chucknorris.io/jokes/categories")
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
                <ul>
                    {items.map(item => (
                        <li>
                           <button /* onClick={() => this.props.selectCategory(item)} */
onClick={() => this.props.removeFromCart(item)}
                           > {item} </button>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default Category2;
