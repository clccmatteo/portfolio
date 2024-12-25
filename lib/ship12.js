const ship12Data = {
  // IT
  Gennaio: {},
  Febbraio: {},
  Marzo: {},
  Aprile: {},
  Maggio: {},
  Giugno: {},
  Luglio: {},
  Agosto: {},
  Settembre: {},
  Ottobre: {},
  Novembre: {},
  Dicembre: {},
  // EN
  January: {},
  February: {},
  March: {},
  April: {},
  May: {},
  June: {},
  July: {},
  August: {},
  September: {},
  October: {},
  November: {},
  December: {},
};

export const getProjectData = (locale, month) => {
  return ship12Data[month] || {};
};
