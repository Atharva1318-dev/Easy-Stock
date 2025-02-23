import React from "react";
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/exend-expect';
import HomeHero from '../landingPage/HomeHero';

//Test Suite

describe('Home hero component', () => {
    test('render hero image', () => {
        render(<HomeHero />);
        const HeroImg = screen.getByAltText('Hero Image');
        expect(HeroImg).toBeInTheDocument();
        expect(HeroImg).toHaveAttribute("src", "../src/assets/homeHero.png");
    });
});