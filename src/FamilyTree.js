// src/FamilyTree.js
import React from 'react';
import Tree from 'react-d3-tree';
import CustomNode from './CustomNode';

const FamilyTree = ({ member }) => {
    return (
        <div id="treeWrapper" 
        style={{ 
          width: '80%', 
          height: '100%', 
          border: '2px solid black', // 🔥 Border for visibility
          overflow: 'auto', // 🔥 Enables scrolling instead of zooming 
          position: 'relative',
          margin: '0 auto', // ✅ Centers the div horizontally
          display: 'flex', // ✅ Ensures children (tree) are centered
          justifyContent: 'center', // ✅ Centers horizontally
          alignItems: 'center' // ✅ Centers vertically
        }}>
          <Tree
            data={member}
            orientation="vertical"
            translate={{ x: 300, y: 100 }}
            pathFunc="step"
            collapsible={false}
            zoomable={true}
            zoom={0.8}
            renderCustomNodeElement={(nodeDatum) => (
              <CustomNode nodeDatum={nodeDatum} />
            )}
          />
        </div>
    );
  };
  
  export default FamilyTree;