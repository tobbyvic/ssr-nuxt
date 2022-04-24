export function INCREMENT(state) {
  state.counter++;
}

export function PCORPHONE(state, bool) {
  state.isPhone = bool;
}

export function SET_ARTICLES(state, payload) {
  console.log("SET_ARTICLES payload", payload);

  state.articles = payload;
}

export function SET_FILELIST(state, payload) {
  console.log("payload", payload);
  state.fileList = [...payload];
}
