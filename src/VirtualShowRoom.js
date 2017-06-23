import React from 'react';
require('aframe-orbit-controls-component');

export const VirtualShowRoom = ({config}) => {
    console.log('VirtualShowRoom', config);
    const room = config.rooms[config.current.room];
    const roomObj = room.obj;
    const roomMtl = room.mtl;
    const cameraRoom = room.camera;
    const product = room.products[config.current.product];
    const productObj = config.current.product > -1 ? product.obj : false;
    const productMtl = config.current.product > -1 ? product.mtl : false;
    const cameraProduct = config.current.product > -1 ? product.camera : false;

    return (
        <a-scene embedded>
            <a-assets>
                {room.products.map((product, i) => {
                    return (
                        <div key={`assets-product-${i}`}>
                            <a-asset-item key={`product-obj-${i}`} id={`product-obj-${i}`} src={product.obj} material="side: double"/>
                            <a-asset-item key={`product-mtl-${i}`} id={`product-mtl-${i}`} src={product.mtl}/>
                        </div>
                    );
                }).concat([
                    <a-asset-item key={`room-obj`} id={`room-obj`} src={roomObj} material="side: double"/>,
                    <a-asset-item key={`room-mtl`} id={`room-mtl`} src={roomMtl}/>
                ])}

            </a-assets>
            {config.current.product === -1 && (
                <a-entity
                    camera
                    key={`camera-room`}
                    id={`camera-room`}
                    userHeight={`cameraRoom.position.y`}
                    position={`${cameraRoom.position.x} ${cameraRoom.position.y} ${cameraRoom.position.z}`} 
                    rotation={`${cameraRoom.rotation.x} ${cameraRoom.rotation.y} ${cameraRoom.rotation.z}`}
                    look-controls-enabled
                    active
                />
            )}
            <a-entity id="room" obj-model={`obj: #room-obj; mtl: #room-mtl`} visible={!config.showOnlyProduct}/>
            {room.products.map((product, i) => {
                console.info('product', product);
                return (
                    <a-entity
                        id={`product-${i}`}
                        key={`product-${i}`}
                        obj-model={`obj: #product-obj-${i}; mtl: #product-mtl-${i}`}
                        position={`${product.position.x} ${product.position.y} ${product.position.z}`}
                        rotation={`${product.rotation.x} ${product.rotation.y} ${product.rotation.z}`}
                        scale={`${product.scale.x} ${product.scale.y} ${product.scale.z}`}
                    />
                )
            })}
            {config.current.product > -1 && (
                <a-entity
                    id="product-target"
                    position={`${product.position.x} ${product.position.y + 0.0505} ${product.position.z}`} 
                />
            )}
            {config.current.product === 0 && (
                <a-entity
                    camera
                    key={`camera-product`}
                    id={`camera-product`}
                    target={`#product-target`}
                    userHeight={`product.camera.position.y`}
                    position={`${product.camera.position.x} ${product.camera.position.y} ${product.camera.position.z}`} 
                    rotation={`${product.camera.rotation.x} ${product.camera.rotation.y} ${product.camera.rotation.z}`}
                    distance={product.camera.distance}
                    orbit-controls look-controls-enabled="false"
                    wasd-controls-enabled="true"
                />
            )}
            <a-box width="100" height="100" depth="100" material="side: back"/>
        </a-scene>
    );
};

export default VirtualShowRoom;
