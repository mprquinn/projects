import React, { Component } from "react";
import '../styles/landing.css';
import P5Wrapper from 'react-p5-wrapper';

class LandingScreen extends Component {
  componentDidMount() {
    
  }
  render() {
    let sketch = function (p) {
      let wW = window.innerWidth;
      let wH = window.innerHeight;
      let angle = 0;
      let w = 20;
      let maxD;
      let tick = 1;

      p.setup = function () {
        p.createCanvas(400, 400, p.WEBGL);
        // background(50);
        p.ortho(-400,400,-400,400,0,2000);
        maxD = p.dist(0,0,250,250);
      }

       p.draw = function () {
        p.background(p.color('#ff0099'));
        p.directionalLight(255, 255, 255, 1, 1, -0.1);
        p.ambientLight(180);
        p.translate(0,50,-50);
        // rotateX(PI/8);
        p.rotateX(p.atan(p.cos(p.QUARTER_PI)));
        p.rotateY(p.QUARTER_PI);
        p.orbitControl();
        let offset = 0;
        // 500 used to be wW
        for (let z = 0; z < 400; z += w) {
          for (let x = 0; x < 400; x += w) {
            p.push();
            let d = p.dist(x,z,400/2,400/2);
            let offset = p.map(d,0,maxD,-p.PI,p.PI);
            let c = p.color(`hsla(${324},69%,50%,1)`);
            p.ambientMaterial(c);
            let a = angle + offset;
            let h = p.floor(p.map(p.sin(a),-1,1,w*6,360));
            p.translate(x - (400/2), 0, z - (400/2));
            p.box(w, h, w);
            p.pop();
          }
          offset += 0.1;
        }
        
        angle -= 0.05;
        tick++;
      }
    }
    return (
      <div className="landing">
        
        <div className="landing__decorative"></div>
        <div className="landing__card">
          
          <div className="landing__card__image">
            <img src={require('../intro-bg.jpg')} />
          </div>

          <div className="landing__card__text">
            <h1 className="landing__title">
                Mike Quinn
            </h1>
            <h2 className="landing__subtitle">
                Front-end Developer, Calgary AB
            </h2>
          </div>
          
        </div>
      </div>
    );
  }
}

export default LandingScreen;