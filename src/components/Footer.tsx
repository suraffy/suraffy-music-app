import styled from "@emotion/styled";

const FooterDiv = styled.footer`
  margin-top: 280px;
  z-index: -1;
`;

const Footer = () => {
  return (
    <FooterDiv className="container">
      <hr />
      <span className="d-block text-center  mt-1 mb-3">
        Designed and Developed by{" "}
        <a href="https://suraffy.netlify.app" target="blank">
          Surafel Araya
        </a>
      </span>
    </FooterDiv>
  );
};

export default Footer;
