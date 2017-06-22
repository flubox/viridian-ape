import React from 'react';

export const VirtualShowRoom = ({config}) => {
    console.info('VirtualShowRoom', config, config.rooms[config.current]);
    return (
        <a-scene embedded visible={config.show}>
            <a-assets>
                {config.rooms.map(({obj, mtl, products}, i) => {
                    return (
                        <div key={`room-obj-mtl-${i}`}>
                            <a-asset-item key={`room-obj-${i}`} id={`room-obj-${i}`} src={`${obj}`} material="side: double"/>
                            <a-asset-item key={`room-mtl-${i}`} id={`room-mtl-${i}`} src={`${mtl}`}/>
                            {products.map((product, ii) => {
                                <div key={`product-obj-mtl-${i}-${ii}`}>
                                    <a-asset-item key={`product-obj-${i}-${ii}`} id={`product-obj-${i}-${ii}`} src={`${product.obj}`} material="side: double"/>
                                    <a-asset-item key={`product-mtl-${ii}`} id={`product-mtl-${ii}`} src={`${product.mtl}`}/>
                                </div>
                            })}
                        </div>
                    )
                })}
            </a-assets>
            {config.rooms.map(({products}, i) => {
                return products.map(({camera}, ii) => {
                    const props = {
                        id: `camera-${i}-${ii}`,
                        position: `${camera.position.x} ${camera.position.y} ${camera.position.z}`,
                        rotation: `${camera.rotation.x} ${camera.rotation.y} ${camera.rotation.z}`,
                        active: i === config.current.camera
                    }
                    return (
                        <a-camera key={`camera-${i}-${ii}`} id={`camera-${i}-${ii}`} {...props}/>
                    );
                })
            })}
            <a-entity id="room" obj-model={`obj: #room-obj-${config.current.room}; mtl: #room-mtl-${config.current.room}`}/>
            <a-entity id="product" obj-model={`obj: #product-obj-${config.current.product}; mtl: #product-mtl-${config.current.product}`}/>
        </a-scene>
    );
};

export default VirtualShowRoom;
