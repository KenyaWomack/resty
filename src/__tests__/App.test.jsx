import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App'

describe('App component integration')
    it('allows form use nd renders expected results', () => {
     render(<App />)
     
    });
    