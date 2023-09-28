import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import market from "./market.png";

const Navigation = ({ web3Handler, account }) => {
  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      style={{ background: "linear-gradient(to bottom, #3498db, #2980b9)" }}
    >
      <Container>
        <Navbar.Brand href="">
          {/* <img src={market} width="40" height="40" className="" alt="" /> */}
          <span style={{ color: "#fff" }}>&nbsp; NFT Marketplace</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: "#fff" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/create" style={{ color: "#fff" }}>
              Create
            </Nav.Link>
            <Nav.Link as={Link} to="/my-listed-items" style={{ color: "#fff" }}>
              My Listed Items
            </Nav.Link>
            <Nav.Link as={Link} to="/my-purchases" style={{ color: "#fff" }}>
              My Purchases
            </Nav.Link>
          </Nav>
          <Nav>
            {account ? (
              <Nav.Link
                href={`https://etherscan.io/address/${account}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button nav-button btn-sm mx-4"
              >
                <Button variant="outline-light">
                  {account.slice(0, 5) + "..." + account.slice(38, 42)}
                </Button>
              </Nav.Link>
            ) : (
              <Button onClick={web3Handler} variant="outline-light">
                Connect Wallet
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
