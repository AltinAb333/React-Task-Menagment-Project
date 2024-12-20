import * as React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter to wrap the component
import AuthenticationPage from "../pages/Authentication"; // Adjust path if needed

describe("AuthenticationPage", () => {
  test("renders AuthenticationPage with the correct text", () => {
    // Ensure everything is inside MemoryRouter
    render(
      <MemoryRouter initialEntries={["/login"]}>
        {" "}
        {/* Optionally set initial path */}
        <AuthenticationPage />
      </MemoryRouter>
    );

    // Check if the text "Authentication Page" is in the document
    const heading = screen.getByText(/Authentication Page/i);
    expect(heading).toBeInTheDocument(); // Assert that the text exists
  });
});
