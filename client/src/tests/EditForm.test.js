import {render} from '@testing-library/react'
import EditForm from '../components/EditForm'
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

describe('Test EditForm', () => {
  let func = jest.fn()
  beforeEach(() => {
    const buttonObj = {
      onClick: func,
      text: "LOL"
    }
    render(<EditForm successBtn={buttonObj} cancelBtn={buttonObj} />)
  })

  it('header is present', () => {
    const header = screen.getByTestId("headboi")
    expect(header).toBeInTheDocument()
  })

  it('name input changes when user types', () => {
    const nameInput = screen.getByRole("textbox", {name: 'Product Name'})
    userEvent.type(nameInput, "Oob")
    expect(nameInput).toHaveValue("Oob")
  })

  it('price input changes when user types', () => {
    const priceInput = screen.getByRole("textbox", {name: 'Price'})
    userEvent.type(priceInput, "999")
    expect(priceInput).toHaveValue("999")
  })

  it('quantity input changes when user types', () => {
    const quantityInput = screen.getByRole("textbox", {name: 'Quantity'})
    userEvent.type(quantityInput, "999")
    expect(quantityInput).toHaveValue("999")
  })

  it('Success button clicks properly', () => {
    const theButton = screen.getAllByTestId('button-test')[0]
    userEvent.click(theButton)
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('Failure button clicks properly', () => {
    const theButton = screen.getAllByTestId('button-test')[1]
    userEvent.click(theButton)
    expect(func).toHaveBeenCalledTimes(1)
    expect(func.mock.calls.length).toBe(1)
  })

  it('sends right arguments to handler for success button', () => {
    const nameInput = screen.getByRole("textbox", {name: 'Product Name'})
    userEvent.type(nameInput, "Oob")

    const priceInput = screen.getByRole("textbox", {name: 'Price'})
    userEvent.type(priceInput, "999")

    const quantityInput = screen.getByRole("textbox", {name: 'Quantity'})
    userEvent.type(quantityInput, "999")

    const theButton = screen.getAllByTestId('button-test')[0]
    userEvent.click(theButton)

    let rightObj = {
      title: "Oob",
      price: "999",
      quantity: "999",
    }

    expect(func.mock.calls[0][2]).toEqual(rightObj)
  })


})