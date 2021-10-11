import React from "react";
import data from "./data.json";
import chackimg from "./images/chackimg.png";
import Categories from "./components/Categories";


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
              <div className="title">Categories</div>
            </div>
            <div className="categories" >
              <Categories  categoryName={this.state.categoryName}
                frase={this.frase}
              />
            </div>
            <div className="chackimg">
              <img src={chackimg} alt="Chack Norries" />
            </div>
            <div className="quotes">    
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
