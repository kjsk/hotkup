import styled from "styled-components";

export const ClientsSection = styled.div`
  padding: 6.30434782608696vw 11vw 12vw 11vw;
  background: #f1f9ff;

  .ant-carousel .slick-dots-bottom {
    bottom: -4.5vw;
  }
  .ant-carousel .slick-dots li.slick-active {
    opacity: 1;
    background: linear-gradient(149.47deg, #2790f9 22.32%, #31b0f9 140.45%);
    width: 0.869565217391304vw;
    height: 0.869565217391304vw;
    margin-left: 0.869565217391304vw;
    border-radius: 8vw;
    position: relative;
  }
  .ant-carousel .slick-dots li.slick-active button {
    opacity: 1;
    background: linear-gradient(149.47deg, #2790f9 22.32%, #31b0f9 140.45%);
    width: 0.869565217391304vw;
    height: 0.869565217391304vw;
    margin-left: 0;
    border-radius: 8vw;
  }
  .ant-carousel .slick-dots li {
    padding-left: 0;
    background: linear-gradient(149.47deg, #2790f9 22.32%, #31b0f9 140.45%);
    opacity: 0.3;
    width: 0.869565217391304vw;
    height: 0.869565217391304vw;
    margin-left: 0.869565217391304vw;
    border-radius: 8vw;
  }
  .ant-carousel .slick-dots li button {
    padding-left: 0;
    background: linear-gradient(149.47deg, #2790f9 22.32%, #31b0f9 140.45%);
    opacity: 0.3;
    width: 0.869565217391304vw;
    height: 0.869565217391304vw;
    margin-left: 0;
    border-radius: 8vw;
  }
  a {
    display: none;
  }

  #btn_main {
    position: relative;
    width: 100%;
    margin: 3.8vw 0 0 0;
    #btn {
      position: absolute;
      left: 0;
      display: flex;
      justify-content: space-between;
      top: 16.5vw;
      z-index: 1;
      width: 116%;
      left: -6vw;
    }
    .icon {
      display: inline-block;
      border: 1.5px solid #2790f9;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      color: #2790f9;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 17px;
      padding: 0;
      cursor: pointer;
    }
  }
  ol li {
    padding-left: 0;
    background: linear-gradient(149.47deg, #2790f9 22.32%, #31b0f9 140.45%);
    opacity: 0.3;
    width: 0.869565217391304vw;
    height: 0.869565217391304vw;
    margin-left: 0.869565217391304vw;
    border-radius: 8vw;
  }
  #ClientsContainer h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.60869565217391vw;
    line-height: 3.6231884057971vw;
    text-align: center;
    color: #200e32;
    margin: 0;
  }
  .main_carousal_control {
    box-shadow: 0px 0px 2.17391304347826vw rgba(23, 25, 74, 0.1);
    border-radius: 1.73913043478261vw;
  }
  #carousal {
    width: 100%;
    border-radius: 1.73913043478261vw;
    height: 100%;
    overflow: hidden;
  }
  #carousal #carousal_main {
    display: flex;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 4.42028985507246vw 8.26086956521739vw;
    margin: auto;
    background: white;
  }
  #carousal #carousal_main #carousal_img_main {
    width: fit-content;
    height: fit-content;
    background: linear-gradient(149.47deg, #2790f9 22.32%, #31b0f9 140.45%);
    border-radius: 1.15942028985507vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.81159420289855vw 1.73913043478261vw;
    img {
      width: 14.7826086956522vw;
      height: 15.4347826086957vw;
      filter: drop-shadow(0px 0px 1.44927536231884vw rgba(0, 0, 0, 0.25));
      border-radius: 0.579710144927536vw;
    }
    h1 {
      font-style: normal;
      font-weight: 800;
      font-size: 1.59420289855072vw;
      line-height: 1.95652173913043vw;
      text-align: center;
      color: #ffffff;
      margin: 1.3768115942029vw 0 0.72463768115942vw 0;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 1.01449275362319vw;
      line-height: 1.3768115942029vw;
      text-align: center;
      letter-spacing: 0.01em;
      color: #ffffff;
      margin: 0;
      width: 11vw;
    }
  }

  #carousal #carousal_main #carousal_img_matter {
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 2.31884057971015vw;
      line-height: 3.6231884057971vw;
      color: #200e32;
      border-top: 0.289855072463768vw solid #ff86d8;
      width: fit-content;
      padding: 0.72463768115942vw 0 0.72463768115942vw 3.11594202898551vw;
    }
    #carousal_img_matter_inside {
      width: fit-content;
      display: flex;
      flex-direction: column;
      margin: 0 0 0 3.11594202898551vw;
    }
    #carousal_img_matter_inside #q1 {
      width: 2.60869565217391vw;
      height: 2.60869565217391vw;
    }
    #carousal_img_matter_inside #q2 {
      width: 2.60869565217391vw;
      height: 2.60869565217391vw;
      margin: 0 0 0 auto;
      transform: scaleX(-1);
    }
    #carousal_img_matter_inside p {
      font-style: normal;
      font-weight: normal;
      font-size: 1.30434782608696vw;
      line-height: 2.31884057971015vw;
      color: #18191f;
      opacity: 0.9;
      width: 34.3478260869565vw;
      margin: 0 0 0 3vw;
    }
  }

  @media (max-width: 750px) {
    padding: 16.6666666666667vw 5.625vw 16.6666666666667vw 5.625vw;
    .carousel-indicators {
      top: 108%;
    }
    #btn_main {
      #btn {
        display: none;
      }
    }
    .ant-carousel .slick-dots-bottom {
      bottom: -7.5vw;
    }
    .ant-carousel .slick-dots li.slick-active {
      width: 2.5vw;
      height: 2.5vw;
      margin-left: 2vw;
      border-radius: 8vw;
    }
    .ant-carousel .slick-dots li.slick-active button {
      width: 2.5vw;
      height: 2.5vw;
      margin-left: 0;
      border-radius: 8vw;
    }
    .ant-carousel .slick-dots li {
      width: 2.5vw;
      height: 2.5vw;
      margin-left: 2vw;
      border-radius: 8vw;
    }
    .ant-carousel .slick-dots li button {
      width: 2.5vw;
      height: 2.5vw;
      margin-left: 0;
      border-radius: 8vw;
    }
    #carousal #carousal_main {
      flex-direction: column-reverse;
      padding: 7.31707317073171vw 5.625vw;
      border-radius: 3vw;
    }
    #ClientsContainer h1 {
      font-size: 5.85365853658537vw;
      line-height: 7.07317073170732vw;
      margin: 0 0 5vw 0;
    }
    #carousal #carousal_main #carousal_img_matter {
      width: 100%;
    }
    #carousal #carousal_main #carousal_img_matter h1 {
      font-size: 5vw;
      line-height: 5vw;
      border: none;
      // border-bottom: 0.625vw solid #FF86D8;
      padding: 0 0 3vw 0;
      position: relative;
      margin: 0 0 6vw 0;
    }
    #carousal #carousal_main #carousal_img_matter h1:before {
      position: absolute;
      content: "";
      width: 28.75vw;
      height: 0.9vw;
      bottom: 0;
      background: linear-gradient(304.91deg, #ab58d8 -31.72%, #ff86d8 78.18%);
    }
    #carousal #carousal_main #carousal_img_matter #carousal_img_matter_inside {
      margin: 0;
    }
    #carousal
      #carousal_main
      #carousal_img_matter
      #carousal_img_matter_inside
      p {
      font-size: 3.8vw;
      line-height: 5.5vw;
      color: #18191f;
      opacity: 0.9;
      width: 64.7916666666667vw;
      margin: 2.08333333333333vw 0 2.08333333333333vw 3vw;
      width: 75vw;
    }
    #carousal #carousal_main #carousal_img_main {
      width: 100%;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: left;
      background: transparent;
      margin: 3vw 0 0 0;
    }
    #carousal #carousal_main #carousal_img_main img {
      width: 10.8333333333333vw;
      height: 10.8333333333333vw;
      border-radius: 50%;
      margin: 0 2vw 0 0;
      filter: none;
    }
    #carousal #carousal_main #carousal_img_main h1 {
      font-size: 3.33333333333333vw;
      line-height: auto;
      margin: 0;
      color: #200e32;
      margin: 0 auto 0.625vw 0;
      text-align: left;
    }
    #carousal #carousal_main #carousal_img_main p {
      font-size: 2.8vw;
      line-height: 3.75vw;
      text-align: left;
      margin: 1.5vw 0 0 0;
      color: #200e32;
      width: 100%;
    }
    #carousal
      #carousal_main
      #carousal_img_matter
      #carousal_img_matter_inside
      #q1 {
      width: 4vw;
      height: 4vw;
    }
    #carousal
      #carousal_main
      #carousal_img_matter
      #carousal_img_matter_inside
      #q2 {
      width: 4vw;
      height: 4vw;
    }
  }
`;

export const Detail = styled.div`
  padding: 12vw 11vw;
  background: white;
  #detail_container {
    width: 100%;
    height: 20.8695652173913vw;
    position: relative;
  }
  #detail_container #img1 {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #detail_container #img2 {
    display: none;
  }
  #detail_container #detail_container_matter {
    display: flex;
    flex-direction: column;
    align-items: left;
    z-index: 1;
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 5.5vw;
    left: 30vw;
  }
  #detail_container #detail_container_matter h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.02898550724638vw;
    line-height: 2.60869565217391vw;
    color: white;
    width: 38.8405797101449vw;
    margin: 0 0 2vw 0;
  }
  #detail_container #detail_container_matter #detail_container_matter_mini {
    display: flex;
    flex-direction: center;
    align-items: center;
  }
  #detail_container
    #detail_container_matter
    #detail_container_matter_mini
    input {
    width: 17.9710144927536vw;
    height: 3.47826086956522vw;
    font-style: normal;
    font-weight: normal;
    font-size: 1.01449275362319vw;
    line-height: 1.73913043478261vw;
    color: #474a57;
    background: #ffffff;
    border-radius: 0.36231884057971vw 0px 0px 0.36231884057971vw;
    padding: 1.01449275362319vw 1.15942028985507vw;
    border: none;
    outline: none;
  }
  #detail_container
    #detail_container_matter
    #detail_container_matter_mini
    button {
    width: 7.17391304347826vw;
    height: 3.47826086956522vw;
    background: #18191f;
    border-radius: 0px 0.36231884057971vw 0.36231884057971vw 0px;
    outline: none;
    border: none;
    color: white;
    font-size: 1.01449275362319vw;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 750px) {
    padding: 16.6666666666667vw 5.625vw 16.6666666666667vw 5.625vw;
    #detail_container {
      background: linear-gradient(149.47deg, #2790f9 22.32%, #31b0f9 140.45%);
      border-radius: 2.92682926829268vw;
      width: 100%;
      height: 100%;
      position: unset;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10vw 5.41666666666667vw 15.4166666666667vw 5.41666666666667vw;
    }
    #detail_container #img1 {
      display: none;
    }
    #detail_container #img2 {
      display: flex;
      width: 24.2756097560976vw;
    }
    #detail_container #detail_container_matter {
      position: unset;
    }
    #detail_container #detail_container_matter h1 {
      font-size: 4.8vw;
      line-height: 5.83333333333333vw;
      width: 73vw;
      text-align: center;
      margin: 4.5vw auto 6vw auto;
    }
    #detail_container #detail_container_matter #detail_container_matter_mini {
      width: fit-content;
      margin: auto;
    }
    #detail_container
      #detail_container_matter
      #detail_container_matter_mini
      input {
      width: 47.5609756097561vw;
      height: 9.75609756097561vw;
      font-size: 2.92682926829268vw;
      line-height: 0;
      color: #474a57;
      border-radius: 2vw 0 0 2vw;
      padding: 0 0 0 3vw;
    }
    #detail_container
      #detail_container_matter
      #detail_container_matter_mini
      button {
      width: 20.7317073170732vw;
      height: 9.75609756097561vw;
      border-radius: 0 2vw 2vw 0;
      font-size: 1.01449275362319vw;
      font-size: 2.92682926829268vw;
    }
  }
`;
