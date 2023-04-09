// ActiveLink.js
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
// ActiveLink.js
const ActiveLink = ({
  children,
  href,
  activeClassName,
  scroll = false,
  onClick,
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  const targetId = href.substring(1); // Extract the id from the href

  useEffect(() => {
    if (scroll) {
      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsActive(entry.isIntersecting);
        },
        { threshold: 0.5 } // Array of threshold values
      );

      observer.observe(targetElement);

      return () => {
        observer.unobserve(targetElement);
      };
    } else {
      setIsActive(router.pathname === href);
    }
  }, [router.pathname, scroll, href, targetId]);

  const handleClick = (e) => {
    if (scroll) {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  const className = isActive ? activeClassName : "";

  return (
    <Link href={href}>
      <span
        className={className}
        onClick={handleClick}
        ref={scroll ? ref : undefined}
      >
        {children}
      </span>
    </Link>
  );
};

export default ActiveLink;
