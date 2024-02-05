import styled from "@emotion/styled";

const FooterDiv = styled.footer`
  font-size: 15px;
  margin-top: 80px;
  z-index: -1;
`;

const Footer = () => {
  return (
    <FooterDiv className="container">
      <hr />
      <span className="d-block text-center  mt-1 mb-4">
        Designed and Developed by{" "}
        <a href="https://suraffy.netlify.app" target="blank">
          Surafel Araya
        </a>
      </span>
    </FooterDiv>
  );
};

export default Footer;
