// components/layouts/AppLayout.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props {
  children: React.ReactNode;
}

const AnimationAos: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return <>{children}</>;
};

export default AnimationAos;
