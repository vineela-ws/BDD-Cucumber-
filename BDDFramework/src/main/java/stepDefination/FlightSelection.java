package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FlightSelection {
	WebDriver driver;
	
	@Given("^User is already in flights page$")
	public void user_is_already_in_flights_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Vennela\\Desktop\\New Chrome\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get("https://www.makemytrip.com/");	
		 driver.manage().window().maximize();
			Thread.sleep(5000);
	}

	@When("^title of login page is Make mytrip$")
	public void title_of_login_page_is_Make_mytrip() throws Throwable {
		String title = driver.getTitle();
		 System.out.println(title);	
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String source, String destination) throws Throwable {
		WebElement sorce = driver.findElement(By.xpath("//*[@id='flying_from_N']"));
		sorce.click();
		sorce.sendKeys(source);
		sorce.sendKeys(Keys.ENTER);
		Thread.sleep(5000);
		WebElement dst = driver.findElement(By.xpath("//*[@id='flying_to_N']"));
		dst.click();
		dst.sendKeys(destination);
		dst.sendKeys(Keys.ENTER);
		Thread.sleep(5000);
	}

	@Then("^user clicks on search button$")
	public void user_clicks_on_search_button() throws Throwable {	
		 driver.findElement(By.id("searchengine_btn")).click();
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.close();	
	}

}
