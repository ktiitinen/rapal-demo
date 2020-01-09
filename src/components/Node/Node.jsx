import React, { useState } from 'react';

export default function Node(props) {
    // Set state from props if available, this is an anti-pattern and used just for demo purposes
    const [rootNode] = useState((props.node && props.node.name)?props.node.name:'Noodi 1');
    const [children, setChildren] = useState((props.node && props.node.children)?props.node.children:[]);
    const [level] = useState((props.node && props.node.level)?props.node.level:'1');

    function addChild(e) {
        e.preventDefault();
        const newChild = {
            name: 'Noodi '+level + '.' +(children.length+1),
            children: [],
            level: level + '.' + (children.length+1)
        }
        setChildren([...children, newChild]);

    }

    return (
        <ul>
            <li>{rootNode}</li>
            
            <ul>
                { children && children.map((child, i) => (
                    <Node node={child} key={child.name}/>
                ))}
                <li><a href="!#" onClick={addChild}>[Lisää]</a></li>
            </ul>
            
        </ul>);
}

