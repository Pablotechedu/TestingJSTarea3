function convertCapacity() {
  const inputAmount = parseFloat(document.getElementById("inputAmount").value);
  const inputUnit = document.getElementById("inputUnit").value;

  const rates = {
    galon: { galon: 1, litro: 3.785, botella: 5 },
    litro: { galon: 0.264, litro: 1, botella: 1.32 },
    botella: { galon: 0.2, litro: 0.75, botella: 1 },
  };

  const galones = inputAmount * rates[inputUnit].galon;
  const litros = inputAmount * rates[inputUnit].litro;
  const botellas = inputAmount * rates[inputUnit].botella;

  document.getElementById("galonValue").innerText = `${galones.toFixed(2)} gal`;
  document.getElementById("litroValue").innerText = `${litros.toFixed(2)} L`;
  document.getElementById("botellaValue").innerText = `${botellas.toFixed(
    2
  )} botellas`;
}
