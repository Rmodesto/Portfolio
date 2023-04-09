import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const ScrollSpy = ({ children, href, activeClassName }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, router.pathname]);

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeClass = "text-green font-bold underline";
  const className = isActive ? activeClass : "";

  return (
    <Link href={href}>
      {React.cloneElement(children, {
        className: className,
        onClick: handleClick,
        ref: ref,
      })}
    </Link>
  );
};

export default ScrollSpy;
