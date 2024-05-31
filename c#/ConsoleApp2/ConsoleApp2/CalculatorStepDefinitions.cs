using System;
using TechTalk.SpecFlow;

namespace ConsoleApp2
{
    [Binding]
    public class CalculatorStepDefinitions
    {
        private int _firstNumber;
        private int _secondNumber;
        private int _result;

        [Given(@"first number is (.*)")]
        public void GivenFirstNumberIs(int firstNumber)
        {
            _firstNumber = firstNumber;
        }

        [Given(@"second number is (.*)")]
        public void GivenSecondNumberIs(int secondNumber)
        {
            _secondNumber = secondNumber;
        }

        [When(@"numbers are added")]
        public void WhenNumbersAreAdded()
        {
            _result = _firstNumber + _secondNumber;
        }

        [Then(@"result should be (.*)")]
        public void ThenResultShouldBe(int expectedResult)
        {
            if (_result != expectedResult)
            {
                throw new Exception($"Expected result to be {expectedResult}, but it was {_result}");
            }
        }
    }
}
