import Image from "next/image";
import data from "../../data.json";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-center p-2 rounded-md hover:scale-110 transition-all ease-in-out w-full border border-gray-300 mb-3"
    >
      <div className="flex text-center w-full">
        {image && (
          <Image
            className="rounded-sm"
            alt={title}
            src={image}
            width={40}
            height={40}
          />
        )}
        <h2 className="font-semibold w-full text-center">{title}</h2>
      </div>
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-16 w-full px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 placeholder:text-xl">{data.name}</h1>
      {data.links.map((link) => {
        console.log(link);
        return <LinkCard href={link.href} key={link.href} {...link} />;
      })}
    </div>
  );
}
