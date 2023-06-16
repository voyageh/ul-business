import { INSTALLED_KEY as r } from "ul-utils";
const i = (n = []) => ({
  install: (t, s) => {
    t[r] || (t[r] = !0, n.forEach((o) => t.use(o)));
  }
});
export {
  i as makeInstaller
};
