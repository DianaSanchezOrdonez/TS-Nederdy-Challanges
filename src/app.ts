import { format } from "date-fns"
// example interfaces that can be use
// TIP: the types mentioned in the interfaces must be fulfilled in order to solve the problem.
interface TemperatureReading {
  time: Date
  temperature: number
  city: string
}
interface TemperatureSummary {
  first: number
  last: number
  high: number
  low: number
  average: number
}

const arrayData = [
  {
    time: new Date("03/05/2021"),
    temperature: 10,
    city: "Miami",
  },
  {
    time: new Date("03/05/2021"),
    temperature: 9,
    city: "California",
  },
  {
    time: new Date("01/01/2021"),
    temperature: 11,
    city: "Utah",
  },
  {
    time: new Date("05/01/2021"),
    temperature: 3,
    city: "New York",
  },
  {
    time: new Date("03/05/2021"),
    temperature: 2,
    city: "Miami",
  },
  {
    time: new Date("03/05/2021"),
    temperature: 7.78,
    city: "California",
  },
]

const dateTest: Date = new Date("03/05/2021")
const data: Array<TemperatureReading> = []

function processReadings(readings: TemperatureReading[]): void {
  data.push(...readings)
}

function sorterTemperature(
  readings: TemperatureReading[],
): TemperatureReading[] {
  const sorterArray = readings.sort((a, b) => a.temperature - b.temperature)
  return sorterArray.slice(0, 1).concat(sorterArray.slice(-1))
}

function averageTemperature(readings: TemperatureReading[]): number {
  let total = 0
  readings.forEach((el) => (total += el.temperature))
  return total / readings.length
}

function getTemperatureSummary(date: Date, city: string): void {
  const filterData = data.filter(
    (el) =>
      Date.parse(el.time.toString()) === Date.parse(date.toString()) &&
      el.city === city,
  )

  if (filterData.length) {
    console.log(`   TEMPERATURE SUMMARY ${filterData[0].city.toUpperCase()} - ${format(
      filterData[0].time,
      "dd/MM/yyyy",
    )}
    ===============================================
    1. First temperature reading for the day → ${filterData[0].temperature}
    2. Last temperature reading for the day → ${
      filterData.slice(-1)[0].temperature
    }
    3. Highest temperature reading for the day → ${
      sorterTemperature(filterData)[1].temperature
    }
    4. Lowest temperature reading for the day → ${
      sorterTemperature(filterData)[0].temperature
    }
    5. Average of temperature readings that day → ${averageTemperature(
      filterData,
    )}
  `)
  }

  null
}

processReadings(arrayData)
getTemperatureSummary(dateTest, "California")

exports.processReadings = processReadings
exports.getTemperatureSummary = getTemperatureSummary
exports.sorterTemperature = sorterTemperature
exports.averageTemperature = averageTemperature
