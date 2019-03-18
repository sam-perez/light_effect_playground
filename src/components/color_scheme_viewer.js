import React, { Component } from 'react';
import { Row, Col } from 'antd';
import * as R from 'ramda';

import './color_scheme_viewer.css';

const HARDCODED_COLOR = {
  schemeName: 'sandy stone beach ocean diver',
  colors: [ '#e6e2af', '#a7a37e', '#efecca', '#046380', '#002f2f' ]
};

class ColorSchemeViewer extends Component {
  render() {
    const { schemeName, colors } = HARDCODED_COLOR;

    return (
      <div className="color-scheme-viewer">
        <Row>
          <Col span={2} />
          {R.addIndex(R.map)((color, idx) => {
            return (
              <Col span={4} key={idx}>
                <div className="square">
                  <div className="content" style={{ background: color }} />
                </div>
              </Col>
            );
          }, colors)}
          <Col span={2} />
        </Row>
        <Row>
          <h3>{schemeName}</h3>
        </Row>
      </div>
    );
  }
}

export default ColorSchemeViewer;
