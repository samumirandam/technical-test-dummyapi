import React from 'react';
import { render, screen } from '@utils/test-utils';

import CommentList from '../index';

const defaultProps = {
  comment: {
    data: {
      data: [
        {
          id: '60d2252067d0d8992e611a79',
          message: 'Nice pic',
          owner: {
            id: '60d0fe4f5311236168a109df',
            title: 'mrs',
            firstName: 'Anaelle',
            lastName: 'Dumas',
            picture: 'https://randomuser.me/api/portraits/med/women/25.jpg',
          },
          post: '60d21af267d0d8992e610b8d',
          publishDate: '2019-12-29T23:48:20.035Z',
        },
      ],
    },
  },
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<CommentList {...setupStore} />, {});
};

describe('Test for CommentList component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('Nice pic')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render with idPost', () => {
    const props = { idPost: 'abd123' };
    setup(props);
    expect(screen.getByText('Nice pic')).toBeTruthy();
  });

  test('Should render loading state', () => {
    const props = {
      comment: {
        isLoading: true,
      },
    };
    setup(props);
    expect(screen.getByTestId('Loader')).toBeTruthy();
  });

  test('Should render error state', () => {
    const props = {
      comment: {
        isError: true,
        errorDetail: 'test error',
      },
    };
    setup(props);
    expect(screen.getByText('test error')).toBeTruthy();
  });

  test('Should render without comments', () => {
    const props = {
      comment: {
        data: {
          data: [],
        },
      },
    };
    setup(props);
    expect(screen.getByText('No tiene comentarios')).toBeTruthy();
  });
});
