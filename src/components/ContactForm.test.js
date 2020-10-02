import React from "react"
import {render, screen, fireEvent} from "@testing-library/react"
import ContactForm from "./ContactForm"

describe("test contact form", ()=>{
    test("app renders without error", ()=>{
        render(<ContactForm/>)
    })
    test("user can fill out and submit form", async ()=>{
        render(<ContactForm/>)

        const firstNameInput = screen.getByLabelText(/first name/i)
        const lastNameInput = screen.getByLabelText(/last name/i)
        const emailInput = screen.getByLabelText(/email/i)
        const messageInput = screen.getByLabelText(/message/i)


        const submitButton = screen.getByRole(/button/i)
        
        fireEvent.change(firstNameInput, {target: { value: "Tom"}})
        fireEvent.change(lastNameInput, {target: { value: "Sherman"}})
        fireEvent.change(emailInput, {target: { value: "tom@tom.tom"}})
        fireEvent.change(messageInput, {target: { value: "tomtomtom"}})


        fireEvent.click(submitButton)

        await screen.findByText(/Tom/i)
    })
})