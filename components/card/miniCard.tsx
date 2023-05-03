import { Grid } from "@mui/material";
import styled from 'styled-components';
import VisaCardType from '../../public/Visa.svg';
import MirCardType from '../../public/Mir.svg';
import Image from "next/image";


interface Props{
    nums: string;
    dateExpire: string;
    cardPaymentType: "visa" | "mir" | "mastercard";
    backgroundColor: string;
}



function MiniCard({nums, dateExpire, cardPaymentType, backgroundColor}:Props) {

    return (
        <Root backgroundColor={backgroundColor}>
            <CardNumsWrapper>
                <CardNums>{nums}</CardNums>
            </CardNumsWrapper>
            <CardDateAndLogoWrapper>
                <CardDateExpire>{dateExpire}</CardDateExpire>
                {
                    cardPaymentType === "mir" ?
                        <CardLogo src={MirCardType}/>
                        :
                        <CardLogo src={VisaCardType}/>
                }
            </CardDateAndLogoWrapper>
        </Root>
    );
};


interface IRoot{
    backgroundColor: string;
}

const Root = styled.div<IRoot>`
    height: 120px;
    width: 235px;
    border-radius: 10px;
    background-color: ${props=>props.backgroundColor || "black"};  
    margin-right: 30px;
`

const CardNums = styled.p`
    color: white;
    font-size: 20px;
`
const CardNumsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardDateExpire = styled.p`
    font-size: 20px;
    margin: 0px;
    color: white;
`
const CardDateAndLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px;
`
const CardLogo = styled(Image)`
        
`


  export default MiniCard;
