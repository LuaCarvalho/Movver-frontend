export function numberSeparador(bigNumber: number): string {
  const value = String(bigNumber).split("").reverse()
  const newValue = value.map((val, index) => {
      if ((index % 3) == 0 && index != 0) return val + ".";
      return val
  })
  return newValue.reverse().join("")
}