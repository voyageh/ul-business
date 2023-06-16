const n = Symbol("INSTALLED_KEY"), s = (o, c) => {
  if (o.install = (e) => {
    for (const t of [o, ...Object.values(c ?? {})])
      e.component(t.name, t);
  }, c)
    for (const [e, t] of Object.entries(c))
      o[e] = t;
  return o;
};
export {
  n as INSTALLED_KEY,
  s as withInstall
};
