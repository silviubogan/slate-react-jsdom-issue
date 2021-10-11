import App from "./App";
import renderer from "react-test-renderer";

test("my test", () => {
  const component = renderer.create(<App></App>);
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
