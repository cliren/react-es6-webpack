import React from 'react';
import {Link} from 'react-router';
import IndexSidebar from './IndexSidebar.jsx';
import Home from './Home.jsx';
import '../less/app.less';

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="Sidebar">
          <IndexSidebar/>
        </div>
        <div className="Content">
            {this.props.content || <Home/>}
        </div>
      </div>
    );
  }
}

export default AppContainer;
