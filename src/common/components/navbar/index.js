import {
  Nav,
  NavLink,
  NavLogo,
  NavBarContainer,
  NavMenu,
  StyledA,
  MobileIcon,
} from "./StyledElements";
import Link from "next/link";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo>
            <Link href="/">Logo</Link>
            <MobileIcon>X</MobileIcon>
          </NavLogo>
          <NavMenu>
            <NavLink href="/mens">
              <StyledA className={router.pathname == "/mens" ? "active" : ""}>
                Mens
              </StyledA>
            </NavLink>

            <NavLink href="/womens">
              <StyledA className={router.pathname == "/womens" ? "active" : ""}>
                Womens
              </StyledA>
            </NavLink>

            <NavLink href="/kids">
              <StyledA className={router.pathname == "/kids" ? "active" : ""}>
                Kids
              </StyledA>
            </NavLink>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavigationBar;
