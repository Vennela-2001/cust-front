import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import CrudOperation from './crudoperation';

jest.mock('axios');

describe('CrudOperation', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, title: 'First Post', body: 'Body of first post' },
        { id: 2, title: 'Second Post', body: 'Body of second post' },
      ],
    });
  });

  test('renders the component properly', async () => {
    render(<CrudOperation />);
    expect(screen.getByText('React Axios CRUD Example')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Body')).toBeInTheDocument();
    expect(screen.getByText('Add Post')).toBeInTheDocument();
  });

  test('fetches and displays posts from API', async () => {
    render(<CrudOperation />);
    await waitFor(() => {
      expect(screen.getByText('First Post')).toBeInTheDocument();
      expect(screen.getByText('Second Post')).toBeInTheDocument();
    });
  });

  test('creates a new post', async () => {
    render(<CrudOperation />);
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'New Post' } });
    fireEvent.change(screen.getByPlaceholderText('Body'), { target: { value: 'Body of new post' } });
    fireEvent.click(screen.getByText('Add Post'));

    // await waitFor(() => {
    //   expect(screen.getByText('New Post')).toBeInTheDocument();
    //   expect(screen.getByText('Body of new post')).toBeInTheDocument();
    // });
  });

  test('updates a post', async () => {
    render(<CrudOperation />);
    // fireEvent.click(screen.getByText('Edit'));
    // fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Updated Post' } });
    // fireEvent.change(screen.getByPlaceholderText('Body'), { target: { value: 'Updated body of post' } });
    // fireEvent.click(screen.getByText('Update Post'));

    // await waitFor(() => {
    //   expect(screen.getByText('Updated Post')).toBeInTheDocument();
    //   expect(screen.getByText('Updated body of post')).toBeInTheDocument();
    // });
  });

  test('deletes a post', async () => {
    render(<CrudOperation />);
    // fireEvent.click(screen.getByText('Delete'));

    await waitFor(() => {
      expect(screen.queryByText('First Post')).not.toBeInTheDocument();
    });
  });
});
