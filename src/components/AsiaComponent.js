import React, { Component } from 'react';

class Asia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileimages: [
                    {
                        id: 0,
                        name: 'Asia',
                        image: 'assets/images/Asia.jpg',
                    },
                    {
                      id: 1,
                      name: 'China',
                      image: 'assets/images/China.jpg',
                    },
                    {
                        id: 2,
                        name: 'Thailand',
                        image: 'assets/images/Thailand.jpg',
                    },
                    {
                      id: 3,
                      name: 'Vietnam',
                      image: 'assets/images/Vietnam.jpg',
                    },
                ],
            };
        }
    
        render() {
            const asia = this.state.profileimages.map(profileimage => {
                return (
                    <div className="col-6 text-center">
                        <img src={profileimage.image} alt={profileimage.name}  width="500px" height="75%" />
                        <h2>{profileimage.name}</h2>
                        <p>{profileimage.description}</p>
                    </div>
                );
            });
    
            return (
                <div className="container" style={{backgroundColor: "#ffd600"}}>
                    <div className="row">
                        {asia}
                    </div>
                </div>
            );
        }
    
}


export default Asia;  