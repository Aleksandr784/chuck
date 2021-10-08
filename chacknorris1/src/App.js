import React from "react";
import data from "./data.json";

import hh from "./images/chackimg.png";
import Quotes2 from "./components/Quotes2";
import Category2 from "./components/Category2";
import Quotes3 from "./components/Quotes3";


class App extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      categoryTitle: data.categoryTitle,
      categoryName: "dev",
      frase: ""
    }

  }


  selectCategory = (categoryName) => {

    this.setState({
      categoryName: categoryName
    })
  };
  frase = (childFrase) => {
    this.setState({ frase: childFrase })
    console.log(childFrase)
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <div>
          <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="Chuck avatar" />
        </div>
         <div>
          Chuck Norris
         </div>
        </header>
        <main>
          <div>
            <div>
              <div className="title"><h1>Categories</h1></div>
            </div>

            <div className="categories" >
              <Category2 removeFromCart={this.removeFromCart}
                categoryName={this.state.categoryName}
                frase={this.frase}
              />
            </div>
            <div className="chackimg">
              <img src={hh} alt="Chack Norries" />
            </div>
            <div className="quotes">
              {/*    <Quotes2 categoryName = {this.state.categoryName} 
         removeFromCart={this.removeFromCart} /> */}
              {/*  <Quotes3 categoryName = {this.state.categoryName} />   */}
              <div className="quotes-content">
              <span> {this.state.frase} </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
