import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div style={{ flex: 1 }}>
          {/* Your form and other content go here */}
        </div>
        <footer
          style={{
            backgroundColor: "#f1f1f1",
            padding: "10px 0",
            textAlign: "center",
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
            zIndex: 1000,
          }}
        >
          <span className="text-muted">project</span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
