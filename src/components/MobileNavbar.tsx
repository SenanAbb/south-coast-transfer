import { AnimatePresence, useCycle } from 'framer-motion';
import MenuToggle from './MenuToggle';
import Menu from './Menu';

interface MobileNavbarProps {
  links: Link[];
}

function MobileNavbar({ links }: MobileNavbarProps) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="overflow-x-hidden">
      <div className="relative lg:hidden">
        {/* MENU TOGGLE*/}
        <MenuToggle
          isOpen={isOpen}
          toggle={() => {
            console.log(isOpen);
            toggleOpen();
          }}
        />
      </div>
      {/* MENU*/}
      <AnimatePresence>{isOpen && <Menu links={links} />}</AnimatePresence>
    </div>
  );
}

export default MobileNavbar;
