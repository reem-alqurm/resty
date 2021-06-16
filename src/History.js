import React from 'react';

function History(props){

    return (
      <div className="history">
        <ul>
          {props.history.map((item, idx) => 
            <li key={idx}>
              <span className={`method ${item.method}`}>{`${item.method}`}</span>
              <button className='url-history'>{`${item.url}`}</button>
            </li>
          )}
        </ul>
      </div>
    )
}
export default History;