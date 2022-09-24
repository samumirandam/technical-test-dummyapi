import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import PostCard from '../index';

const defaultProps = {
  owner: {
    id: '60d0fe4f5311236168a109ca',
    title: 'ms',
    firstName: 'Sara',
    lastName: 'Andersen',
    picture: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  tags: ['cat'],
  text: 'test text',
  openUserProfile: jest.fn(),
  openPostComment: jest.fn(),
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<PostCard {...setupStore} />, {});
};

describe('Test for PostCard component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('test text')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render click in open user profile', () => {
    setup();
    fireEvent.click(screen.getByText('Sara Andersen'));
    expect(defaultProps.openUserProfile).toHaveBeenCalled();
  });

  test('Should render click in tag', () => {
    setup();
    fireEvent.click(screen.getByText('cat'));
    expect(global.window.location.pathname).toEqual('/tag/cat');
  });

  test('Should render click in open comments', () => {
    setup();
    fireEvent.click(screen.getByText('Comentarios'));
    expect(defaultProps.openPostComment).toHaveBeenCalled();
  });
});
