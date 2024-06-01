declare module 'react-slick' {
    import { Component } from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      pauseOnHover?: boolean;
      [key: string]: any;
    }
  
    export default class Slider extends Component<{ settings?: Settings }> {}
  }
  