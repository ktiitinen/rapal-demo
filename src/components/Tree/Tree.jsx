import React from 'react';

import Node from '../Node/Node';

// Example tree, if you don't want to show the example, delete the prop node from component
const tree = {
    name: "Noodi 1",
    children: [
        {
            name: "Noodi 1.1",
            children: [
                {
                    name: "Noodi 1.1.1",
                    children: []
                },
                {
                    name: "Noodi 1.1.2",
                    children: []
                }
            ],
            level: "1.1"
        },
        {
            name: "Noodi 1.2",
            children: [],
            level: "1.2"
        }
    ],
    level: "1"
};

export default function Tree() {
    return (
        <Node node={tree} />
    );
}