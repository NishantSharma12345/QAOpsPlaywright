Feature: Ecommerce validation

  @Regression
  Scenario: Placing the Order
    Given a login to Ecommerce application with "nishant@gmail.com" and "Iamking@000"
    When Add "zara coat 3" to Cart
    Then Verify "zara coat 3" is displayed in the Cart
    When Enter valid details and Place the Order
    Then Verify order is present in the OrderHistory

  @Validation
  @foo
  Scenario Outline: Placing the Order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

#Parameterization
    Examples:
    | username                      | password        |
    | nishant@gmail.com             | Iamking@00      |
    | hello@123.com                 | Iamhello@12     |