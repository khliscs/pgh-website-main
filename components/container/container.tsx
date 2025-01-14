import Footer from '../footer/footer';
import HeaderKilian from '../header-kilian';
import Navbar from '../header/navbar';
import testclass from '../../styles'

export default function MainContainer(props: { [x: string]: any; children: any; }) {
  const { children } = props;

  return (
    <div className="testclass">
      <main id="skip" className="flex flex-col bg-inherit">
        <div className='sticky top-0 w-full z-50'>
          <HeaderKilian />
        </div>
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

//   <body className="bg-inherit bg-[url('../public/bg.svg')] bg-cover">