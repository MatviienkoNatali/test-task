import '../../style/global.scss';
import "./OurUsers.module.scss";

export function UserCard({ contentUser }) {
    const { userName, photo, status, registration, age } = contentUser;
    return (
        <div className="block">
            <picture className="photo">
                <img src={photo} alt="mrSmith"/>
            </picture>
            <div className="name">
                <p>{userName}</p>
            </div>
            <div className="status">
                <p>{status}</p>
            </div>
            <div className="registration">
                <p>{registration}</p>
            </div>
            <div className="age">
                <p>{age}</p>
            </div>
            <div className="action">
                <button>
                    <p>Chat</p>
                    <svg className="iconAction" width="22" height="19" viewBox="0 0 22 19" fill="none">
                        <path d="M22 9.5C22 4.25539 17.076 0 11 0C4.92397 0 0 4.25539 0 9.5C0 11.7172 0.878976 13.7554 2.35531 15.3757L0.392552 17.6867C-0.128006 18.1643 0.238945 19 0.964313 19H11.4694L11.4438 18.9915C17.3064 18.7868 22 14.6167 22 9.5Z" fill="#C6C9F8"/>
                        <path d="M5.52978 10.8048C6.25088 10.8048 6.83545 10.2206 6.83545 9.49999C6.83545 8.7794 6.25088 8.19524 5.52978 8.19524C4.80869 8.19524 4.22412 8.7794 4.22412 9.49999C4.22412 10.2206 4.80869 10.8048 5.52978 10.8048Z" fill="white"/>
                        <path d="M11 10.8048C11.7211 10.8048 12.3057 10.2206 12.3057 9.49999C12.3057 8.7794 11.7211 8.19524 11 8.19524C10.2789 8.19524 9.69434 8.7794 9.69434 9.49999C9.69434 10.2206 10.2789 10.8048 11 10.8048Z" fill="white"/>
                        <path d="M16.47 10.8048C17.1911 10.8048 17.7756 10.2206 17.7756 9.49999C17.7756 8.7794 17.1911 8.19524 16.47 8.19524C15.7489 8.19524 15.1643 8.7794 15.1643 9.49999C15.1643 10.2206 15.7489 10.8048 16.47 10.8048Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
