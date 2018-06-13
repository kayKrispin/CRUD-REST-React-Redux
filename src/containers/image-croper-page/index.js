import React, { Component } from 'react';
import {Cropper} from 'react-image-cropper'

const DemoImg = 'https://braavos.me/images/posts/gr/8.jpg'

class CropImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgSrc: DemoImg,
      image: '',
      imageLoaded: false,
      image1: '',
      imageL1oaded: false,
      image2: '',
      image2Loaded: false,
      image3: '',
      image3Loaded: false,
      image4: '',
      image4Loaded: false,
      image4BeforeLoaded: false,
      image4Values: ''
    }
  }

  handleImageLoaded (state) {
    this.setState({
      [state + 'Loaded']: true
    })
  }

  handleBeforeImageLoad (state) {
    this.setState({
      [state + 'BeforeLoaded']: true
    })
  }

  handleClick (state) {
    let node = this[state]
    this.setState({
      [state]: node.crop()
    })
  }

  handleChange (state, values) {
    this.setState({
      [state + 'Values']: values
    })
  }

  handleGetValues (state) {
    let node = this[state]
    this.setState({
      [state + 'Values']: node.values()
    })
  }

  render () {
    return (
      <div>
      <h1 className='hello'>Hello there</h1>
      <ul>
        <li>
          <h3>Default image crop</h3>
          <Cropper src={this.state.imgSrc}
            ref={ref => { this.image = ref }}
            onImgLoad={() => this.handleImageLoaded('image')}
          />
          <br/>
          {
            this.state.imageLoaded
              ? <button
                onClick={() => this.handleClick('image')}
              >
              crop
              </button>
              : null
          }
          <h4>after crop</h4>
          {
            this.state.image
              ? <img
                className="after-img"
                src={this.state.image}
                alt=""
              />
              : null
          }
        </li>

      </ul>
      <h1 className='hello'>Hello there</h1>
    </div>
    )
  }
}

export default CropImage;
