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
import { HeartTwoTone,ShoppingCartOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import UserContext from "store/user-context";

const NavigationBar = () => {
  const router = useRouter();
  const userCtx = useContext(UserContext);
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo>
            <Link href="/">SportShop</Link>
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
            <NavLink href="/admin">
              <StyledA className={router.pathname == "/admin" ? "active" : ""}>
                Admin
              </StyledA>
            </NavLink>
            {userCtx.favoriteProducts.length != 0 ? (
              <NavLink href="/likes">
                <StyledA
                  className={router.pathname == "/likes" ? "active" : ""}
                >
                  <HeartTwoTone
                    style={{ fontSize: "25px" }}
                    twoToneColor="#eb2f96"
                  />
                </StyledA>
              </NavLink>
            ) : null}

            {userCtx.cartProducts.length != 0 ? (
              <NavLink href="/cart">
                <StyledA
                  className={router.pathname == "/cart" ? "active" : ""}
                >
                  <ShoppingCartOutlined
                    style={{ fontSize: "25px" }}
                  />
                </StyledA>
              </NavLink>
            ) : null}
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavigationBar;
