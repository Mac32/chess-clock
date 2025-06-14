export default function OnlyOneActiveCheckbox(dataPresetsState, setDataPresetsState, index) {
    // Crear una copia profunda del estado
    const updatedPresets = dataPresetsState.map((preset, i) => ({
      ...preset,
      select: i === index // Solo el del índice actual estará activo
    }));
  
    setDataPresetsState(updatedPresets);
  }
  