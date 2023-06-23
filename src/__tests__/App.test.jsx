import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
// import axiosMock from 'axios-mock-adapter';
// import '../setupTests'; // Import the setupTests file

import App from '../App';
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
    rest.get('/testGet', (req, res, ctx) => {
      return res(ctx.json({greeting: 'hello there'}))
    }),
  )

// import Form from '../Components/Form'
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
describe('results', () => {
    // it.todo('App tests to do!')
    // it('renders app as expected', () => {
    //     render(<App />);
    //     let method = screen.getByTestId('app-method');
    //     let url = screen.getByTestId('app-url');
    //     expect(method).toHaveTextContent('Request Method:');
    //     expect(url).toHaveTextContent('URL:');
    // })
    it('renders app', async () => {
        render(<App />);
    
        let urlInput = screen.getByTestId('form-input');
        let getSpan = screen.getByTestId('form-get');
        let button = screen.getByTestId('form-button');
        fireEvent.change(urlInput, { target: { value: '/testGet' } });
        fireEvent.click(getSpan);
        fireEvent.click(button);

        // Wait for the API calls to finish
        // let method = screen.getByText('Request Method:');
        // let url = screen.getByText('URL:');
    
        // Assert the expected text content
        expect(screen.getByTestId('app-method')).toHaveTextContent('GET');
        expect(screen.getByTestId('app-url')).toHaveTextContent('URL: /testGet');
    
        // Additional assertions for the API responses
        let json = await screen.findByTestId('json');
        expect(json).toHaveTextContent('hello there');
        // Add more assertions for other Pokémon data if needed
      });
});