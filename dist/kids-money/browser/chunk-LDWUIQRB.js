import {
  Injectable,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-QO3DPW6E.js";

// src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  theme = signal(this.getStoredTheme(), ...ngDevMode ? [{ debugName: "theme" }] : []);
  constructor() {
    effect(() => {
      const t = this.theme();
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(t);
      localStorage.setItem("km_theme", t);
    });
  }
  getStoredTheme() {
    return localStorage.getItem("km_theme") || "light";
  }
  toggle() {
    this.theme.update((t) => t === "light" ? "dark" : "light");
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-LDWUIQRB.js.map
