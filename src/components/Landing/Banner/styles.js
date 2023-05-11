import styled from "styled-components"

export const BannerSection = styled.div`
width:100%;
height:100%;
#bannerSectionContainer{
    width:100%;
    height:auto;
    position:relative;
}
#bannerSectionContainer #image_container{
    width:100%;
    height:100%;
}
#bannerSectionContainer #image_container #img1{
    width:100%;
    height:100%;
}
#bannerSectionContainer #image_container #img2{
    display:none;
}
#bannerSectionContainer #image_matter{
    position:absolute;
    top:5vw;
    left:7.68115942028985vw;
    display:flex;
    align-items:center;
}
#bannerSectionContainer #image_matter h1{
font-style: normal;
font-weight: bold;
font-size: 2.7536231884058vw;
line-height: 3.5vw;
color: #FFFFFF;
width:48.768115942029vw;
margin:0 0 1vw 0;
}
#bannerSectionContainer #image_matter p{
    font-style: normal;
    font-weight: normal;
    font-size: 1.15942028985507vw;
    line-height: 1.8705035971223vw;
    color: #FFFFFF;
    opacity: 0.7;
    width:36.4028776978417vw;
    }
    #bannerSectionContainer #banner_search{
        margin:2.15827338129496vw 0 0 0;
        height: 4.05797101449275vw;
        display:flex;
        flex-direction:center;
        align-items:center;
    }
    #bannerSectionContainer #banner_search input{
background: #FFFFFF;
border: 0.108695652173913vw solid #2997F9;
box-sizing: border-box;
border-radius: 0.579710144927536vw 0px 0px 0.579710144927536vw;
font-size: 1.15942028985507vw;
color: #200E32;
padding: 0px 0px 0px 1.15942028985507vw;
width: 19.0579710144928vw;
height:100%;
outline:none;
border:0.107913669064748vw solid #2997F9;
    }
    #bannerSectionContainer #banner_search button{
        background: #2997F9;
box-sizing: border-box;
border-radius: 0px 0.579710144927536vw 0.579710144927536vw 0px;
width: 19.0579710144928vw;
height:100%;
color:white;
cursor:pointer;
outline:none;
font-size: 1.15942028985507vw;
border:none;
display:flex;
justify-content:center;
align-items:center;
    }
    #bannerSectionContainer #banner_search button .icon{
        margin-left:1vw;
    }
    #bannerSectionContainer #image_matter #image_matter_b2 {
        position:relative;
    }
    #bannerSectionContainer #image_matter #image_matter_b2 #img2{
        width: 37.9710144927536vw;
height: auto;
    }
    #bannerSectionContainer #image_matter #image_matter_b2 #img2:nth-child(2){
        width: 23.8405797101449vw;
height: auto;
        position:absolute;
        top:12.3vw;
        left:6.8vw;
    
    }
    #bannerSectionContainer #image_matter #image_matter_b2 #img3{
        width: 37.9710144927536vw;
height: auto;
    }
    #bannerSectionContainer #image_matter #image_matter_b2 #img3:nth-child(2){
        width: 100%;
height: auto;
        position:absolute;
        top:0;
        left:0;
    }
    
@media (max-width:750px){
    #bannerSectionContainer{
        height: 194.146341463415vw;
    }
    #bannerSectionContainer #image_container #img1{
        display:none;
    }
    #bannerSectionContainer #image_container #img2{
        display:flex;
        width:100%;
        height:100%;
    }
     #bannerSectionContainer #image_matter {
        top: 34.390244vw;
        left:0;
        width: 100%;
        text-align: center;
        justify-content:center;
    }
     #bannerSectionContainer #image_matter h1 {
        font-size: 5.36585365853659vw;
        line-height: 6.58536585365854vw;
        width: 89.5121951219512vw;
        margin: auto;
    }
     #bannerSectionContainer #image_matter p {
        font-size: 2.92682926829268vw;
        line-height: 4.39024390243902vw;
        width: 70.7317073170732vw;
        margin: 2.4390243902439vw auto 7vw auto;
    }
     #bannerSectionContainer #banner_search {
        margin: auto;
        height: 9.75609756097561vw;
        width: fit-content;
    }
    #bannerSectionContainer #banner_search input{
        width:52.6829268292683vw;
        font-size: 2.92682926829268vw;
        border-radius: 1.39374878048781vw 0px 0px 1.39374878048781vw;
        padding:0 0.625vw 0 2.29166666666667vw;
    }
    #bannerSectionContainer #banner_search button{
        width:35.609756097561vw;
        font-size: 2.92682926829268vw;
        border-radius: 0 1.39374878048781vw 1.39374878048781vw 0;
    }
    #bannerSectionContainer #banner_search button .icon{
        display:none;
    }
    #bannerSectionContainer #image_matter #image_matter_b2{
       display:none;
    }
}
`