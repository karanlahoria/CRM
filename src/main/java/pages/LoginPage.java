package pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class LoginPage {
	public WebDriver driver;
	public String expectedTitle = "Free CRM software for customer relationship management, sales, marketing campaigns and support.";

//	@FindBy(xpath = "//a[contains(text(),'Login')]")
//	public WebElement loginPageBtn;	
	
	public void initialization() {
		System.setProperty("webdriver.gecko.driver", "/Users/Kay/Desktop/SeleniumJars/geckodriver");
	    driver = new FirefoxDriver();
	    driver.get("https://freecrm.com/");
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
	    driver.manage().window().maximize();
	    
	}
	
	public void openBrowser() {
		System.setProperty("webdriver.gecko.driver", "/Users/Kay/Desktop/SeleniumJars/geckodriver");
	    driver = new FirefoxDriver();
	    
	}
	public void openLoginPage() {
	    driver.get("https://freecrm.com/");
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
	    driver.manage().window().maximize();	
	}
	public void clickOnLoginPageBtn() {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		WebElement loginPageBtn = driver.findElement(By.xpath("//a[contains(text(),'Login')]"));
		js.executeScript("arguments[0].click();", loginPageBtn);
	}
	public String getTitle() {
		String actualTitle = driver.getTitle();
	    System.out.println(actualTitle);
		return actualTitle;
	}
	public void closeBrowser() {
		driver.quit();
	}
	public void enterEmailAndPassword(String a, String b) {
		driver.findElement(By.name("email")).sendKeys(a);
		driver.findElement(By.name("password")).sendKeys(b);	
	}
	public void clickOnLoginButton() {
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
	}
	
	public void hoverToContact() {
		WebElement contact = driver.findElement(By.xpath("//i[contains(@class,'users icon')]"));
		Actions a = new Actions(driver);
		a.moveToElement(contact).build().perform();
	}
	public void firstName(String fN) {
		driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(fN);
	}
	public void lastName(String lN) {
	driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(lN);
	}
	public void clickOnSaveBtn() {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		WebElement saveBtn = driver.findElement(By.xpath("//button[contains(text(),'Save')]"));
		js.executeScript("arguments[0].click();", saveBtn);
	}
	public void clickOnContactLink() {
		WebElement contactBtn = driver.findElement(By.xpath("//span[contains(text(),'Contacts')]"));
		contactBtn.click();
	}
	public void addNewContact() {
		//JavascriptExecutor js = (JavascriptExecutor)driver;
		WebElement contactBtn = driver.findElement(By.xpath("//div[3]//i[contains(@class,'plus inverted icon')]"));
		//js.executeScript("argument[0].click()", contactBtn);
		contactBtn.click();
	}
	
}
