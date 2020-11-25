import { useContext } from 'react';
import UserContext from '../UserContext';

function ProfileHead() {
  const { user } = useContext(UserContext);

  return <div> {user.U}</div>;
}

export default ProfileHead;
