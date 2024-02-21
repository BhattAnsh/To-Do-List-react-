import { useEffect, useState } from "react";
import './Navbar.css';
const navItems = ["sunny"];

export const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const { pageYOffset, innerHeight } = window;

    const currentIndex = Math.floor(pageYOffset / (innerHeight - 200));

    if (currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <aside>
        <nav>
          <span
            className="background"
            style={{
              translate: activeIndex > 0 ? `0 ${activeIndex * 100}%` : 0,
            }}
          />
          {navItems.map((item, index) => (
            <a key={item} href={`#${item}`}>
              <span className={`material-icons ${item}`}>{item}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};