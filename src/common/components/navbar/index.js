import {useContext} from 'react'
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
import { HeartTwoTone } from "@ant-design/icons";
import UserContext from "store/user-context";


const NavigationBar = () => {
  const router = useRouter();
  const userCtx = useContext(UserContext);

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
            <NavLink href="/likes">
              <StyledA
                className={router.pathname == "/wardrobe" ? "active" : ""}
              >
                {userCtx.favoriteProducts.length > 0 ? 
                <HeartTwoTone
                  style={{ fontSize: "25px" }}
                  twoToneColor="#eb2f96"
                /> : null
              }
              </StyledA>
            </NavLink>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavigationBar;
