import { getServerSideProps } from '@/pages/posts';

//for testing the blog data loaded correctly from the server before the page shows

describe('getServerSideProps', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          { id: 1, title: 'First Post', content: 'Content 1' },
          { id: 2, title: 'Second Post', content: 'Content 2' },
        ]),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('fetches posts and returns props', async () => {
    const result = await getServerSideProps();
    expect(result).toEqual({
      props: {
        posts: [
          { id: 1, title: 'First Post', content: 'Content 1' },
          { id: 2, title: 'Second Post', content: 'Content 2' },
        ],
      },
    });
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/posts');
  });

  it('handles fetch error', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch error')));
    const result = await getServerSideProps();
    expect(result).toEqual({
      props: {
        posts: null,
      },
    });
  });
});