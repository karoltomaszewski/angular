Feature: Calculator

Scenario: Add two numers
    Given first number is 5
    And second number is 5
    When numbers are added
    Then result should be 10