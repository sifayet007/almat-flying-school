
import TopBar from '../header/TopBar';
import MegaMenu from '../header/MegaMenu';


const Header = () => {
    return (
        <header className='fixed w-full top-0 z-50 '
        >
            <TopBar />
            <MegaMenu className='' />
        </header>
    );
};

export default Header;