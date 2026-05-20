import Link from "next/link";

type FooterLinkProps = {
  href: string;
  label: string;
  external?: boolean;
};

export function FooterLink({ href, label, external }: FooterLinkProps) {
  const className =
    "relative w-fit text-base font-normal text-gray-300 transition-colors duration-400 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
