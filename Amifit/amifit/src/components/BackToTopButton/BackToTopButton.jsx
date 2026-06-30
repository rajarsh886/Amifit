import React, { useEffect, useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY >= 100);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="#top"
      className={`back-top-btn${visible ? ' active' : ''}`}
      aria-label="back to top"
    >
      <IoChevronUp />
    </a>
  );
};

export default BackToTopButton;