import css from './FriendListItem.module.css';

function FriendListItem({ name, avatar, isOnline }) {
    return (
        <div>
            <img
                src={avatar}
                alt={name}
                width={48}
            />
            <p className={css.friend__name}>{name}</p>
            {isOnline
                ? (<p className={css.friend__isOnline}>Online</p>)
                : (<p className={css.friend__isOffline}>Offline</p>)}
        </div>
    );
}

export default FriendListItem;