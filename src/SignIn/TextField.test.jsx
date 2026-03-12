import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextField from "./TextField";

test("user can type into input", async () => {
    render(<TextField id={"username"} label={"Username"} type={"email"} onChange={() => {}} className="textBox" required = {true} />);
    screen.debug();
    const input = await screen.findByLabelText("Username");

    await userEvent.type(input, "tony@stark.com");
    
    expect(input).toHaveValue("tony@stark.com");
    
});