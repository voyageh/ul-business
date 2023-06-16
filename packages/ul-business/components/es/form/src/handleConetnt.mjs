const r = (d) => {
  const t = {}, a = {}, u = (n) => {
    n.forEach((o) => {
      o.items && o.items.length > 0 && u(o.items), o.id && (o.inputFormat && (!t[o.id] && (t[o.id] = {}), t[o.id].inputFormat = o.inputFormat), o.outputFormat && (!t[o.id] && (t[o.id] = {}), t[o.id].outputFormat = o.outputFormat), o.default && (a[o.id] = o.default));
    });
  };
  return u(d), {
    formatObj: t,
    defaulValue: a
  };
};
export {
  r as default
};
