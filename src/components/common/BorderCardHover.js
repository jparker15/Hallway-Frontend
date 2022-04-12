import React, { Component } from "react";

class BorderCard extends Component {
  render() {
    return (
      <div
        style={
          this.props.hover
            ? {
                ...myStyle.card,
                ...myStyle.hover,
                ...this.props.style,
                overflow: "hidden",
              }
            : {
                ...myStyle.card,
                ...myStyle.noHover,
                ...this.props.style,
                overflow: "hidden",
              }
        }
        onClick={this.props.onClick}
        onMouseEnter={this.onChange}
        onMouseLeave={this.onChange}
      >
        {this.props.children}
      </div>
    );
  }
}

const myStyle = {
  card: {
    border: "1px solid #171717",
    borderRadius: 20,
    marginBottom: 25,
    padding: "0 8px",
    width: "80%",
    maxWidth: 500,
    backgroundColor: "#f7f7f7",
  },
  noHover: {
    boxShadow: "1px 1px 20px rgba(44, 44, 44, 0.3)",
  },
  hover: {
    boxShadow: "1px 1px 20px rgba(44, 44, 44, 0.6)",
  },
};

export default BorderCard;
