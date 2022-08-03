import React, { Component } from "react";

const withSearch = (WrappedComponent, entity) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        term: "",
      };
    }

    componentDidMount() {
      // api call

      console.log("props", this.props);
      if (entity == "user") {
        this.setState({
          data: [
            {
              id: 1,
            },
            {
              id: 2,
            },
            {
              id: 3,
            },
            {
              id: 4,
            },
          ],
        });
      } else {
        this.setState({
          data: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        });
      }
    }

    render() {
      const { term, data } = this.state;
      return (
        <div>
          <input
            type="text"
            value={term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <WrappedComponent data={data}></WrappedComponent>
        </div>
      );
    }
  };
};

export default withSearch;
