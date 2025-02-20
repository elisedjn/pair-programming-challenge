import { render, screen } from '@testing-library/react';
import { SearchInput } from './SearchInput';

describe('Components/Header', () => {
  describe('Normal state', () => {
    it('Should correctly display the search input', () => {
      render(<SearchInput value="" onChange={() => {}} />);
      const input = screen.getByLabelText('Search');
      expect(input).toBeInTheDocument();
    });
  });
});
