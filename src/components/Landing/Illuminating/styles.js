import styled from "styled-components";

export const IlluminatingSection = styled.div`
  margin-top: 2.46376811594203vw;
  background: white;
  #IlluminatingSectionContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.97101449275362vw 11vw 8.27338129496403vw 11vw;
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 2.60869565217391vw;
      line-height: 3.6231884057971vw;
      text-align: center;
      color: #200e32;
      margin: 0;
    }
    h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 1.30434782608696vw;
      line-height: 2.30381569474442vw;
      text-align: center;
      color: #200e32;
      width: 50.2898550724638vw;
      margin: 0.72463768115942vw auto 0 auto;
    }
    img {
      width: 100%;
      height: auto;
      margin: 2.17391304347826vw auto;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 1.73913043478261vw;
      line-height: 2.89855072463768vw;
      text-align: center;
      letter-spacing: 0.01em;
      color: #200e32;
      width: 57.1014492753623vw;
      margin: auto auto auto auto;
    }
  }

  @media (max-width: 750px) {
    #IlluminatingSectionContainer {
      padding: 14.1666666666667vw 6.58536585365854vw 14.1666666666667vw
        6.58536585365854vw;
      h1 {
        font-size: 5.85365853658537vw;
        line-height: 7.07317073170732vw;
        margin: 0 0 2.68292682926829vw 0;
      }
      h2 {
        font-size: 2.92682926829268vw;
        line-height: 4.39024390243902vw;
        width: 77.0731707317073vw;
        margin: 0 auto;
      }
      p {
        font-size: 3.41463414634146vw;
        line-height: 4.87804878048781vw;
        width: 86.536585vw;
        margin: 4.707317vw auto auto auto;
      }
    }
  }
`;
