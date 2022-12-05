function splitText(text: string): string[] {
  return text.split("")
}

function func(text: string) {
  console.log(text);
  return splitText(text)
}

export default func