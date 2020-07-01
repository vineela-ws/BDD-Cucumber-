package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = "C:\\Users\\Vennela\\git\\BDD-Cucumber-\\BDDFramework\\src\\main\\java\\features\\contacts.feature",
 glue={"stepDefination"},
 format= {"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
 monochrome = true //display the console output in a proper readable format

 
 
 //to generate different types of reporting
			//strict = true, //it will check if any step is not defined in step definition file
			//dryRun = false //to check the mapping is proper between feature file and step def file
			//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}
 
 
 )

public class TestRunner {
	

}
