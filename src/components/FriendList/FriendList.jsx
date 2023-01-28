export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} class="item">
          <span class="status"></span>
          <img class="avatar" src={avatar} alt={`${name} avatar`} width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};
