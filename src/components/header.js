import React from "react";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 10) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div className="container__header">
        <div className={this.state.hasScrolled ? "header header--s" : "header"}>
          <div className="header__logo">
            <a href="../../">
              <span>Sergey Kovalchuk</span>
            </a>
          </div>
          <div className="header__navigation">
            <button className="btn btn--active">ru</button>
            <button className="btn">en</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
