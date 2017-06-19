import React from 'react';

export const VirtualShowRoom = props => {
    return (
        <a-scene>
            <a-assets>
                <a-asset-item id="room-obj" src="./src/room.obj"></a-asset-item>
                <a-asset-item id="room-mtl" src="./src/room.mtl"></a-asset-item>
            </a-assets>
            <a-camera id="main-camera" position="0.09 0 -2.19" rotation="-40.33 172.575"/>
            <a-entity obj-model="obj: #room-obj; mtl: #room-mtl"></a-entity>
        </a-scene>
    );
};

export default VirtualShowRoom;