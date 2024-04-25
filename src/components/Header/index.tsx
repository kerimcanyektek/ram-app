// Next
import Image from "next/image";
import Link from "next/link";

// Components
import { FavoritesButton } from "../FavoritesButton";

// Styles
import { HeaderContainer, HeaderContent } from "../../styles/components/Header";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={150} height={84} />
        </Link>

        <FavoritesButton />
      </HeaderContent>
    </HeaderContainer>
  );
}
