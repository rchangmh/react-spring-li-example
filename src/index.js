import React from 'react'
import ReactDOM from 'react-dom'
import { Transition, animated } from 'react-spring'
import { Button } from 'semantic-ui-react'

const defaultStyles = {
  overflow: 'hidden',
  width: '100%',
  backgroundColor: '#247BA0',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '1em'
}

class App extends React.PureComponent {
  state = {
    items: ['item1', 'item2', 'item3', 'item5']
  }

  componentDidMount() {}

  render() {
    return (
      <ul>
        <Transition
          native
          keys={this.state.items}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 50 }}
          leave={{ opacity: 0, height: 0 }}>
          {this.state.items.map(item => styles => (
            <div>
              <animated.li style={{ ...defaultStyles, ...styles }}>
                {item}
                <Button inverted color="yellow" onClick={() => this.setState({ items: this.state.items.concat(['new']) })}>
                  new
                </Button>
                <Button size="large" inverted color="green" onClick={() => this.setState({ items: this.state.items.slice(0, 3) })}>
                  clear
                </Button>
              </animated.li>
            </div>
          ))}
        </Transition>
      </ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
