using NUnit.Framework;

[TestFixture]
public class MojaKlasaTest
{
    [Test]
    public void TestMetody()
    {
        var wynik = MojaKlasa.Dodawanie(5, 5);

        Assert.That(wynik, Is.EqualTo(10));
    }
}