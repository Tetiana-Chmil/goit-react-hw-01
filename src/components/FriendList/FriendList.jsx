import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => {
                return (
                    <li key={friend.id} className={css.friend__item}>
                        <FriendListItem
                            name={friend.name}
                            avatar={friend.avatar}
                            isOnline={friend.isOnline}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default FriendList;