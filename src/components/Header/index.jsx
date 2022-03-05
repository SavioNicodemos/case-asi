import notificationImg from '../../assets/notification.svg';
import userImg from '../../assets/user-icon.svg';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <h3>Student Tracking</h3>
        <div>
          <img src={notificationImg} alt="notification icon" />
          <img src={userImg} alt="user icon" />
        </div>
      </Content>
    </Container>
  );
}

export default Header;