import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from "./App"

test('renders city and vehicle selection form', () => {
  render(<App />);
  
  const citySelect = screen.getByLabelText(/Select City/i);
  const vehicleSelect = screen.getByLabelText(/Select Vehicle/i);

  expect(citySelect).toBeInTheDocument();
  expect(vehicleSelect).toBeInTheDocument();
});

test('displays result message on submission', async () => {
  render(<App />);

  const citySelect = screen.getByLabelText(/Select City for Cop 1/i);
  const vehicleSelect = screen.getByLabelText(/Select Vehicle for Cop 1/i);

  fireEvent.change(citySelect, { target: { value: 'Nuravgram' } });
  fireEvent.change(vehicleSelect, { target: { value: 'EV SUV' } });

  const resultMessage = await screen.findByText(/successfully captured/i);
  expect(resultMessage).toBeInTheDocument();
});