import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div class="intro-header">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-message">
                  <h1>About</h1>
                  <h3>What is the Injection Software Development Project?</h3>
                  <hr class="intro-divider" />
                  <ul class="list-inline intro-social-buttons">
                    <li>
                      <a href="#about" class="btn btn-default btn-lg">
                        <i class="fa fa-level-down fa-fw" />{" "}
                        <span class="network-name">About</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about" class="content-section-a">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-sm-6">
                <hr class="section-heading-spacer" />
                <div class="clearfix" />
                <h2 class="section-heading">About Injection</h2>
                <p class="lead">
                  The Injection Software Development project is a small
                  organization created by Casey Erdmann with the purpose of
                  writing software and doing computer security research. <br />
                  <br /> Everything on this site is a product of
                  Casey/Injection, but the organization aspect of Injection was
                  designed to provide a way for people of different skill sets
                  to work together building software. <br />
                  <br /> The Injection Software Development project was created
                  to allow artists, musicians, developers, and any other
                  contributors to the software development process, a way to
                  work with Casey, and distrubute software without the need for
                  fancy business details. <br />
                  <br /> Essentially this is an organization for freelance
                  software development, and thanks to Injection, Casey can
                  provide a way to distribute our products without too much
                  fuss. <br />
                  <br /> Okay so who is this Casey person? <br />
                  <br /> Though this is an organization, the primary purpose of
                  this site is to display and host any of the research or
                  content created by Casey. Basically, this is a technical
                  portfolio for Casey. <br />
                  <br /> So to summarize for the tl:dr people, the Injection
                  Software Development project is a bunch of random weirdos
                  making software and hacking stuff, and a portfolio for some
                  weird guy talking in third person to host his security and
                  software projects! <br /> <br /> Now go download some cool
                  software. <i class="fa fa-smile-o d fa-fw" />
                </p>
              </div>
              <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                <Image
                  src="/media/img/injection-logo.png"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
