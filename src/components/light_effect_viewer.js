import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import * as R from 'ramda';

const LIGHT_DISPLAY_STYLE = {
  height: '150px',
  border: '2px solid black',
  borderRadius: '75px'
};

class LightEffectViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [ '#ffffff', '#000000' ]
    };
  }

  componentDidMount() {
    this.lightUpdateUnsub = this.props.registerLightUpdate(({ colors }) => {
      this.setState({ colors });
    });
  }

  componentWillUnmount() {
    this.lightUpdateUnsub();
  }

  render() {
    const { lightEffectName } = this.props;
    const { colors } = this.state;

    return (
      <div className="light-effect-viewer">
        <Row gutter={32}>
          <Col offset={1} span={10}>
            <div
              style={R.merge(
                {
                  background: colors[0]
                },
                LIGHT_DISPLAY_STYLE
              )}
            />
          </Col>
          <Col offset={2} span={10}>
            <div
              style={R.merge(
                {
                  background: colors[1]
                },
                LIGHT_DISPLAY_STYLE
              )}
            />
          </Col>
        </Row>
        <Row>
          <h3>{lightEffectName}</h3>
        </Row>
      </div>
    );
  }
}

LightEffectViewer.propTypes = {
  registerLightUpdate: PropTypes.func,
  lightEffectName: PropTypes.string
};

export default LightEffectViewer;
