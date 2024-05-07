import React, { useEffect, useState } from 'react';

const useIsMobile = (breakpoint: number) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return { isMobile };
};

const useContainerBreakpoint = (breakpoint: number, containerRef: HTMLDivElement | unknown) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef instanceof HTMLDivElement) {
        setIsMobile(containerRef.clientWidth < breakpoint);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint, containerRef]);

  return { isMobile };
};

export { useIsMobile, useContainerBreakpoint };
