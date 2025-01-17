import { LogoSection } from './LogoSection';
import { Navigation } from './Navigation';
import { ActionButtons } from './ActionButtons';

function Header() {
    return (
        <header className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center py-4 px-6">
                <div className="flex items-center">
                    <LogoSection />
                    <div className="w-24" />
                    <Navigation />
                </div>
                <div className="flex-1 flex justify-end">
                    <ActionButtons />
                </div>
            </div>
        </header>
    );
}

export default Header;