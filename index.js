//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

//! Temperature data provided for 30 days
const temperaturesF = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76]; /* Fahrenheit readings */
const temperaturesC = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29]; // Celsius readings

// Helper functions to convert temperatures
const celsiusToFahrenheit = c => (c * 9 / 5) + 32;
const fahrenheitToCelsius = f => (f - 32) * 5 / 9;

// Convert all Celsius days to Fahrenheit for total in Fahrenheit
const temperaturesCtoF = temperaturesC.map(celsiusToFahrenheit);

// Convert all Fahrenheit days to Celsius for total in Celsius
const temperaturesFtoC = temperaturesF.map(fahrenheitToCelsius);

// Calculate total temperatures in both C and F
const tot_temperature_in_fahrenheit = temperaturesF.reduce((a, b) => a + b, 0) + temperaturesCtoF.reduce((a, b) => a + b, 0);
const tot_temperature_in_celsius = temperaturesC.reduce((a, b) => a + b, 0) + temperaturesFtoC.reduce((a, b) => a + b, 0);

// Calculate average temperatures in similar unit values
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

// Then Export the variables for testing
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};

// Optional: Run console.log for inspection
console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total Celsius:", tot_temperature_in_celsius);
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Celsius:", avg_temperature_in_celsius);
