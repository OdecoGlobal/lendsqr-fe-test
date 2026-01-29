import styles from './table.module.scss';
import eyeIcon from '../../assets/eye.png';
import userCheck2 from '../../assets/user-check-2.png';
import userTimes2 from '../../assets/user-times-2.png';
import { useNavigate } from 'react-router';

const TableActionMenu = ({ userId }: { userId: string | number }) => {
  const navigate = useNavigate();
  return (
    <div className={styles['dropdown-menu']}>
      <button onClick={() => navigate(`/users/${userId}`)}>
        <img src={eyeIcon} alt="Eye Icon" />
        View Details
      </button>

      <button>
        <img src={userTimes2} alt="Eye Icon" />
        Blacklist User
      </button>
      <button>
        <img src={userCheck2} alt="Eye Icon" />
        Activate User
      </button>
    </div>
  );
};

export default TableActionMenu;
