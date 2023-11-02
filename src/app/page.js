import './home.css';
import Body from './components/Body';
import Header from './components/Header';
// import Mail from '/mail_icon.svg';

export default function Home() {
  return (
    <main className='main__container'>
      <Header />
      <Body />
    </main>
  );
}
