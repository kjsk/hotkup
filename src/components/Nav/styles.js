import styled from "styled-components";

export const NavSection = styled.div`
width:100%;
position:fixed;
top:0;
z-index:3;
#NavSection2{
  background:transparent;
}
#NavSection{
  background: radial-gradient(
    69.3% 63.46% at 11.17% 10.02%,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 0.01%,
    rgba(200, 200, 200, 0.1) 100%
  );
  backdrop-filter: blur(160px);
  button{
    color:#2997F9;
}
}
.NavSection{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:center;
    align-items:center;
    justify-content:space-between;
    padding:1vw 7.2463768115942vw 1vw 7.2463768115942vw;
img{
    width: 11.8705035971223vw;
}
button{
    width: 12.3188405797101vw;
height: 3.47826086956522vw;
border: 0.072463768115942vw solid #2997F9;
box-sizing: border-box;
border-radius: 0.579710144927536vw;
font-style: normal;
font-weight: 600;
font-size: 1.15942028985507vw;
line-height: 2.17391304347826vw;
color: #FFFFFF;
background:transparent;
outline:none;
cursor:pointer;
transition:0.5s ease-in-out;
}
button:hover{
    box-shadow: rgb(41 151 249 / 60%) 0px 0px 1.5vw;
    color:#2997F9;
}
}
/*==============contact==================*/
.ant-modal-content{
  height: 100%;
.ant-modal-footer{
  display: none;
  padding:0;
  background:white;
}
}
#navcont {
  width: 100%;
  height: 100vh;
  background: white;
  top: 0;
}
#navcont #contact {
  padding: 0;
  margin: 0;
  background: white;
  width: 100%;
  height: fit-content;
  margin: auto 0;
}
#navcont #contclose {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
#navcont .contact_contrainer {
  max-width: calc(100% - 15.2%);
  margin: auto;
  display: flex;
  margin-top: 3vw;
  border-radius: 1.15107913669065vw 0px 0px 1.15107913669065vw;
}
@media (max-width: 750px) {
  .ant-modal-content {
    background: white;z
  }
  .ant-modal-content .ant-modal-footer{
    padding:0;
  }
  .ant-modal-footer{
    padding:0;
  }
  .ant-modal-footer{
    padding:0;
  }
  #navcont {
    width: 100%;
    height: 50vw;
    top: 0;
    padding:3vw 0;
  }
}
@media (max-width:750px){
    .NavSection{
        padding: 13px 30px;
        img{
            width: 90.75px;
        }
         button {
            width: 96px;
            height: 32px;
            border: 1px solid #2997F9;
            border-radius: 4px;
            font-size: 12px;
            line-height: 0;
        }
    }
}
`;
