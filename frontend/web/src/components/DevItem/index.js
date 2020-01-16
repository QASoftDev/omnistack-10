import React from 'react';

import './style.css';

function DevItem( {dev} ){
    return (
    <li key={dev.id} className="dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.name} />
            <div className="user-info">
              <strong>{dev.name}</strong>
              <span>{dev.techs.join(', ')}</span>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar Github - @{dev.github_username}</a>
            </div>
        </header>
      </li>
          );
}

export default DevItem;