import {
  ThemeService
} from "./chunk-LDWUIQRB.js";
import {
  AuthService
} from "./chunk-6U66OTJU.js";
import {
  CommonModule,
  Component,
  DomSanitizer,
  Router,
  RouterLink,
  RouterLinkActive,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QO3DPW6E.js";
import {
  KID_THEMES
} from "./chunk-X5GXZTWU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YFKO4TLY.js";

// src/app/layouts/kid-layout.ts
var _c0 = ["*"];
var _forTrack0 = ($index, $item) => $item.path;
function KidLayoutComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path);
    \u0275\u0275attribute("data-testid", "kid-nav-" + item_r1.label.toLowerCase().replace(" ", "-"));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r1.safeIcon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
function KidLayoutComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function KidLayoutComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "circle", 34)(2, "path", 35);
    \u0275\u0275elementEnd();
  }
}
function KidLayoutComponent_Conditional_40_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275listener("click", function KidLayoutComponent_Conditional_40_For_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.mobileMenu = false);
    });
    \u0275\u0275element(1, "span", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.path);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r5.safeIcon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.label, " ");
  }
}
function KidLayoutComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function KidLayoutComponent_Conditional_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileMenu = false);
    });
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "div", 38);
    \u0275\u0275listener("click", function KidLayoutComponent_Conditional_40_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "div", 39)(4, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 4);
    \u0275\u0275element(6, "rect", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "nav", 41);
    \u0275\u0275repeaterCreate(10, KidLayoutComponent_Conditional_40_For_11_Template, 3, 3, "a", 42, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", "linear-gradient(135deg," + ctx_r2.theme().primary + "," + ctx_r2.theme().secondary + ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Hi, ", ctx_r2.kidName(), "!");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.navItems);
  }
}
function KidLayoutComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275element(1, "span", 44);
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r6.path);
    \u0275\u0275attribute("data-testid", "kid-mob-" + item_r6.label.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r6.safeIcon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
  }
}
var KidLayoutComponent = class _KidLayoutComponent {
  auth = inject(AuthService);
  themeService = inject(ThemeService);
  router = inject(Router);
  sanitizer = inject(DomSanitizer);
  mobileMenu = false;
  kidName = computed(() => this.auth.kidSession()?.kid?.name || "Kid", ...ngDevMode ? [{ debugName: "kidName" }] : []);
  theme = computed(() => {
    const t = this.auth.kidSession()?.kid?.ui_theme || "neutral";
    return KID_THEMES[t] || KID_THEMES["neutral"];
  }, ...ngDevMode ? [{ debugName: "theme" }] : []);
  navItems;
  mobileNavItems;
  constructor() {
    const s = (html) => this.sanitizer.bypassSecurityTrustHtml(html);
    const raw = [
      { path: "/kid/dashboard", label: "Home", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1" stroke-width="2"/><rect x="14" y="3" width="7" height="5" rx="1" stroke-width="2"/><rect x="14" y="12" width="7" height="9" rx="1" stroke-width="2"/><rect x="3" y="16" width="7" height="5" rx="1" stroke-width="2"/></svg>' },
      { path: "/kid/tasks", label: "My Tasks", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2"/></svg>' },
      { path: "/kid/wallet", label: "My Wallet", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>' },
      { path: "/kid/goals", label: "Goals", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>' },
      { path: "/kid/sip", label: "Invest", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke-width="2"/></svg>' },
      { path: "/kid/loans", label: "Borrow", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" stroke-width="2"/><line x1="2" y1="10" x2="22" y2="10" stroke-width="2"/></svg>' },
      { path: "/kid/learning", label: "Stories", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke-width="2"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke-width="2"/></svg>' },
      { path: "/kid/achievements", label: "Achievements", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7" stroke-width="2"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke-width="2"/></svg>' }
    ];
    this.navItems = raw.map((n) => __spreadProps(__spreadValues({}, n), { safeIcon: s(n.icon) }));
    this.mobileNavItems = [this.navItems[0], this.navItems[1], this.navItems[2], this.navItems[6], this.navItems[7]];
  }
  doLogout() {
    return __async(this, null, function* () {
      yield this.auth.logout();
      this.router.navigate(["/"]);
    });
  }
  static \u0275fac = function KidLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KidLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidLayoutComponent, selectors: [["app-kid-layout"]], hostAttrs: [1, "block"], ngContentSelectors: _c0, decls: 45, vars: 11, consts: [[1, "min-h-screen", "flex"], [1, "hidden", "lg:flex", "flex-col", "w-[240px]", "border-r", "fixed", "h-full", "z-20", "px-4", "py-6", 2, "border-color", "var(--border)", "background-color", "var(--bg-card)"], ["data-testid", "kid-sidebar-logo", 1, "flex", "items-center", "gap-3", "mb-8", "px-2"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-white"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "3", "stroke-width", "2"], ["d", "M2 10h20", "stroke-width", "2"], [1, "text-sm", "font-bold", "font-heading", "tracking-tight", "leading-tight"], [1, "text-[10px]", "tracking-widest", "uppercase", 2, "color", "var(--fg-muted)"], [1, "text-[10px]", "uppercase", "tracking-widest", "mb-2", "font-semibold", "px-3", 2, "color", "var(--fg-muted)"], [1, "flex-1", "space-y-0.5"], ["routerLinkActive", "kid-active", 1, "kid-nav-item", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all", 3, "routerLink"], ["data-testid", "kid-logout-btn", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all", "w-full", "text-left", "mt-auto", 2, "color", "#EF4444", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "flex-1", "lg:ml-[240px]", "pb-20", "lg:pb-0"], [1, "sticky", "top-0", "z-10", "border-b", "px-4", "lg:px-8", "h-14", "flex", "items-center", "justify-between", 2, "background-color", "color-mix(in srgb, var(--bg-card) 90%, transparent)", "backdrop-filter", "blur(16px)", "border-color", "var(--border)"], [1, "flex", "items-center", "gap-3"], ["data-testid", "kid-mobile-menu", 1, "lg:hidden", "p-2", "rounded-xl", 2, "color", "var(--fg)", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M3 12h18M3 6h18M3 18h18", "stroke-width", "2", "stroke-linecap", "round"], [1, "hidden", "lg:flex", "items-center", "gap-2.5"], [1, "w-7", "h-7", "rounded-lg", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold"], [1, "text-xs", "font-semibold", "leading-tight"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], ["data-testid", "kid-theme-toggle", 1, "p-2", "rounded-xl", "transition-colors", 2, "color", "var(--fg-muted)", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4.5", "h-4.5"], [1, "p-4", "lg:p-8", "max-w-7xl", "mx-auto"], [1, "fixed", "inset-0", "z-30", "lg:hidden"], [1, "lg:hidden", "fixed", "bottom-0", "inset-x-0", "z-20", "border-t", "px-1", "py-1.5", "safe-area-bottom", 2, "background-color", "color-mix(in srgb, var(--bg-card) 92%, transparent)", "backdrop-filter", "blur(16px)", "border-color", "var(--border)"], [1, "flex", "items-center", "justify-around"], ["routerLinkActive", "kid-mob-active", 1, "flex", "flex-col", "items-center", "gap-0.5", "px-3", "py-1.5", "rounded-xl", "transition-all", 2, "color", "var(--fg-muted)", 3, "routerLink"], [1, "flex-shrink-0", 3, "innerHTML"], ["d", "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "5", "stroke-width", "2"], ["d", "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42", "stroke-width", "2"], [1, "fixed", "inset-0", "z-30", "lg:hidden", 3, "click"], [1, "absolute", "inset-0", "bg-black/50"], [1, "absolute", "left-0", "top-0", "bottom-0", "w-[270px]", "px-4", "py-6", "animate-fade-in", 2, "background-color", "var(--bg-card)", 3, "click"], [1, "flex", "items-center", "gap-3", "mb-8", "px-2"], [1, "text-sm", "font-bold", "font-heading"], [1, "space-y-0.5"], [1, "kid-nav-item", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all", 3, "routerLink"], [1, "kid-nav-item", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all", 3, "click", "routerLink"], [3, "innerHTML"], [1, "text-[10px]", "font-semibold"]], template: function KidLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "rect", 5)(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div")(8, "h1", 7);
      \u0275\u0275text(9, "Kids Money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, "Navigation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nav", 10);
      \u0275\u0275repeaterCreate(15, KidLayoutComponent_For_16_Template, 3, 4, "a", 11, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 12);
      \u0275\u0275listener("click", function KidLayoutComponent_Template_button_click_17_listener() {
        return ctx.doLogout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 13);
      \u0275\u0275element(19, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Log Out ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "main", 15)(22, "header", 16)(23, "div", 17)(24, "button", 18);
      \u0275\u0275listener("click", function KidLayoutComponent_Template_button_click_24_listener() {
        return ctx.mobileMenu = !ctx.mobileMenu;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 19);
      \u0275\u0275element(26, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "div", 21)(28, "div", 22);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div")(31, "p", 23);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 24);
      \u0275\u0275text(34, "Kid Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "button", 25);
      \u0275\u0275listener("click", function KidLayoutComponent_Template_button_click_35_listener() {
        return ctx.themeService.toggle();
      });
      \u0275\u0275conditionalCreate(36, KidLayoutComponent_Conditional_36_Template, 2, 0, ":svg:svg", 26)(37, KidLayoutComponent_Conditional_37_Template, 3, 0, ":svg:svg", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 27);
      \u0275\u0275projection(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(40, KidLayoutComponent_Conditional_40_Template, 12, 3, "div", 28);
      \u0275\u0275elementStart(41, "nav", 29)(42, "div", 30);
      \u0275\u0275repeaterCreate(43, KidLayoutComponent_For_44_Template, 4, 4, "a", 31, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("background", "linear-gradient(135deg, " + ctx.theme().primary + "08, " + ctx.theme().secondary + "05)");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("background", "linear-gradient(135deg," + ctx.theme().primary + "," + ctx.theme().secondary + ")");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("Hi, ", ctx.kidName(), "!");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.navItems);
      \u0275\u0275advance(13);
      \u0275\u0275styleProp("background", "linear-gradient(135deg," + ctx.theme().primary + "," + ctx.theme().secondary + ")");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.kidName()[0], " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.kidName());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.themeService.theme() === "light" ? 36 : 37);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.mobileMenu ? 40 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.mobileNavItems);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ["\n\n.kid-nav-item[_ngcontent-%COMP%] {\n  color: var(--fg-muted);\n}\n.kid-nav-item[_ngcontent-%COMP%]:hover {\n  color: var(--fg);\n  background-color: var(--muted);\n}\n.kid-active[_ngcontent-%COMP%] {\n  background-color: var(--color-primary) !important;\n  color: white !important;\n}\n.kid-active[_ngcontent-%COMP%]   :is(svg[_ngcontent-%COMP%], span[_ngcontent-%COMP%]) {\n  filter: brightness(10);\n}\n.kid-mob-active[_ngcontent-%COMP%] {\n  color: var(--color-primary) !important;\n}\n/*# sourceMappingURL=kid-layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KidLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-kid-layout", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], host: { class: "block" }, template: `
    <div class="min-h-screen flex" [style.background]="'linear-gradient(135deg, ' + theme().primary + '08, ' + theme().secondary + '05)'">
      <!-- Desktop Sidebar -->
      <aside class="hidden lg:flex flex-col w-[240px] border-r fixed h-full z-20 px-4 py-6"
             style="border-color: var(--border); background-color: var(--bg-card)">
        <div class="flex items-center gap-3 mb-8 px-2" data-testid="kid-sidebar-logo">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center" [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>
          </div>
          <div>
            <h1 class="text-sm font-bold font-heading tracking-tight leading-tight">Kids Money</h1>
            <p class="text-[10px] tracking-widest uppercase" style="color: var(--fg-muted)">Hi, {{ kidName() }}!</p>
          </div>
        </div>

        <p class="text-[10px] uppercase tracking-widest mb-2 font-semibold px-3" style="color: var(--fg-muted)">Navigation</p>
        <nav class="flex-1 space-y-0.5">
          @for (item of navItems; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="kid-active"
               [attr.data-testid]="'kid-nav-' + item.label.toLowerCase().replace(' ', '-')"
               class="kid-nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all">
              <span [innerHTML]="item.safeIcon" class="flex-shrink-0"></span>
              {{ item.label }}
            </a>
          }
        </nav>

        <button (click)="doLogout()" data-testid="kid-logout-btn"
                class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all w-full text-left mt-auto" style="color:#EF4444">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Log Out
        </button>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 lg:ml-[240px] pb-20 lg:pb-0">
        <header class="sticky top-0 z-10 border-b px-4 lg:px-8 h-14 flex items-center justify-between"
                style="background-color:color-mix(in srgb, var(--bg-card) 90%, transparent);backdrop-filter:blur(16px);border-color:var(--border)">
          <div class="flex items-center gap-3">
            <button class="lg:hidden p-2 rounded-xl" style="color:var(--fg)" (click)="mobileMenu = !mobileMenu" data-testid="kid-mobile-menu">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="hidden lg:flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                   [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
                {{ kidName()[0] }}
              </div>
              <div>
                <p class="text-xs font-semibold leading-tight">{{ kidName() }}</p>
                <p class="text-[10px]" style="color:var(--fg-muted)">Kid Account</p>
              </div>
            </div>
          </div>
          <button (click)="themeService.toggle()" class="p-2 rounded-xl transition-colors" style="color:var(--fg-muted)" data-testid="kid-theme-toggle">
            @if (themeService.theme() === 'light') {
              <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke-width="2"/></svg>
            } @else {
              <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-width="2"/></svg>
            }
          </button>
        </header>
        <div class="p-4 lg:p-8 max-w-7xl mx-auto"><ng-content /></div>
      </main>

      <!-- Mobile Menu -->
      @if (mobileMenu) {
        <div class="fixed inset-0 z-30 lg:hidden" (click)="mobileMenu = false">
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="absolute left-0 top-0 bottom-0 w-[270px] px-4 py-6 animate-fade-in"
               style="background-color: var(--bg-card)" (click)="$event.stopPropagation()">
            <div class="flex items-center gap-3 mb-8 px-2">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center" [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/></svg>
              </div>
              <span class="text-sm font-bold font-heading">Hi, {{ kidName() }}!</span>
            </div>
            <nav class="space-y-0.5">
              @for (item of navItems; track item.path) {
                <a [routerLink]="item.path" (click)="mobileMenu = false"
                   class="kid-nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all">
                  <span [innerHTML]="item.safeIcon"></span> {{ item.label }}
                </a>
              }
            </nav>
          </div>
        </div>
      }

      <!-- Mobile Bottom Nav -->
      <nav class="lg:hidden fixed bottom-0 inset-x-0 z-20 border-t px-1 py-1.5 safe-area-bottom"
           style="background-color:color-mix(in srgb, var(--bg-card) 92%, transparent);backdrop-filter:blur(16px);border-color:var(--border)">
        <div class="flex items-center justify-around">
          @for (item of mobileNavItems; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="kid-mob-active" [attr.data-testid]="'kid-mob-' + item.label.toLowerCase()"
               class="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all" style="color:var(--fg-muted)">
              <span [innerHTML]="item.safeIcon"></span>
              <span class="text-[10px] font-semibold">{{ item.label }}</span>
            </a>
          }
        </div>
      </nav>
    </div>
  `, styles: ["/* angular:styles/component:css;21c8242e275cf050b679c654b93c89aee42ab65b1d92ca804854def56742f4fb;D:/Code/Angular/KidsMoney-main/frontend/src/app/layouts/kid-layout.ts */\n.kid-nav-item {\n  color: var(--fg-muted);\n}\n.kid-nav-item:hover {\n  color: var(--fg);\n  background-color: var(--muted);\n}\n.kid-active {\n  background-color: var(--color-primary) !important;\n  color: white !important;\n}\n.kid-active :is(svg, span) {\n  filter: brightness(10);\n}\n.kid-mob-active {\n  color: var(--color-primary) !important;\n}\n/*# sourceMappingURL=kid-layout.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidLayoutComponent, { className: "KidLayoutComponent", filePath: "src/app/layouts/kid-layout.ts", lineNumber: 127 });
})();

export {
  KidLayoutComponent
};
//# sourceMappingURL=chunk-IEXVWZPQ.js.map
