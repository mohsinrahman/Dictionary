import { render, screen,fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'
import { describe, it, expect,test } from 'vitest'
import { userEvent } from '@testing-library/user-event'


it('renders correctly', () => {
  const comp = render(<SearchBar />);
  expect(comp).toMatchSnapshot(); 
})
describe('SearchBar', () => {
  it('renders the SearchBar component', () => {
    render(<SearchBar />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
    screen.getByText('Find');
    expect(screen.getByText('Find')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search here')).toBeInTheDocument();
  })
})

it('Test for empty string', async () => {
 render(<SearchBar />);
  //const element = screen.getByRole("textbox")
  //const btnElement = screen.getByRole("button")
  await userEvent.click(screen.getByRole("button"))
  const elp = await screen.findByText("Input field cannot be blank!");
  expect(elp).toBeInTheDocument();
  //const btn = screen.getByText(/Find/i);
  //const expectedErrorMsg = 'Input field cannot be blank!';
  //fireEvent.click(btnElement);

  //expect("Input field cannot be blank!").fireEvent.click( btn );
  //fireEvent.change(element, {target: {value: 'Input field cannot be blank!'}})
})
/* it("for empty string", () => {
  expect(() => render(<SearchBar />))
  .toThrow("Input field cannot be blank!");
}); */


it("Render the app, type in a word, then look for result.", async () => {
  render(<SearchBar />);
  const el = screen.getByRole("textbox")
  await userEvent.type(el, "ten");
  await userEvent.click(screen.getByRole("button"))
  const elp = await screen.findByText("/tɛn/");
  expect(elp).toBeInTheDocument();
});



describe('Check input field', () => {
  it('input field should be empty initially', () => {
    render(<SearchBar/>)
   const element = screen.getByRole("textbox")
    expect(element).toHaveValue('')
  })
})

test('Should show what the user is typing in the searchbar', async() => {
    render(<SearchBar />);
    const user = userEvent.setup();
    const value = screen.getByPlaceholderText('Search here')
    await user.type(value, 'hello')
    expect(value).toHaveValue('hello');
    });

    
     /*  it('should render the component onto the screen', () => {
        render(<SearchBar />);
        expect(screen.getByTestId('add-word-input')).toBeInTheDocument();
        expect(screen.getByTestId('add-word-inputsubmit')).toBeInTheDocument();
    }); */ 
