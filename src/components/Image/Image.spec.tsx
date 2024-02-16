import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Image from "./Image";

describe("Image component", () => {
  it("renders correctly with given props", () => {
    const src = "test.jpg";
    const alt = "Test image";
    const className = "test-class";

    const { container } = render(
      <Image src={src} alt={alt} className={className} />
    );

    expect(container).toMatchSnapshot();
  });
});
