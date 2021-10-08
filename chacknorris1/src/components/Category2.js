import React, { Component } from 'react'
import axios from 'axios';


class Category2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
           frase: ""
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
 async fetchFraseByCategory (category)  {
    const result = await axios(`https://api.chucknorris.io/jokes/random?category=${category}`)
    console.log (result)
       this.setState({
           frase:result.data.value})


        return result
}
 handleClick (category) {
      this.fetchFraseByCategory(category).then((frase)=>this.props.frase(frase.data.value))
    
}

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Помилка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Завантаження...</div>;
        } else {
            return (
                <ul className="category">
                    {items.map(category => (
                        <li key={category}>
                           <button onClick={() => this.handleClick(category)}
                           > {category} </button>
                        </li>
                    ))}
               </ul> 
            );
        }
    }
}

export default Category2;
