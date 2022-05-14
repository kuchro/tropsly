import { Toolbar, Typography } from "@mui/material";
import { StyledDiv, StyledA, StyledAppBar } from "./StyledElements";
import Link from "next/link";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h4">
          <Link href="/">Logo</Link>
        </Typography>
        <StyledDiv>
          <Link href="/mens">
            <StyledA className={router.pathname == "/mens" ? "active" : ""}>
              Mens
            </StyledA>
          </Link>
          <Link href="/womens">
            <StyledA className={router.pathname == "/womens" ? "active" : ""}>
              Womens
            </StyledA>
          </Link>
          <Link href="/kids">
            <StyledA className={router.pathname == "/kids" ? "active" : ""}>
              Kids
            </StyledA>
          </Link>
        </StyledDiv>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavigationBar;
