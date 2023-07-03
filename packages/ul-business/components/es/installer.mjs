import { INSTALLED_KEY as l } from "ul-utils";
const c = (t = []) => ({
  install: (e, r) => {
    e[l] || (e[l] = !0, r != null && r.table && e.provide("table", r.table), t.forEach((a) => e.use(a)));
  }
});
export {
  c as makeInstaller
};
