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
                <a-asset-item key={`room-obj`} id={`room-obj`} src={roomObj} material="side: double"/>
                {<a-asset-item key={`room-mtl`} id={`room-mtl`} src={roomMtl}/>}
                {product && <a-asset-item key={`product-obj`} id={`product-obj`} src={productObj} material="side: double"/>}
                {product && <a-asset-item key={`product-mtl`} id={`product-mtl`} src={productMtl}/>}
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
                        obj-model={`obj: #product-obj;`}
                        position={`${product.position.x} ${product.position.y} ${product.position.z}`}
                        rotation={`${product.rotation.x} ${product.rotation.y} ${product.rotation.z}`}
                        scale="0.012 0.012 0.012"
                    />
                )
            })}
            {config.current.product > -1 && (
                <a-entity
                    camera
                    key={`camera-product`}
                    id={`camera-product`}
                    target={`#product-${config.current.product}`}
                    userHeight={`product.camera.position.y`}
                    position={`${product.camera.position.x} ${product.camera.position.y} ${product.camera.position.z}`} 
                    rotation={`${product.camera.rotation.x} ${product.camera.rotation.y} ${product.camera.rotation.z}`}
                    distance={product.camera.distance}
                    orbit-controls look-controls-enabled="false"
                    wasd-controls-enabled="true" position="0 1 0" 
                />
            )}
        </a-scene>
    );
};

export default VirtualShowRoom;
