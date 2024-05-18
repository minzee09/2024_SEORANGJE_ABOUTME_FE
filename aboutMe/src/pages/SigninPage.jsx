import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AboutMeLogo from '../assets/AboutMeLogo.png';

const MainBody = styled.div`
  background: linear-gradient(180deg, #FF8CAF 0%, #FFF 85.29%);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 58vh;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 334px;
  height: 60px;
  margin-top: 15px;
  padding-left: 30px;
  font-size: 20px;
  font-family: "DungGeunMo";

  &::placeholder {
    font-family: "DungGeunMo"; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center; 
  flex-direction: column;
  
  // 밑에서부터 20vh만큼은 버튼
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20vh;
`;

const Button = styled.button`
  width: 370px;
  height: 65px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 0px;
  font-size: 20px;
  cursor: pointer; 
  font-family: "DungGeunMo";
`;

const SignupText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: 15px;
  color: #A5A5A5;
  text-decoration: underline;
  margin-top: 15px;
  cursor: pointer;
  `

const SigninPage = () => {
  const navigate = useNavigate();
  
  const handleSigninClick = () => {
    navigate(`/theme`);
  };

  const handleSignupClick = () => {
    navigate(`/sign-up`);
  };

  return (
    <MainBody>

      <LogoContainer className='logo'>
        <img src={AboutMeLogo} alt='logo'/>
      </LogoContainer>

      <InputContainer className='loginBox'>
        <Input placeholder='이메일' />
        <Input placeholder='비밀번호' type='password' />
      </InputContainer>

      <ButtonContainer>
        <Button onClick={handleSigninClick}> 입장하기 </Button>
        <SignupText onClick={handleSignupClick}>회원가입 하기</SignupText>
      </ButtonContainer>
      
    </MainBody>
  )
}


export default SigninPage