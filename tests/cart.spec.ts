import { test, expect } from "@playwright/test";

test("the page has a title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Product list with cart/);
});

test("add a single product to cart (the first one in the list)", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .getByTestId("product")
    .filter({
      has: page.getByText("Waffle with Berries"),
    })
    .getByText("Add to Cart")
    .click();

  await expect(page.getByText("Confirm Order")).toBeVisible();
});

test("add product to cart and remove it (the same one)", async ({ page }) => {
  await page.goto("/");

  await page
    .getByTestId("product")
    .filter({
      has: page.getByText("Waffle with Berries"),
    })
    .getByText("Add to Cart")
    .click();

  await page
    .getByTestId("product")
    .filter({
      has: page.getByText("Waffle with Berries"),
    })
    .getByTestId("decrement")
    .click();

  await expect(page.getByText("Your Cart (0)")).toBeVisible();
});

test("add the same product to cart two times", async ({ page }) => {
  await page.goto("/");

  await page
    .getByTestId("product")
    .filter({
      has: page.getByText("Waffle with Berries"),
    })
    .getByText("Add to Cart")
    .click();

  await page
    .getByTestId("product")
    .filter({
      has: page.getByText("Waffle with Berries"),
    })
    .getByTestId("increment")
    .click();

  await expect(page.getByText("Your Cart (2)")).toBeVisible();
});

test("add two different products to the cart", async ({ page }) => {
  await page.goto("/");

  // Click on waffle with berries
  await page
    .getByTestId("product")
    .filter({
      has: page.getByText("Waffle with Berries"),
    })
    .getByText("Add to Cart")
    .click();

  // Click on creme brulee
  await page
    .getByTestId("product")
    .filter({
      has: page.getByText("Vanilla Bean Crème Brûlée"),
    })
    .getByText("Add to Cart")
    .click();

  // Expect two product in cart
  await expect(page.getByText("Your Cart (2)")).toBeVisible();

  // Expect waffle with berries to be in cart
  await expect(
    page.getByTestId("cart").getByText("Waffle with Berries")
  ).toBeVisible();

  // Expect Vanilla Bean Crème Brûlée
  await expect(
    page.getByTestId("cart").getByText("Vanilla Bean Crème Brûlée")
  ).toBeVisible();
});

test("Show confirm order modal", async ({ page }) => {
  await page.goto("/");

  // Add to cart
  await page
    .getByTestId("product")
    .filter({
      has: page.getByText("Waffle with Berries"),
    })
    .getByText("Add to Cart")
    .click();
  // Add to cart

  await page.getByTestId("confirm-order").click();

  await expect(page.getByTestId("order-confirmed-modal")).toBeVisible();
});
