import React from "react";
import { FourParts, MainDiv, Numbers, Texts } from "./styled";

export const Stats = () => {
    return(
        <MainDiv>
            <FourParts>
                <Numbers>30+</Numbers>
                <Texts>Ուսանողներ</Texts>
            </FourParts>
            <FourParts>
                <Numbers style={{color:"#296ebd"}}>20</Numbers>
                <Texts>Աշխատանքի անցած ուսանողներ</Texts>
            </FourParts>
            <FourParts>
                <Numbers>27</Numbers>
                <Texts>Պրակտիկանտներ</Texts>
            </FourParts>
            <FourParts>
                <Numbers>4</Numbers>
                <Texts>Մեզ մոտ աշխատող ուսանողներ</Texts>
            </FourParts>
        </MainDiv>
    )
}