// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecoration extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        React.cloneElement(child, {
          className: this.props.theme
        })
      )
    })
    return (
      <div className='invitation-body'>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}


export default ThemedDecoration
