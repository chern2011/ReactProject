import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderProfileItem({profileimage}) {
    return (
        <Card>
            <Link to={`/profile/${profileimage.id}`}>
            <CardImg width="100%" src={baseUrl + profileimage.image} alt={profileimage.name} />
                <CardImgOverlay>
                    <CardTitle>{profileimage.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Profile(props) { // literally the entire page but not the navbar
    const profile = props.profileimages.profileimages.map(profileimage => {
        return (
            <div key={profileimage.id} className="col-md-5 m-1">
                <RenderProfileItem profileimage={profileimage} />
            </div>
        );
    });

    if (props.profileimages.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.profileimages.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.profileimages.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Profile</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Profile</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {profile}
            </div>
        </div>
    );
}

export default Profile;