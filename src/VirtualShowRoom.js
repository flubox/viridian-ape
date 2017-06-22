import React from 'react';

export const VirtualShowRoom = ({config}) => {
    console.info('VirtualShowRoom', config, config.rooms[config.current]);
    const room = config.rooms[config.current.room];
    const roomObj = room.obj;
    const roomMtl = room.mtl;
    const cameraRoom = room.camera;
    const product = room.products[config.current.product];
    const productObj = product ? product.obj : false;
    const productMtl = product ? product.mtl : false;
    const cameraProduct = product ? product.camera : false;

    return (
        <a-scene embedded>
            <a-assets>
                <a-asset-item key={`room-obj`} id={`room-obj`} src={roomObj} material="side: double"/>
                {<a-asset-item key={`room-mtl`} id={`room-mtl`} src={roomMtl}/>}
                {product && <a-asset-item key={`product-obj`} id={`product-obj`} src={productObj} material="side: double"/>}
                {product && <a-asset-item key={`product-mtl`} id={`product-mtl`} src={productMtl}/>}
            </a-assets>
            <a-camera
                key={`camera-room`}
                id={`camera-room`}
                position={`${cameraRoom.position.x} ${cameraRoom.position.y} ${cameraRoom.position.z}`} 
                rotation={`${cameraRoom.rotation.x} ${cameraRoom.rotation.y} ${cameraRoom.rotation.z}`}
                active={config.current.product === -1}
            />
            {cameraProduct && <a-camera
                key={`camera-product`}
                id={`camera-product`}
                position={`${cameraProduct.position.x} ${cameraProduct.position.y} ${cameraProduct.position.z}`} 
                rotation={`${cameraProduct.rotation.x} ${cameraProduct.rotation.y} ${cameraProduct.rotation.z}`}
                active={config.current.product !== -1}
            />}
            {config.showOnlyProduct ? false : (
                <a-entity id="room" obj-model={`obj: #room-obj; mtl: #room-mtl`}/>
            ) }
            {product && (
                <a-entity
                    id="product"
                    obj-model={`obj: #product-obj;`}
                    position={`${product.position.x} ${product.position.y} ${product.position.z}`}
                    rotation={`${product.rotation.x} ${product.rotation.y} ${product.rotation.z}`}
                    scale="0.012 0.012 0.012"
                />
            )}
        </a-scene>
    );
};

export default VirtualShowRoom;
