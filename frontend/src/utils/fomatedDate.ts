export function FormatedDate(date: Date) {
  const dateFormated = new Intl.DateTimeFormat("pt-BR").format(
    new Date(date))

  return dateFormated;
}
