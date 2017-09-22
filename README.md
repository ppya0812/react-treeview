# react-treeview  
  一款基于react的树形控件

## 使用示例

```
formatDom (data) {
    let typemark = ''

    let dom = ''
    if (formatDataType(data) === 'string') {
      dom = (<div>{data}</div>)
    } else if (formatDataType(data) === 'object') {
      data = [].concat(data)
      typemark = '{}'
    }

    if (formatDataType(data) === 'array' && data.length) {
      // array
      dom = data.map((item, i) => {
        const label = <span className='node'>{typemark || i}</span>
        let nodeDom = ''
        if (formatDataType(item) === 'array' && item.length) {
          nodeDom = item.map(leaf => <div className='info' key={leaf}>{leaf}</div>)
        } else if (formatDataType(item) === 'object') {
          nodeDom = Object.keys(item).map(leaf => {
            let sublabel = <span className='node'>{leaf} </span>
            // let leafDom = this.formatDom(item[leaf])
            let leafDom = <span className='leaf'>{JSON.stringify(item[leaf])} </span>
            return (
              <TreeView
                key={'leaf' + leaf}
                nodeLabel={sublabel}
                defaultCollapsed={false}>
                {leafDom}
              </TreeView>
            )
          })
        } else {
          nodeDom = (<div>{JSON.stringify(item)}</div>)
        }
        return (
          <TreeView
            key={'parrent' + i}
            nodeLabel={label}
            defaultCollapsed={false}>
            {nodeDom}
          </TreeView>
        )
      })
    }
    return dom
  }
  ```
