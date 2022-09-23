import React from 'react';
import { render, screen } from '@utils/test-utils';

import UserProfile from '../index';

const defaultProps = {
  user: {
    data: {
      id: '60d0fe4f5311236168a109ca',
      title: 'ms',
      firstName: 'Sara',
      lastName: 'Andersen',
      picture: 'https://randomuser.me/api/portraits/women/58.jpg',
      gender: 'female',
      email: 'sara.andersen@example.com',
      dateOfBirth: '1996-04-30T19:26:49.610Z',
      phone: '92694011',
      location: {
        street: '9614, SÃndermarksvej',
        city: 'Kongsvinger',
        state: 'Nordjylland',
        country: 'Denmark',
        timezone: '-9:00',
      },
      registerDate: '2021-06-21T21:02:07.374Z',
      updatedDate: '2021-06-21T21:02:07.374Z',
    },
  },
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<UserProfile {...setupStore} />, {});
};

describe('Test for UserProfile component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('Sara Andersen')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render with id', () => {
    const props = { id: 'abd123' };
    setup(props);
    expect(screen.getByText('Sara Andersen')).toBeTruthy();
  });

  test('Should render loading state', () => {
    const props = {
      user: {
        isLoading: true,
      },
    };
    setup(props);
    expect(screen.getByTestId('Loader')).toBeTruthy();
  });

  test('Should render error state', () => {
    const props = {
      user: {
        isError: true,
        errorDetail: 'test error',
      },
    };
    setup(props);
    expect(screen.getByText('test error')).toBeTruthy();
  });
});
