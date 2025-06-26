// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('App', () => {
  test('renderiza o título principal do Hero', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Cuidado Especializado em/i })
    ).toBeInTheDocument();
  });
}); 