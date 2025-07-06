import { render, screen, fireEvent } from '@testing-library/react';
import PostInformation from '@/components/PostInformation';

//in this testing we check that popup renders correctly the content of a post and closes when told

describe('PostInformation', () => {
  const mockPost = { id: 1, title: 'Test Post', content: 'Test Content' };
  const mockOnClose = jest.fn();

  it('renders post title and content', () => {
    render(<PostInformation post={mockPost} onClose={mockOnClose} />);
    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
  render(<PostInformation post={mockPost} onClose={mockOnClose} />);
  fireEvent.click(screen.getByLabelText('Close'));
  expect(mockOnClose).toHaveBeenCalled();
});
});