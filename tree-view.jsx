import React from 'react'
import './tree-view.css'

export default React.createClass({
  contextTypes: {
    collapsed: React.PropTypes.bool,
    defaultCollapsed: React.PropTypes.bool,
    nodeLabel: React.PropTypes.node,
    className: React.PropTypes.string,
    itemClassName: React.PropTypes.string,
    childrenClassName: React.PropTypes.string,
    treeViewClassName: React.PropTypes.string
  },

  getInitialState () {
    return {
      collapsed: this.props.defaultCollapsed
    }
  },

  handleClick (...args) {
    this.setState({ collapsed: !this.state.collapsed })
    if (this.props.onClick) {
      this.props.onClick(...args)
    }
  },

  render () {
    const {
      collapsed = this.state.collapsed,
      className = '',
      itemClassName = '',
      treeViewClassName = '',
      childrenClassName = '',
      nodeLabel,
      children,
      defaultCollapsed,
      ...rest
    } = this.props

    let arrowClassName = 'tree-view_arrow'
    let containerClassName = 'tree-view_children'
    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed'
      containerClassName += ' tree-view_children-collapsed'
    }

    const arrow = (
      <div
        {...rest}
        className={className + ' ' + arrowClassName}
      />
    )

    return (
      <div className={'tree-view ' + treeViewClassName}>
        <div className={'tree-view_item ' + itemClassName} onClick={this.handleClick}>
          {arrow}
          {nodeLabel}
        </div>
        <div className={containerClassName + ' ' + childrenClassName}>
          {collapsed ? null : children}
        </div>
      </div>
    )
  }
})
