import { render, screen, fireEvent } from '@testing-library/react'
import PostList from '@/components/PostList'

describe('PostList', () => {
    const mockBlogs = [
        { 
            id:1,
            title: 'First Post',
            content:'content 1'
        },
        { 
            id:2,
            title: 'Second Post',
            content:'content 2'
        }
    ];

    const mockOnPostSelect = jest.fn();

    it('renders a list of post titles', () => {
    render(<PostList posts={mockBlogs} onPostSelect={mockOnPostSelect} />);
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
  });

  it('calls onPostSelect when a post is clicked', () => {
    render(<PostList posts={mockBlogs} onPostSelect={mockOnPostSelect} />);
    fireEvent.click(screen.getByText('First Post'));
    expect(mockOnPostSelect).toHaveBeenCalledWith(mockBlogs[0]);
  });

  it('calls onPostSelect when Enter key is pressed', () => {
  render(<PostList posts={mockBlogs} onPostSelect={mockOnPostSelect} />);
  fireEvent.keyDown(screen.getByText('Second Post').parentElement, { key: 'Enter', code: 'Enter' });
  expect(mockOnPostSelect).toHaveBeenCalledWith(mockBlogs[1]);
});
})