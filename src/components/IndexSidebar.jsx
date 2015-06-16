import React from 'react';
import {Link} from 'react-router';

class IndexSidebar extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <Link to={`/`}>Home</Link>
        </h2>
        <ul>
          <li>
            <Link to={`/map`}>Map</Link>
          </li>

          <li>
            <Link to={`/activities`}>Activities</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default IndexSidebar;
