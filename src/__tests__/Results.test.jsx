import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Results from './Results';

const server = setupServer(
    rest.get('/api/data', (req, res, ctx) => {
      return res(ctx.json({ message: 'Mocked data' }));
    })
  );
  
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('displays JSON data from the API', async () => {
    render(<Results url="/api/data" />);
  
    // Here, you may want to simulate an action that triggers the API request,
    // such as clicking a button or navigating to a specific route.
  
    // Wait for the API response and the component to render the data.
    // You can use a loading state or a specific element to wait for.
    // For example, if the `Results` component renders a loading spinner,
    // you can wait for it to disappear before asserting the data.
    // Here, we are waiting for the presence of the JSON data.
    await screen.findByText('Mocked data');
  
    // Assert that the JSON data is displayed correctly.
    expect(screen.getByText('Mocked data')).toBeInTheDocument();
  });
  