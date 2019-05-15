import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <ul className="social">
          {resumeData.socialLinks &&
            resumeData.socialLinks.map(item => {
              return (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className={item.className} />
                  </a>
                </li>
              );
            })}
        </ul>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </footer>
    );
  }
}
