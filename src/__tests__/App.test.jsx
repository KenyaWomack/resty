import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import Form from '../Components/Form'
describe('App component intergration', () => {
    it('allows form use and renders expected results', () => {
        render(<App />);
        let urlInput = screen.getByTestId('form-input');
        let postSpan = screen.getByTestId('form-span-post');
        let button = screen.getByTestId('form-button');
        fireEvent.change(urlInput, {target: {vaule: 'test.com'}});
        fireEvent.click(postSpan);
        fireEvent.click(button);
        let pre = screen.getByTestId('results-pre');
        expect(pre).toHaveTextContent('fake thing 1');
    });
  });
    