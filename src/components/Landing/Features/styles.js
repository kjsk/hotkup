import styled from "styled-components";

export const FeaturesSection = styled.div`
  padding: 7vw 11vw 5vw 11vw;
  background: #f1f9ff;
  #FeaturesContainer {
    width: 100%;
    height: 100%;
  }
  #FeaturesContainer h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.60869565217391vw;
    text-align: center;
    color: #200e32;
    margin: 0;
  }
  #FeaturesContainer h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.30434782608696vw;
    line-height: 2.31884057971015vw;
    text-align: center;
    color: #200e32;
    width: 50.2898550724638vw;
    margin: 0.72463768115942vw auto 0 auto;
  }
  #Feature_card_container {
    width: 100%;
    background: transparent;
  }
  #Feature_card_container #card {
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    background: transparent;
    padding: 2vw 0 0 0;
  }
  #Feature_card_container #card:nth-child(1) {
    padding: 5vw 0 0 0;
  }
  #Feature_card_container #card:nth-child(even) {
    flex-direction: row-reverse;
  }
  #Feature_card_container #card #card_matter {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: auto auto auto 0;
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 2.31884057971015vw;
      line-height: 3.6231884057971vw;
      color: #200e32;
      margin: 0;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 1.30434782608696vw;
      line-height: 2.31884057971015vw;
      color: #18191f;
      opacity: 0.9;
      width: 35.8695652173913vw;
      margin: 0.797101449275362vw auto 2.2463768115942vw 0;
    }
    button {
      width: 13.1159420289855vw;
      height: 3.47826086956522vw;
      border: 0.072463768115942vw solid #2997f9;
      box-sizing: border-box;
      border-radius: 0.575539568345324vw;
      font-style: normal;
      font-weight: 600;
      font-size: 1.15942028985507vw;
      line-height: 2.17391304347826vw;
      color: #200e32;
      background: transparent;
      outline: none;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button .icon {
      margin-left: 1vw;
    }
    button:hover {
      box-shadow: 0px 0px 1vw #2997f942;
      color: #2997f9;
      width: 13.7vw;
    }
  }
  #Feature_card_container #card #card_img {
    img {
      width: 40vw;
      height: 43.4782608695652vw;
    }
  }

  @media (max-width: 750px) {
    padding: 16.6666666666667vw 5.625vw 23.666667vw 5.625vw;
    #FeaturesContainer h1 {
      font-size: 5.85365853658537vw;
      line-height: 7.07317073170732vw;
      margin: 0 0 2.68292682926829vw 0;
    }
    #FeaturesContainer h2 {
      font-size: 2.92682926829268vw;
      line-height: 4.39024390243902vw;
      width: 84vw;
      margin: 0 auto;
    }
    #Feature_card_container #card {
      display: flex;
      width: 100%;
      padding: 25.5vw 0 0 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    #Feature_card_container #card:nth-child(1) {
      padding: 15vw 0 0 0;
    }
    #Feature_card_container #card:nth-child(even) {
      flex-direction: column;
    }
    #Feature_card_container #card #card_img img {
      width: 77.9609756097561vw;
      height: 84.7414634146342vw;
    }
    #Feature_card_container #card #card_matter {
      align-items: center;
      justify-content: center;
      margin: auto;
      text-align: center;
    }
    #Feature_card_container #card #card_matter h1 {
      font-size: 5.85365853658537vw;
      line-height: 7.07317073170732vw;
      margin: 0;
    }
    #Feature_card_container #card #card_matter p {
      font-size: 3.5vw;
      line-height: 5vw;
      width: 77.8048780487805vw;
      margin: 2vw 0 3vw 0;
    }
    #Feature_card_container #card #card_matter button {
      border: 0.171500833333333vw solid #2997f9;
      box-sizing: border-box;
      border-radius: 1.37200833333333vw;
      width: 36.3414634146341vw;
      height: 9.75609756097561vw;
      font-size: 2.92682926829268vw;
      margin: 0;
    }
    #Feature_card_container #card #card_matter button:hover {
      width: 37.2vw;
    }
    #Feature_card_container #card #card_matter button .icon {
      margin-left: 3vw;
    }
    #Feature_card_container #card #card_matter button:hover .icon {
      margin-left: 4vw;
    }
  }
`;

export const FeaturesSection2 = styled.div`
  width: 100%;
  padding: 10vw 11vw;
  background: white;
  #Features2Container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 2vw;
  }
  #Features2Container #card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    img {
      width: 11.5942028985507vw;
      height: 11.5942028985507vw;
    }
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 2.02898550724638vw;
      line-height: 3.6231884057971vw;
      color: #200e32;
      margin: 0;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 1.15942028985507vw;
      line-height: 2.17391304347826vw;
      color: #18191f;
      opacity: 0.9;
      width: 31.304347826087vw;
      margin: 0 auto 1vw 0;
    }
    button {
      width: fit-content;
      height: fit-content;
      padding: 0.72463768115942vw 3.47826086956522vw;
      border: 0.072463768115942vw solid #2997f9;
      box-sizing: border-box;
      border-radius: 0.575539568345324vw;
      font-style: normal;
      font-weight: 600;
      font-size: 1.15942028985507vw;
      color: #200e32;
      background: transparent;
      outline: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
    }
    button .icon {
      margin-left: 1vw;
    }
    button:hover {
      box-shadow: 0px 0px 1vw #2997f942;
      color: #2997f9;
    }
    button:hover .icon {
      margin-left: 1.2vw;
    }
  }

  @media (max-width: 750px) {
    padding: 16.6666666666667vw 5.625vw 16.6666666666667vw 5.625vw;
    #Features2Container {
      grid-template-columns: auto;
      gap: 10vw;
    }
    #Features2Container #card {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    #Features2Container #card p {
      font-size: 3.5vw;
      line-height: 4.39024390243902vw;
      width: 77vw;
      margin: 1.5vw 0 5vw 0;
    }
    #Features2Container #card h1 {
      font-size: 5.85365853658537vw;
      line-height: 7.07317073170732vw;
    }
    #Features2Container #card img {
      width: 26.6666666666667vw;
      height: 26.6666666666667vw;
    }
    #Features2Container #card button {
      padding: 2.5vw 5.20833333333333vw;
      border: 0.171500833333333vw solid #2997f9;
      border-radius: 1.37200833333333vw;
      font-size: 2.92682926829268vw;
    }
    #Features2Container #card button .icon {
      margin-left: 3vw;
    }
    #Features2Container #card button:hover .icon {
      margin-left: 3.2vw;
    }
  }
`;
