import React from "react";
import '../../style/global.scss';
import "./OurUsers.module.scss";
import mrSmith from '../../images/mr-smith.jpeg';
import {UserCard} from "./UserCard";

function OurUsers() {
    return (
        <section className="users">
            <div className="container">
                <h2>our users</h2>
                <div className="wrap">
                    <div className="block block-caption">
                        <div>
                            <p>photo</p>
                        </div>
                        <div>
                            <p>name</p>
                        </div>
                        <div>
                            <p>status</p>
                        </div>
                        <div>
                            <p>registration</p>
                        </div>
                        <div>
                            <p>age</p>
                        </div>
                        <div>
                            <p>action</p>
                        </div>
                    </div>
                    <UserCard contentUser={{
                        userName:'Mr. smith',
                        photo:mrSmith,
                        status:'offline',
                        registration:'Toronto',
                        age: '35 year'
                    }}/>
                    <UserCard contentUser={{
                        userName:'Mr. smith',
                        photo:mrSmith,
                        status:'offline',
                        registration:'Toronto',
                        age: '35 year'
                    }}/>
                    <UserCard contentUser={{
                        userName:'Mr. smith',
                        photo:mrSmith,
                        status:'offline',
                        registration:'Toronto',
                        age: '35 year'
                    }}/>
                    <UserCard contentUser={{
                        userName:'Mr. smith',
                        photo:mrSmith,
                        status:'offline',
                        registration:'Toronto',
                        age: '35 year'
                    }}/>
                </div>
            </div>
        </section>
    );
}

export default OurUsers;
