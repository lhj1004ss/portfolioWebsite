import React, { Component } from "react";
import github from "../images/github.png";
import gadget from "../images/gadget.png";
import resort from "../images/resort.png";
import cocktailbar from "../images/cocktailbar.png";
import background from "../images/background.jpg";
import Card from "./Card";

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Cocktail Bar",
          subTitle: "Creating cocktailbar website using react and json",
          imgSrc: cocktailbar,
          link: "https://react-project-cocktailbar-hyojelee.netlify.app/",
        },
        {
          id: 1,
          title: "Resort",
          subTitle: "Creating resort website with react and responsive web",
          imgSrc: resort,
          link: "https://react-project-resort-hyojelee.netlify.com/",
        },
        {
          id: 2,
          title: "Portfolio Website",
          subTitle: "My portfolio website using react and responsive web",
          imgSrc: background,
          link: "https://react-project-portfoliowebsite-hyojelee.netlify.app/",
        },
        {
          id: 3,
          title: "Gadget Store",
          subTitle: "Creating gadget store using API and react",
          imgSrc: gadget,
          link: "https://react-project-gadgetstore-hyojelee.netlify.app/",
        },
        {
          id: 4,
          title: "Gihub Repository",
          subTitle: "Code Storage",
          imgSrc: github,
          link: "https://github.com/lhj1004ss/",
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          key={item.id}
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
        ></Card>
      );
    });
  };

  render() {
    return <div>{this.makeItems(this.state.items)}</div>;
  }
}

export default Carousel;
