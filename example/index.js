import React from 'react';
import ReactSoundcloud from '../dist/ReactSoundcloud.min.js';

React.render(<ReactSoundcloud visual={ true } />, document.getElementById('example-1'));
React.render(<ReactSoundcloud url="https://soundcloud.com/cashykesh/cashy-here-i-go-produced-by-purp-dogg-snippet" visual={ true } />, document.getElementById('example-2'));
React.render(<ReactSoundcloud visual={ false } color="0033FF" />, document.getElementById('example-3'));
