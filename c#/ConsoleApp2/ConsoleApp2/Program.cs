using Moq;
using NUnit.Framework;


internal class Program
{
    static void Main(string[] args)
    {
    }
}
public interface IWebService
{
    void SendData(string data);
}

public class Calculator
{
    private IWebService _webService;

    public Calculator(IWebService webService)
    {
        _webService = webService;
    }

    public int Add(int a, int b)
    {
        int result = a + b;
        _webService.SendData($"Add operation: {a} + {b} = {result}");
        return result;
    }
}

[TestFixture]
public class CalculatorTests
{
    [Test]
    public void Add_ShouldSendDataToWebService()
    {
        // Arrange
        Mock<IWebService> webServiceMock = new Mock<IWebService>();
        Calculator calculator = new Calculator(webServiceMock.Object);

        // Act
        int result = calculator.Add(3, 5);

        // Assert
        Assert.AreEqual(8, result);

        // Verify that the SendData method was called with the expected argument
        webServiceMock.Verify(ws => ws.SendData("Add operation: 3 + 5 = 8"), Times.Once);
    }
}
