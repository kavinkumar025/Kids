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
  getAvatarColor
} from "./chunk-X5GXZTWU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YFKO4TLY.js";

// src/app/layouts/parent-layout.ts
var _c0 = ["*"];
var _forTrack0 = ($index, $item) => $item.path;
var _forTrack1 = ($index, $item) => $item.id;
function ParentLayoutComponent_Conditional_12_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kid_r3 = ctx.$implicit;
    \u0275\u0275property("value", kid_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kid_r3.name);
  }
}
function ParentLayoutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 37);
    \u0275\u0275text(2, "Active Child");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 38);
    \u0275\u0275listener("change", function ParentLayoutComponent_Conditional_12_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectKid($event));
    });
    \u0275\u0275repeaterCreate(4, ParentLayoutComponent_Conditional_12_For_5_Template, 2, 2, "option", 39, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", (tmp_1_0 = ctx_r1.auth.selectedKid()) == null ? null : tmp_1_0.id);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.auth.kids());
  }
}
function ParentLayoutComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275element(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.path);
    \u0275\u0275attribute("data-testid", "nav-" + item_r4.label.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r4.safeIcon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.label, " ");
  }
}
function ParentLayoutComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kid_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.getAvatarColor(kid_r5.avatar));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kid_r5.name[0]);
  }
}
function ParentLayoutComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kid_r6 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getAvatarColor(kid_r6.avatar));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kid_r6.name[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kid_r6.name);
  }
}
function ParentLayoutComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 44);
    \u0275\u0275elementEnd();
  }
}
function ParentLayoutComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "circle", 45)(2, "path", 46);
    \u0275\u0275elementEnd();
  }
}
function ParentLayoutComponent_Conditional_46_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275listener("click", function ParentLayoutComponent_Conditional_46_For_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.mobileMenu = false);
    });
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r9.path);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r9.safeIcon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.label, " ");
  }
}
function ParentLayoutComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function ParentLayoutComponent_Conditional_46_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mobileMenu = false);
    });
    \u0275\u0275element(1, "div", 48);
    \u0275\u0275elementStart(2, "div", 49);
    \u0275\u0275listener("click", function ParentLayoutComponent_Conditional_46_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "div", 50)(4, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 51);
    \u0275\u0275element(6, "rect", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h1", 52);
    \u0275\u0275text(8, "Kids Money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "nav", 53);
    \u0275\u0275repeaterCreate(10, ParentLayoutComponent_Conditional_46_For_11_Template, 3, 3, "a", 54, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.allNavItems);
  }
}
function ParentLayoutComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275elementStart(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r10.path);
    \u0275\u0275attribute("data-testid", "mobile-nav-" + item_r10.label.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r10.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.label);
  }
}
var ParentLayoutComponent = class _ParentLayoutComponent {
  auth = inject(AuthService);
  themeService = inject(ThemeService);
  router = inject(Router);
  sanitizer = inject(DomSanitizer);
  mobileMenu = false;
  getAvatarColor = getAvatarColor;
  navItems;
  settingsNav;
  allNavItems;
  mobileNavItems;
  constructor() {
    const s = (html) => this.sanitizer.bypassSecurityTrustHtml(html);
    const raw = [
      { path: "/dashboard", label: "Dashboard", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1" stroke-width="2"/><rect x="14" y="3" width="7" height="5" rx="1" stroke-width="2"/><rect x="14" y="12" width="7" height="9" rx="1" stroke-width="2"/><rect x="3" y="16" width="7" height="5" rx="1" stroke-width="2"/></svg>' },
      { path: "/tasks", label: "Tasks", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2"/></svg>' },
      { path: "/wallet", label: "Wallet", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>' },
      { path: "/goals", label: "Goals", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>' },
      { path: "/sip", label: "Invest", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17 6 23 6 23 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
      { path: "/loans", label: "Borrow", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" stroke-width="2"/><line x1="2" y1="10" x2="22" y2="10" stroke-width="2"/></svg>' },
      { path: "/learning", label: "Learn", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke-width="2"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke-width="2"/></svg>' }
    ];
    this.navItems = raw.map((n) => __spreadProps(__spreadValues({}, n), { safeIcon: s(n.icon) }));
    this.settingsNav = { path: "/settings", label: "Settings", icon: '<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-width="2"/></svg>', safeIcon: s('<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-width="2"/></svg>') };
    this.allNavItems = [...this.navItems, this.settingsNav];
    this.mobileNavItems = [
      this.navItems[0],
      this.navItems[1],
      this.navItems[2],
      this.navItems[6],
      { path: "/settings", label: "More", icon: "", safeIcon: s('<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke-width="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke-width="2"/></svg>') }
    ];
  }
  selectKid(event) {
    const id = event.target.value;
    const kid = this.auth.kids().find((k) => k.id === id);
    if (kid)
      this.auth.selectedKid.set(kid);
  }
  doLogout() {
    return __async(this, null, function* () {
      yield this.auth.logout();
      this.router.navigate(["/"]);
    });
  }
  static \u0275fac = function ParentLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentLayoutComponent, selectors: [["app-parent-layout"]], hostAttrs: [1, "block"], ngContentSelectors: _c0, decls: 51, vars: 7, consts: [[1, "min-h-screen", "flex", 2, "background-color", "var(--bg)"], [1, "hidden", "lg:flex", "flex-col", "w-[240px]", "border-r", "fixed", "h-full", "z-20", "px-4", "py-6", 2, "border-color", "var(--border)", "background-color", "var(--bg-card)"], ["routerLink", "/dashboard", "data-testid", "sidebar-logo", 1, "flex", "items-center", "gap-3", "mb-8", "px-2"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", 2, "background", "linear-gradient(135deg,#0D9488,#14B8A6)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4.5", "h-4.5", "text-white"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "3", "stroke-width", "2"], ["d", "M2 10h20", "stroke-width", "2"], [1, "text-sm", "font-bold", "font-heading", "tracking-tight", "leading-tight"], [1, "text-[10px]", "tracking-widest", "uppercase", 2, "color", "var(--fg-muted)"], [1, "mb-6", "px-2"], [1, "text-[10px]", "uppercase", "tracking-widest", "mb-2", "font-semibold", "px-3", 2, "color", "var(--fg-muted)"], [1, "flex-1", "space-y-0.5"], ["routerLinkActive", "active-nav", 1, "nav-item", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all", 3, "routerLink"], [1, "mt-auto", "space-y-0.5"], ["routerLink", "/settings", "routerLinkActive", "active-nav", "data-testid", "nav-settings", 1, "nav-item", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all"], [3, "innerHTML"], ["data-testid", "logout-btn", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all", "w-full", "text-left", 2, "color", "#EF4444", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4.5", "h-4.5"], ["d", "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "flex-1", "lg:ml-[240px]", "pb-20", "lg:pb-0"], [1, "sticky", "top-0", "z-10", "border-b", "px-4", "lg:px-8", "h-14", "flex", "items-center", "justify-between", 2, "background-color", "color-mix(in srgb, var(--bg-card) 90%, transparent)", "backdrop-filter", "blur(16px)", "border-color", "var(--border)"], [1, "flex", "items-center", "gap-3"], ["data-testid", "mobile-menu-btn", 1, "lg:hidden", "p-2", "rounded-xl", 2, "color", "var(--fg)", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M3 12h18M3 6h18M3 18h18", "stroke-width", "2", "stroke-linecap", "round"], [1, "hidden", "lg:flex", "items-center", "gap-2.5"], [1, "w-7", "h-7", "rounded-lg", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold", 3, "background-color"], [1, "text-xs", "font-semibold", "leading-tight"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], [1, "flex", "items-center", "gap-2"], [1, "lg:hidden", "flex", "items-center", "gap-2", "rounded-full", "px-2.5", "py-1.5", 2, "background-color", "var(--muted)"], ["data-testid", "theme-toggle", 1, "p-2", "rounded-xl", "transition-colors", 2, "color", "var(--fg-muted)", 3, "click"], [1, "p-4", "lg:p-8", "max-w-7xl", "mx-auto"], [1, "fixed", "inset-0", "z-30", "lg:hidden"], [1, "lg:hidden", "fixed", "bottom-0", "inset-x-0", "z-20", "border-t", "px-1", "py-1.5", "safe-area-bottom", 2, "background-color", "color-mix(in srgb, var(--bg-card) 92%, transparent)", "backdrop-filter", "blur(16px)", "border-color", "var(--border)"], [1, "flex", "items-center", "justify-around"], ["routerLinkActive", "mob-active", 1, "flex", "flex-col", "items-center", "gap-0.5", "px-3", "py-1.5", "rounded-xl", "transition-all", 2, "color", "var(--fg-muted)", 3, "routerLink"], [1, "text-[10px]", "uppercase", "tracking-widest", "mb-1.5", "font-semibold", 2, "color", "var(--fg-muted)"], ["data-testid", "kid-selector", 1, "input", "text-sm", 3, "change", "value"], [3, "value"], [1, "flex-shrink-0", 3, "innerHTML"], [1, "w-7", "h-7", "rounded-lg", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold"], [1, "w-5", "h-5", "rounded-full", "flex", "items-center", "justify-center", "text-[9px]", "font-bold", "text-white"], [1, "text-xs", "font-medium", "max-w-[56px]", "truncate"], ["d", "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "5", "stroke-width", "2"], ["d", "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42", "stroke-width", "2"], [1, "fixed", "inset-0", "z-30", "lg:hidden", 3, "click"], [1, "absolute", "inset-0", "bg-black/50"], [1, "absolute", "left-0", "top-0", "bottom-0", "w-[270px]", "px-4", "py-6", "animate-fade-in", 2, "background-color", "var(--bg-card)", 3, "click"], [1, "flex", "items-center", "gap-3", "mb-8", "px-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-white"], [1, "text-sm", "font-bold", "font-heading"], [1, "space-y-0.5"], [1, "nav-item", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all", 3, "routerLink"], [1, "nav-item", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "transition-all", 3, "click", "routerLink"], [1, "text-[10px]", "font-semibold"]], template: function ParentLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "a", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "rect", 5)(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div")(8, "h1", 7);
      \u0275\u0275text(9, "Kids Money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11, "Parent Portal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(12, ParentLayoutComponent_Conditional_12_Template, 6, 1, "div", 9);
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275text(14, "Navigation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "nav", 11);
      \u0275\u0275repeaterCreate(16, ParentLayoutComponent_For_17_Template, 3, 4, "a", 12, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13)(19, "a", 14);
      \u0275\u0275element(20, "span", 15);
      \u0275\u0275text(21, " Settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 16);
      \u0275\u0275listener("click", function ParentLayoutComponent_Template_button_click_22_listener() {
        return ctx.doLogout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 17);
      \u0275\u0275element(24, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Log Out ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "main", 19)(27, "header", 20)(28, "div", 21)(29, "button", 22);
      \u0275\u0275listener("click", function ParentLayoutComponent_Template_button_click_29_listener() {
        return ctx.mobileMenu = !ctx.mobileMenu;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 23);
      \u0275\u0275element(31, "path", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "div", 25);
      \u0275\u0275conditionalCreate(33, ParentLayoutComponent_Conditional_33_Template, 2, 3, "div", 26);
      \u0275\u0275elementStart(34, "div")(35, "p", 27);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 28);
      \u0275\u0275text(38, "Parent Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 29);
      \u0275\u0275conditionalCreate(40, ParentLayoutComponent_Conditional_40_Template, 5, 4, "div", 30);
      \u0275\u0275elementStart(41, "button", 31);
      \u0275\u0275listener("click", function ParentLayoutComponent_Template_button_click_41_listener() {
        return ctx.themeService.toggle();
      });
      \u0275\u0275conditionalCreate(42, ParentLayoutComponent_Conditional_42_Template, 2, 0, ":svg:svg", 17)(43, ParentLayoutComponent_Conditional_43_Template, 3, 0, ":svg:svg", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 32);
      \u0275\u0275projection(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(46, ParentLayoutComponent_Conditional_46_Template, 12, 0, "div", 33);
      \u0275\u0275elementStart(47, "nav", 34)(48, "div", 35);
      \u0275\u0275repeaterCreate(49, ParentLayoutComponent_For_50_Template, 4, 4, "a", 36, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.auth.kids().length > 0 ? 12 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.navItems);
      \u0275\u0275advance(4);
      \u0275\u0275property("innerHTML", ctx.settingsNav.safeIcon, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(13);
      \u0275\u0275conditional((tmp_3_0 = ctx.auth.selectedKid()) ? 33 : -1, tmp_3_0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_4_0 = ctx.auth.parentProfile()) == null ? null : tmp_4_0.full_name);
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_5_0 = ctx.auth.selectedKid()) ? 40 : -1, tmp_5_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.themeService.theme() === "light" ? 42 : 43);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.mobileMenu ? 46 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.mobileNavItems);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ["\n\n.nav-item[_ngcontent-%COMP%] {\n  color: var(--fg-muted);\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  color: var(--fg);\n  background-color: var(--muted);\n}\n.active-nav[_ngcontent-%COMP%] {\n  background-color: var(--color-primary) !important;\n  color: white !important;\n}\n.active-nav[_ngcontent-%COMP%]   :is(svg[_ngcontent-%COMP%], span[innerHTML][_ngcontent-%COMP%]) {\n  filter: brightness(10);\n}\n.mob-active[_ngcontent-%COMP%] {\n  color: var(--color-primary) !important;\n}\n/*# sourceMappingURL=parent-layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-parent-layout", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], host: { class: "block" }, template: `
    <div class="min-h-screen flex" style="background-color: var(--bg)">
      <!-- Desktop Sidebar -->
      <aside class="hidden lg:flex flex-col w-[240px] border-r fixed h-full z-20 px-4 py-6"
             style="border-color: var(--border); background-color: var(--bg-card)">
        <a routerLink="/dashboard" class="flex items-center gap-3 mb-8 px-2" data-testid="sidebar-logo">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
            <svg class="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>
          </div>
          <div>
            <h1 class="text-sm font-bold font-heading tracking-tight leading-tight">Kids Money</h1>
            <p class="text-[10px] tracking-widest uppercase" style="color: var(--fg-muted)">Parent Portal</p>
          </div>
        </a>

        @if (auth.kids().length > 0) {
          <div class="mb-6 px-2">
            <p class="text-[10px] uppercase tracking-widest mb-1.5 font-semibold" style="color: var(--fg-muted)">Active Child</p>
            <select class="input text-sm" [value]="auth.selectedKid()?.id" (change)="selectKid($event)" data-testid="kid-selector">
              @for (kid of auth.kids(); track kid.id) {
                <option [value]="kid.id">{{ kid.name }}</option>
              }
            </select>
          </div>
        }

        <p class="text-[10px] uppercase tracking-widest mb-2 font-semibold px-3" style="color: var(--fg-muted)">Navigation</p>
        <nav class="flex-1 space-y-0.5">
          @for (item of navItems; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="active-nav"
               [attr.data-testid]="'nav-' + item.label.toLowerCase()"
               class="nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all">
              <span [innerHTML]="item.safeIcon" class="flex-shrink-0"></span>
              {{ item.label }}
            </a>
          }
        </nav>

        <div class="mt-auto space-y-0.5">
          <a routerLink="/settings" routerLinkActive="active-nav"
             class="nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all" data-testid="nav-settings">
            <span [innerHTML]="settingsNav.safeIcon"></span>
            Settings
          </a>
          <button (click)="doLogout()" data-testid="logout-btn"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all w-full text-left" style="color:#EF4444">
            <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Log Out
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 lg:ml-[240px] pb-20 lg:pb-0">
        <header class="sticky top-0 z-10 border-b px-4 lg:px-8 h-14 flex items-center justify-between"
                style="background-color:color-mix(in srgb, var(--bg-card) 90%, transparent);backdrop-filter:blur(16px);border-color:var(--border)">
          <div class="flex items-center gap-3">
            <button class="lg:hidden p-2 rounded-xl" style="color: var(--fg)" (click)="mobileMenu = !mobileMenu" data-testid="mobile-menu-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="hidden lg:flex items-center gap-2.5">
              @if (auth.selectedKid(); as kid) {
                <div class="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                     [style.background-color]="getAvatarColor(kid.avatar)">{{ kid.name[0] }}</div>
              }
              <div>
                <p class="text-xs font-semibold leading-tight">{{ auth.parentProfile()?.full_name }}</p>
                <p class="text-[10px]" style="color:var(--fg-muted)">Parent Account</p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            @if (auth.selectedKid(); as kid) {
              <div class="lg:hidden flex items-center gap-2 rounded-full px-2.5 py-1.5" style="background-color:var(--muted)">
                <span class="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                      [style.background-color]="getAvatarColor(kid.avatar)">{{ kid.name[0] }}</span>
                <span class="text-xs font-medium max-w-[56px] truncate">{{ kid.name }}</span>
              </div>
            }
            <button (click)="themeService.toggle()" class="p-2 rounded-xl transition-colors" style="color:var(--fg-muted)" data-testid="theme-toggle">
              @if (themeService.theme() === 'light') {
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke-width="2"/></svg>
              } @else {
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-width="2"/></svg>
              }
            </button>
          </div>
        </header>

        <div class="p-4 lg:p-8 max-w-7xl mx-auto">
          <ng-content />
        </div>
      </main>

      <!-- Mobile Menu Overlay -->
      @if (mobileMenu) {
        <div class="fixed inset-0 z-30 lg:hidden" (click)="mobileMenu = false">
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="absolute left-0 top-0 bottom-0 w-[270px] px-4 py-6 animate-fade-in"
               style="background-color: var(--bg-card)" (click)="$event.stopPropagation()">
            <div class="flex items-center gap-3 mb-8 px-2">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/></svg>
              </div>
              <h1 class="text-sm font-bold font-heading">Kids Money</h1>
            </div>
            <nav class="space-y-0.5">
              @for (item of allNavItems; track item.path) {
                <a [routerLink]="item.path" (click)="mobileMenu = false"
                   class="nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all">
                  <span [innerHTML]="item.safeIcon"></span>
                  {{ item.label }}
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
            <a [routerLink]="item.path" routerLinkActive="mob-active" [attr.data-testid]="'mobile-nav-' + item.label.toLowerCase()"
               class="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all" style="color:var(--fg-muted)">
              <span [innerHTML]="item.icon"></span>
              <span class="text-[10px] font-semibold">{{ item.label }}</span>
            </a>
          }
        </div>
      </nav>
    </div>
  `, styles: ["/* angular:styles/component:css;b60d7388a74a5c75d6b30a5bb8bd78bf4573d9e984d462faa3ae76c105b7592e;D:/Code/Angular/KidsMoney-main/frontend/src/app/layouts/parent-layout.ts */\n.nav-item {\n  color: var(--fg-muted);\n}\n.nav-item:hover {\n  color: var(--fg);\n  background-color: var(--muted);\n}\n.active-nav {\n  background-color: var(--color-primary) !important;\n  color: white !important;\n}\n.active-nav :is(svg, span[innerHTML]) {\n  filter: brightness(10);\n}\n.mob-active {\n  color: var(--color-primary) !important;\n}\n/*# sourceMappingURL=parent-layout.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentLayoutComponent, { className: "ParentLayoutComponent", filePath: "src/app/layouts/parent-layout.ts", lineNumber: 164 });
})();

export {
  ParentLayoutComponent
};
//# sourceMappingURL=chunk-OW55KWIC.js.map
