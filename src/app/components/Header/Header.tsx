import Image from 'next/image';
import React, { useState } from 'react';

type TLink = {
  title: string;
  href: string;
  targetOut?: boolean;
};
type HeaderProps = {
  links: TLink[];
  inStorybook?: boolean;
};

const Header = (props: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { links, inStorybook } = props;
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    buttonRef.current?.blur();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const Links = () => {
    return (
      <>
        {links &&
          links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              title={link.title}
              className={`mr-0 px-6 py-4 lg:mr-5 lg:px-0 lg:py-0 lg:last-of-type:mr-0`}
              rel={`${link.targetOut ? 'noopener noreferrer' : ''}`}
              target={`${link.targetOut ? '_blank' : ''}`}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {link.title}
            </a>
          ))}
      </>
    );
  };

  return (
    <header
      className={`container mx-auto py-5 ${inStorybook && isMobileMenuOpen ? 'h-[450px]' : 'h-auto'}`}
    >
      <nav className="relative w-full" id="header-nav">
        <div
          className="container relative mx-auto flex items-center justify-between py-4"
          id="header-container"
        >
          <div className="absolute left-0 right-0 top-0 h-[1px] bg-gray-400" />
          <a className="" href="https://www.acu.edu.au:443/" title="ACU">
            <Image
              src="https://vision2033.acu.edu.au/-/media/feature/identity/acu_masterbrand_no-wording_rgb.svg?la=en&hash=2EE2E4D41692973F59FF714883EBFDE4"
              alt=" ACU_MASTERBRAND_Logo"
              className="h-10 px-4 md:px-0"
              width={145}
              height={40}
            />
          </a>
          <div
            className={`absolute right-0 top-full flex w-auto flex-col bg-white p-5 shadow-md lg:relative lg:top-auto lg:flex lg:w-auto lg:flex-row lg:bg-transparent lg:p-0 lg:shadow-none ${
              isMobileMenuOpen ? '-translate-x-0' : 'translate-x-[200%] lg:-translate-x-0'
            } transform transition-transform duration-300 ease-in-out lg:block lg:translate-x-0`}
          >
            <Links />
          </div>
          <button
            ref={buttonRef}
            onClick={toggleMobileMenu}
            className="acu-focus burger-menu mr-4 flex h-10 w-10 flex-col justify-between py-1 min-[640px]:mr-0 lg:hidden"
          >
            <span
              className={`block h-[3px] w-full origin-center transform bg-acu-charcoal-120 duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-[14.5px] rotate-45' : 'rotate-0'} `}
            ></span>
            <span
              className={`block h-[3px] w-full bg-acu-charcoal-120 ${isMobileMenuOpen ? 'opacity-0' : 'opacity'} duration-300 ease-in-out`}
            ></span>
            <span
              className={`block h-[3px] w-full origin-center bg-acu-charcoal-120 duration-300 ease-in-out ${isMobileMenuOpen ? '-translate-y-[14.5px] -rotate-45' : 'rotate-0'}  `}
            ></span>
          </button>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-400" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
