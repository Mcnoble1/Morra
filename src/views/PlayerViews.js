import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        <p>Pick the number of fingers you want to shoot</p>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ZERO')}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ONE')}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('TWO')}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('THREE')}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('FOUR')}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('FIVE')}
        >5</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div>
        <p>Make a guess for the total fingers</p>
        {guess ? 'You both guessed right! Play again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('ZERO')}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('ONE')}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('TWO')}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('THREE')}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('FOUR')}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('FIVE')}
        >5</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('SIX')}
        >6</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('SEVEN')}
        >7</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('EIGHT')}
        >8</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('NINE')}
        >9</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess('TEN')}
        >10</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.SeeWinning = class extends React.Component {
  render() {
    const {num} = this.props;
    return (
      <div>
          Correct total fingers thrown:
        <br />{num || 'Unknown'}
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
