import React, { Component } from "react";
import Row from "./Row";
import requests, { titleList } from "./requests";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default class RowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      data: [],
    };
    this.getData = this.getData.bind(this);
  }

  async getData() {
    const request1 = await axios.get(requests[this.state.position]);

    this.setState((st) => ({
      position: st.position + 1,
      data: [...st.data, request1],
    }));
  }

  componentDidMount() {
    for (let i = 0; i < requests.length; i++) {
      this.getData();
    }
  }
  render() {
    return (
      <div>
        {this.state.data.map((el, ind) => (
          <Row
            info={el.data.results}
            title={titleList[ind]}
            key={uuidv4()}
            isLargeRow={ind === 0 ? true : false}
          ></Row>
        ))}
      </div>
    );
  }
}
