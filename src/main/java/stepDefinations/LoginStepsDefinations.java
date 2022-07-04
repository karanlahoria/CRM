package stepDefinations;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;



public class LoginStepsDefinations {
	WebDriver driver;
	LoginPage lg = new LoginPage();

	@Given("^User Already On Login Page$")
	public void user_already_on_login_page() {
		lg.openBrowser();
		lg.openLoginPage();
		lg.clickOnLoginPageBtn();
	}

	@When("^Title of Login Page is Free CRM$")
	public void title_of_login_page() {
		System.out.println(lg.getTitle());
		Assert.assertEquals(lg.expectedTitle, lg.getTitle());
	}

	@Then("^User Enter \"(.*)\" And \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		lg.enterEmailAndPassword(username, password);
	}

	@Then("^User Click on Login button$")
	public void click_on_login_button() {
		lg.clickOnLoginButton();
	}

	@Then("^User is on Home Page$")
	public void user_is_home_page() {
		System.out.println("Home Page Title ::" + lg.getTitle());
		Assert.assertEquals("Cogmento CRM", lg.getTitle());
	}
	
	@Then("^user mouse over contact link and click on it$")
	public void user_mouse_over_contact_link() {
		lg.hoverToContact();
		lg.addNewContact();
	}
	@Then("^user enter \"(.*)\" And \"(.*)\"$")
	public void user_enter_frist_and_last_name(String firstname, String lastname) {
		lg.firstName(firstname);
		lg.lastName(lastname);
	}
	
	@Then("^user click on save button$")
	public void click_on_save_button() {
		lg.clickOnSaveBtn();
	}
	@Then("^user on contacts page$")
	public void user_on_contact_page() throws InterruptedException {
		Thread.sleep(3000);
		lg.clickOnContactLink();
	}

	@Then("^Close the browser$")
	public void quitBrowser() {
		lg.closeBrowser();
	}
}