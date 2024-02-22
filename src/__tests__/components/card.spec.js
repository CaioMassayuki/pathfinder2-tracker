import { render } from "@testing-library/vue";
import Card from "../../components/Card/CardContent.vue";

test("test render", () => {
  const { getByText } = render(Card, {
    props: {
      cardInfo: {
        title: "OI",
        description: "",
        quantity: "",
      },
      type: "action",
    },
  });

  expect(getByText('OI')).toBeInTheDocument()
});
