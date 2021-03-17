import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <header>
      <img src={logoImg} alt='schneider money' />
      <button type='button'>Nova transação</button>
    </header>
  );
}
