import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openWomen: false,
      oenMen: false,
      value: [20, 100]
    };
  }

  valuetext(value) {
    return `${value}`;
  }

  handleChangePrice = (event, newValue) => {
    this.setState({
      openWomen: this.state.openWomen,
      openMen: this.state.openMen,
      value: newValue
    });
  };

  setOpenWomen() {
    this.setState({
      openWomen: !this.state.openWomen,
      openMen: false,
      value: this.state.value
    });
  }
  setOpenMen() {
    this.setState({
      openWomen: false,
      openMen: !this.state.openMen,
      value: this.state.value
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          {/* <div className="row"> */}
          <div>
            <div className="filter-widget " style={{ marginTop: '90px' }}>
              <h2 className="fw-title" style={{ marginBottom: '10px' }}>
                Categories
              </h2>
              <>
                <button
                  className="dropbtn"
                  onClick={() => this.setOpenWomen()}
                  aria-controls="dropdown-control"
                  aria-expanded={this.state.openWomen}
                >
                  Nữ
                </button>
                <Collapse in={this.state.openWomen}>
                  <div id="dropdown-control" className="dropdown-content">
                    <a href="/">Áo</a>
                    <a href="/">Quần</a>
                    <a href="/">Khác</a>
                  </div>
                </Collapse>
              </>
              <br></br>
              <>
                <button
                  className="dropbtn"
                  onClick={() => this.setOpenMen()}
                  aria-controls="dropdown-control-Men"
                  aria-expanded={this.state.openMen}
                >
                  Nam
                </button>
                <Collapse in={this.state.openMen}>
                  <div id="dropdown-control-Men" className="dropdown-content">
                    <a href="/">Áo</a>
                    <a href="/">Quần</a>
                    <a href="/">Khác</a>
                  </div>
                </Collapse>
              </>
              <br></br>
              <button className="dropbtn">
                <a href="/" className="dropbtn-a">
                  Phụ kiện
                </a>
              </button>
              <br></br>
              <button className="dropbtn">
                <a href="/" className="dropbtn-a">
                  Ưu đãi
                </a>
              </button>
            </div>
            <div className="filter-widget mb-0">
              <div className="fw-color-choose">
                <Typography id="range-slider" gutterBottom>
                  <h2 className="fw-title">Price</h2>
                </Typography>
                <Slider
                  style={{ width: '300px' }}
                  max="2000000"
                  value={this.state.value}
                  onChange={(event, newValue) =>
                    this.handleChangePrice(event, newValue)
                  }
                  valueLabelDisplay="off"
                  aria-labelledby="range-slider"
                  getAriaValueText={this.valuetext}
                />
                <br></br>
                <TextField
                  style={{ width: '80px' }}
                  type="text"
                  value={this.state.value[0]}
                  onChange={event => {
                    const newValue1 = event.target.value;
                    if ((newValue1 <= 2000000) & (newValue1 > 0)) {
                      let temp = [newValue1, this.state.value[1]];
                      this.setState({
                        openWomen: this.state.openWomen,
                        openMen: this.state.openMen,
                        value: temp
                      });
                    }
                  }}
                />
                <TextField
                  style={{ width: '80px', marginLeft: '140px' }}
                  type="text"
                  value={this.state.value[1]}
                  onChange={event => {
                    const newValue2 = event.target.value;
                    if ((newValue2 <= 2000000) & (newValue2 > 0)) {
                      let temp = [this.state.value[0], newValue2];
                      this.setState({
                        openWomen: this.state.openWomen,
                        openMen: this.state.openMen,
                        value: temp
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="filter-widget mb-0">
              <h2 className="fw-title" style={{ marginTop: '60px' }}>
                color by
              </h2>
              <div className="fw-color-choose">
                <div className="cs-item">
                  <input type="radio" name="cs" id="gray-color" />
                  <label className="cs-gray" for="gray-color">
                    <span>(3)</span>
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" name="cs" id="orange-color" />
                  <label className="cs-orange" for="orange-color">
                    <span>(25)</span>
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" name="cs" id="yollow-color" />
                  <label className="cs-yollow" for="yollow-color">
                    <span>(112)</span>
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" name="cs" id="green-color" />
                  <label className="cs-green" for="green-color">
                    <span>(75)</span>
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" name="cs" id="purple-color" />
                  <label className="cs-purple" for="purple-color">
                    <span>(9)</span>
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" name="cs" id="blue-color" checked="" />
                  <label className="cs-blue" for="blue-color">
                    <span>(29)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-widget mb-0">
              <h2 className="fw-title">Size</h2>
              <div className="fw-size-choose">
                <div className="sc-item">
                  <input type="radio" name="sc" id="m-size" checked="" />
                  <label for="m-size">M</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="l-size" />
                  <label for="l-size">L</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="xl-size" />
                  <label for="xl-size">XL</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="xxl-size" />
                  <label for="xxl-size">XXL</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Category;
