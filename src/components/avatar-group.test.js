import { render, screen } from '@testing-library/react';
import {dataUser} from '../constant/data-user'
import App from '../App'
const mockAvatarGroupComponent = jest.fn();
jest.mock("./avatar-group", () => (props) => {
    mockAvatarGroupComponent(props);
  return <mock-avatarGroupComponent />;
});

test("If App is passed props maxLength, size and has data, Avatar Group is called with prop maxLength, size and data", () => {
    render(<App maxLength={2} size={'sm'} data={dataUser} />);
    expect(mockAvatarGroupComponent).toHaveBeenCalledWith(
      expect.objectContaining({        
          data: dataUser,
          maxLength: 2,
          size: 'sm'
      })
    );
});
  