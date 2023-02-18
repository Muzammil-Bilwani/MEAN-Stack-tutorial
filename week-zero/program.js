function main() {
  const text = "BANO QABIL"

  console.log(`Text Before Reversing: ${text}`)

  // text length -> 9
  // text length - 1 -> 8
  for (var i = text.length - 1; i >= 0; i--) {
    console.log(text[i])
  }
}

main()
