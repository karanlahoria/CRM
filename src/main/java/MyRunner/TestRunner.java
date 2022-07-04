package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/Kay/Desktop/Selenium_Workplace/FreeCRMBDDFramework/src/main/java/Features/contact.feature", //path of feature file
		glue={"stepDefinations"}, //path of step defination file
		format={"pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit-output/cucumber.xml"}, //to generate different type of reports
		monochrome = true, //display the console output in a proper readable format
		dryRun = false,
		strict = true
		)

public class TestRunner {

}