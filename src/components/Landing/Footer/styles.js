import styled from "styled-components";

export const FooterContainer = styled.div`
  #footer_cards2 {
    display: none;
  }
  #footer {
    width: 100%;
    height: fit-content;
    background: #02042b;
    padding: 3.59712230215827vw 5.03597122302158vw;
  }
  #footer_container_top {
    display: grid;
    grid-template-columns: repeat(6, auto);
    gap: 1.43884892086331vw;
  }

  #footer_container_top #footer_logo {
    display: flex;
    flex-direction: column;
  }
  #footer_container_top #footer_logo img {
    width: 133px;
    margin: 0 0 20px 0;
  }

  #footer_container_top #footer_logo h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    margin: 0 0 20px 0;
    opacity: 0.9;
  }
  #footer_container_top #footer_logo h1:hover {
    opacity: 1;
    transition: 0.5s ease-in-out;
  }
  #footer_container_top #footer_logo #p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin: 0 0 0 0;
    cursor: pointer;
    opacity: 0.9;
    transition: 0.5s ease-in-out;
  }
  #footer_container_top #footer_logo #p:hover {
    opacity: 1;
  }

  #footer_container_bottom_icons {
    width: fit-content;
    height: fit-content;
    margin: auto;
    margin-top: 6.61870503597122vw;
    display: flex;
  }
  #footer_container_bottom_icons a {
    width: fit-content;
    height: fit-content;
    margin: 0;
    margin-left: 2vw;
    cursor: pointer;
    padding: 0;
    display: flex;
  }
  #footer_container_bottom_icons a:first-child {
    margin-left: 0;
  }
  #footer_container_bottom_icons a img {
    width: 1.73913043478261vw;
    height: 1.73913043478261vw;
  }
  #footer_container_bottom p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.00719424460432vw;
    line-height: 1.72661870503597vw;
    text-align: center;
    letter-spacing: 0.06em;
    color: #ffffff;
    margin-top: 2.51798561151079vw;
    opacity: 0.9;
  }

  @media (max-width: 750px) {
    #footer {
      padding: 18vw 5.03597122302158vw;
    }
    #footer_container_top {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      gap: 10vw 1vw;
    }
    #footer_cards #h1 {
      font-size: 3.9vw;
      line-height: inherit;
      margin-bottom: 1vw;
      opacity: 0.8;
    }
    #footer_cards #p {
      font-size: 3.1vw;
      line-height: 7vw;
      opacity: 0.8;
    }
    #footer_container_top #footer_cards {
      padding-left: 9vw;
    }
    #footer_container_top #footer_cards:nth-child(2) {
      grid-column: 1/2;
      grid-row: 1/2;
      padding: unset;
    }
    #footer_container_top #footer_cards:nth-child(1) {
      padding: unset;
      grid-row: 3/4;
      grid-column: 2 span;
    }
    #footer_container_top #footer_cards:nth-child(6) {
      padding: unset;
      grid-row: 4/5;
    }
    #footer_container_top #footer_cards:nth-child(4) {
      padding: unset;
    }
    #footer_cards2 {
      grid-row: 4/5;
      display: block;
      height: 25vw;
      width: 31vw;
      margin: auto;
    }
    #footermap {
      width: 100%;
      height: 100%;
      border-radius: 2vw;
    }
    #footer_container_bottom_icons a {
      margin: 0;
      margin-left: 5vw;
      cursor: pointer;
    }
    #footer_container_bottom_icons a img {
      width: 4.87804878048781vw;
      height: 4.87804878048781vw;
    }
    #footer_container_bottom_icons {
      margin-top: 20vw;
    }
    #footer_container_bottom p {
      font-size: 3.3vw;
      margin-top: 5vw;
      line-height: inherit;
    }
  }
`;
