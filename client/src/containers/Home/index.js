import React from "react";
import { MainDiv } from "./styled";
import { Carousel, MovieCard, Services, Testimonials , Stats } from "../../components";

export const Home = () =>{
    return(
        <MainDiv>
            <Carousel/>
            <Services/>
            <Stats/>
            <Testimonials/>
            <MovieCard/>
        </MainDiv>
    )
}