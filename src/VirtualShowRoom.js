import React from 'react';

export const VirtualShowRoom = ({config}) => {
    console.info('VirtualShowRoom', config, config.rooms[config.current]);
    return (
        <a-scene>
            <a-assets>
                {config.rooms.map(({model, products}, i) => {
                    return (
                        <div key={`room-obj-mtl-${i}`}>
                            <a-asset-item key={`room-obj-${i}`} id={`room-obj-${i}`} src={`${model.obj}`}/>
                            <a-asset-item key={`room-mtl-${i}`} id={`room-mtl-${i}`} src={`${model.mtl}`}/>
                            {products.map(({model}, ii) => {
                                <div key={`room-obj-mtl-${i}-${ii}`}>
                                    <a-asset-item key={`room-obj-${i}-${ii}`} id={`room-obj-${i}-${ii}`} src={`${model.obj}`}/>
                                    <a-asset-item key={`room-mtl-${i}-${ii}`} id={`room-mtl-${i}-${ii}`} src={`${model.mtl}`}/>
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
                        active: i === config.current
                    }
                    return (
                        <a-camera key={`camera-${i}-${ii}`} id={`camera-${i}-${ii}`} {...props}/>
                    );
                })
            })}
            <a-entity obj-model={`obj: #room-obj-${config.current}; mtl: #room-mtl-${config.current}`}/>
        </a-scene>
    );
};

export default VirtualShowRoom;