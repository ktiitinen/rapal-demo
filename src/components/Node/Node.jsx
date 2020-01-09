import React, { useState } from 'react';

Node.defaultProps = {
  node: {
    name: "Noodi 1",
    level: "1",
    children: []
  }
}

export default function Node(props) {
    // Set state from props if available, this is an anti-pattern and used just for demo purposes
    const [children, setChildren] = useState(props.node.children);

    function addChild(e) {
        e.preventDefault();
        const childLevel = props.node.level + '.' +(children.length+1);
        const newChild = {
            name: 'Noodi '+childLevel,
            children: [],
            level: childLevel
        }
        setChildren([...children, newChild]);

    }

    return (
        <ul>
            <li>{props.node.name}</li>

            <ul>
                { children && children.map((child, i) => (
                    <Node node={child} key={child.name}/>
                ))}
                <li><a href="!#" onClick={addChild}>[Lisää]</a></li>
            </ul>

        </ul>);
}
