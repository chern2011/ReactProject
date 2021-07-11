import React, { Component } from 'react';

class NorthAmerica extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileimages: [
                {
                    id: 0,
                    name: '20190929_113816',
                    image: 'assets/images/20190929_113816.jpg',                        
                    },
                {
                    id: 1,
                    name: '20190929_114451',
                    image: 'assets/images/20190929_114451.jpg',                    
                },
                {
                    id: 2,
                    name: '20190930_145612',
                    image: 'assets/images/20190930_145612.jpg',                      
                },
                {
                    id: 3,
                    name: 'IMG_0307',
                    image: 'assets/images/IMG_0307.jpg',                        
                    },
                {
                    id: 4,
                    name: 'IMG_1263',
                    image: 'assets/images/IMG_1263.jpg',                    
                },
                {
                    id: 5,
                    name: 'IMG_1282',
                    image: 'assets/images/IMG_1282.jpg',                      
                }
                ],
            };
        }
    
        render() {
            const northamerica = this.state.profileimages.map(profileimage => {
                return (
                    <div className="col-6 text-center">
                        <img src={profileimage.image} alt={profileimage.name}  width="500px" height="75%" />
                        <h2>{profileimage.name}</h2>
                        <p>{profileimage.description}</p>
                    </div>
                );
            });
    
            return (
                <div className="container" style={{backgroundColor: "green"}}>
                    <div className="row">
                        {northamerica}
                    </div>
                </div>
            );
        }
    
}

export default NorthAmerica;  