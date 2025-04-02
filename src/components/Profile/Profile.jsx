import css from './Profile.module.css';

function Profile({name, tag, location, image, stats}) {
    return (
        <div className={css.profile}>
            <div className={css.profile__inner}>
                <img
                    className={css.profile__avatar}
                    src={image}
                    alt="User avatar"
                />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={css.profile__stats}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
}

export default Profile;