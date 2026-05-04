// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error("Error occured")
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  switch(true) {
    case (temperature === null):
      throw new ArgumentError("Sensor is broken: Temperature is null.")

    case (temperature >= 500):
      throw new OverheatingError(temperature)
      
    default:
      console.log(`Temperature is normal: ${temperature}°C`);
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
   try {
    // Call the check function to check the machine's temperature
    actions.check();
  } catch (error) {
    // Handle the ArgumentError (sensor is broken)
    if (error instanceof ArgumentError) {
      actions.alertDeadSensor();
    }
    // Handle the OverheatingError (temperature too high)
    else if (error instanceof OverheatingError) {
      if (error.temperature > 600) {
        // Temperature is above 600°C, shut down the machine
        actions.shutdown();
      } else {
        // Temperature is above 500°C but below 600°C, turn on the warning light
        actions.alertOverheating();
      }
    }
    // For any other error, rethrow it
    else {
      throw error;
    }
  }
}
