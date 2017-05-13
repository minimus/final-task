import React from 'react';
import PropTypes from 'prop-types';

class Layout extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i&subset=cyrillic" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="/stylesheets/main.css"/>
        <link rel="stylesheet" href="/stylesheets/bmenu.css"/>
        <script type="application/javascript" src="/javascripts/bmenu.js"/>
        <script type="application/javascript" src="/javascripts/main.js"/>
        <script dangerouslySetInnerHTML={{
          __html: `
            // This is making use of ES6 template strings, which allow for
            // multiline strings. We specified "{jsx: {harmony: true}}" when
            // creating the engine in app.js to get this feature.
            console.log("hello world");
          `
        }}/>
      </head>
      <body>
      <div id="menu" className="menu-left" dangerouslySetInnerHTML={{__html: this.props.menu}}/>
      <div id="main">
        <header className="header">
          <nav>
            <i id="left-menu" className="material-icons md-48 a-left-icon menu-trigger">menu</i>
            <a href="/"><img src="/images/logo.png"/></a>
            <i id="right-menu" className="material-icons md-48 a-right-icon menu-trigger">more_vert</i>
          </nav>
        </header>
        <div id="root">
          <h1>{this.props.title} <span>{this.props.count}</span></h1>
          <div id="offers">
            {this.props.children}
          </div>
        </div>
        <footer>
          <div id="info">
            mmm
          </div>
          <div id="copyright">
            <div>Copyright &copy; 2017, <a href="http://www.simplelib.com">minimus</a>. All rights reserved.</div>
            <div>Powered by <a href="https://www.ozon.ru">Ozon.ru</a></div>
          </div>
        </footer>
      </div>
      </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  menu: PropTypes.string
};

//module.exports = Layout;
export default Layout;