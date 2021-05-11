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
    time: new Date('03/05/2021'),
    temperature: 10,
    city: 'Miami',
  },
  {
    time: new Date('03/05/2021'),
    temperature: 9,
    city: 'California',
  },
  {
    time: new Date('01/01/2021'),
    temperature: 11,
    city: 'Utah',
  },
  {
    time: new Date('05/01/2021'),
    temperature: 3,
    city: 'New York',
  },
  {
    time: new Date('03/05/2021'),
    temperature: 2,
    city: 'Miami',
  },
  {
    time: new Date('03/05/2021'),
    temperature: 7.78,
    city: 'California',
  },
]

const data: Array<TemperatureReading> = []

export function processReadings(readings: TemperatureReading[]): void {
  data.push(...readings)
}

export function sorterTemperature(
  readings: TemperatureReading[],
): TemperatureReading[] {
  const sorterArray = readings.sort((a, b) => a.temperature - b.temperature)
  return sorterArray.slice(0, 1).concat(sorterArray.slice(-1))
}

export function averageTemperature(readings: TemperatureReading[]): number {
  return (
    readings.reduce((acc, curr) => acc + curr.temperature, 0) / readings.length
  )
}

export function getTemperatureSummary(
  date: Date,
  city: string,
): TemperatureSummary | null {
  const filterData = data.filter(
    (el) =>
      Date.parse(el.time.toString()) === Date.parse(date.toString()) &&
      el.city === city,
  )

  if (filterData.length) {
    return {
      first: filterData[0].temperature,
      last: filterData.slice(-1)[0].temperature,
      high: sorterTemperature(filterData)[1].temperature,
      low: sorterTemperature(filterData)[0].temperature,
      average: averageTemperature(filterData),
    }
  }
  return null
}

processReadings(arrayData)
getTemperatureSummary(new Date('03/05/2021'), 'California')
