# React Soundcloud

Embed Soundcloud widget.

![https://raw.githubusercontent.com/keske/react-soundcloud/c0ef115f6539120088079793eb45186b45d899af/example/images/visualTrue.png](https://raw.githubusercontent.com/keske/react-soundcloud/c0ef115f6539120088079793eb45186b45d899af/example/images/visualTrue.png)

![https://raw.githubusercontent.com/keske/react-soundcloud/c0ef115f6539120088079793eb45186b45d899af/example/images/visualFalse.png](https://raw.githubusercontent.com/keske/react-soundcloud/c0ef115f6539120088079793eb45186b45d899af/example/images/visualFalse.png)

## Installation

`npm install react-soundcloud`

## Usage


`var ReactSoundcloud = require('react-soundcloud-embed');`

or

`import ReactSoundcloud from 'react-soundcloud-embed';`

Simple usage:

```javascript
React.render(<ReactSoundcloud url="https://soundcloud.com/icebound/dusty-breaks-at-the-bottom-of-the-random-crates"/>, document.getElementById('ReactSoundcloud'));
```

### Props
- `width` _(String)_ - widget width, default: `100%`
- `height` _(String)_ - widget height, default: `450px`
- `url` _(String)_ - URL to track, default: `https://api.soundcloud.com/tracks/210785280`,
- `autoPlay` _(Boolean)_ - auto play track, default: `false`,
- `hideRelated` _(Boolean)_ - hide related, default: `false`,
- `showComments` _(Boolean)_ - show comments, default: `true`,
- `showUser` _(Boolean)_ - show users, default: `true`,
- `showReposts` _(Boolean)_ - show reposts, default: `false`,
- `visual` _(Boolean)_ - `true` for background image, default: `true`,
- `color` _(String)_ - play button color, default: `ff5500`

## TODO
1. [ ] Example page