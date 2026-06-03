Feature: Ecommerce validation

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