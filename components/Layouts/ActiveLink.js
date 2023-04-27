import Link from "next/link";

const ActiveLink = ({ children, href, activeSection, ...props }) => {
  const isActive = activeSection === href.slice(1);
  return (
    <Link href={href} {...props}>
      <span className={`relative cursor-pointer ${isActive ? "active" : ""}`}>
        {children}
        {isActive && (
          <div className="absolute bottom-0 left-0 h-1 bg-green-500 w-full" />
        )}
      </span>
    </Link>
  );
};

export default ActiveLink;
