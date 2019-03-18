import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import * as R from 'ramda';

import './color_scheme_viewer.css';

class ColorSchemeViewer extends Component {
  render() {
    const { schemeName, colors } = this.props.colorScheme;

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

ColorSchemeViewer.propTypes = {
  colorScheme: PropTypes.any
};

export default ColorSchemeViewer;
