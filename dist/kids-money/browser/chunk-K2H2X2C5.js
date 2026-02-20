import {
  ParentLayoutComponent
} from "./chunk-OW55KWIC.js";
import {
  ThemeService
} from "./chunk-LDWUIQRB.js";
import {
  AuthService
} from "./chunk-6U66OTJU.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QO3DPW6E.js";
import "./chunk-X5GXZTWU.js";
import "./chunk-YFKO4TLY.js";

// src/app/pages/parent-settings.ts
var _forTrack0 = ($index, $item) => $item.id;
function ParentSettingsPage_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const kid_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kid_r1.name[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kid_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Age ", kid_r1.age, " \xB7 ", kid_r1.ui_theme, " theme");
  }
}
var ParentSettingsPage = class _ParentSettingsPage {
  auth = inject(AuthService);
  themeService = inject(ThemeService);
  static \u0275fac = function ParentSettingsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentSettingsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentSettingsPage, selectors: [["app-parent-settings"]], decls: 37, vars: 3, consts: [[1, "animate-fade-in", "max-w-2xl"], ["data-testid", "settings-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight", "mb-2"], [1, "text-sm", "mb-8", 2, "color", "var(--fg-muted)"], [1, "card", "p-6", "mb-4"], [1, "font-semibold", "font-heading", "text-sm", "mb-4"], [1, "space-y-3"], [1, "flex", "justify-between"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "text-sm", "font-medium"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", 2, "color", "var(--fg-muted)"], ["data-testid", "toggle-dark-mode", 1, "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "border", 2, "border-color", "var(--border)", 3, "click"], [1, "card", "p-6"], [1, "flex", "items-center", "justify-between", "p-3", "rounded-xl", 2, "background-color", "var(--muted)"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold", 2, "background-color", "var(--color-primary)"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"]], template: function ParentSettingsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-parent-layout")(1, "div", 0)(2, "h1", 1);
      \u0275\u0275text(3, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manage your preferences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "h3", 4);
      \u0275\u0275text(8, "Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "span", 7);
      \u0275\u0275text(12, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 6)(16, "span", 7);
      \u0275\u0275text(17, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 8);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "div", 3)(21, "h3", 4);
      \u0275\u0275text(22, "Appearance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 9)(24, "div")(25, "p", 8);
      \u0275\u0275text(26, "Dark Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 10);
      \u0275\u0275text(28, "Toggle light/dark theme");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "button", 11);
      \u0275\u0275listener("click", function ParentSettingsPage_Template_button_click_29_listener() {
        return ctx.themeService.toggle();
      });
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 12)(32, "h3", 4);
      \u0275\u0275text(33, "Manage Children");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 5);
      \u0275\u0275repeaterCreate(35, ParentSettingsPage_For_36_Template, 9, 4, "div", 13, _forTrack0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate((tmp_0_0 = ctx.auth.parentProfile()) == null ? null : tmp_0_0.full_name);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((tmp_1_0 = ctx.auth.parentProfile()) == null ? null : tmp_1_0.email);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.themeService.theme() === "light" ? "Enable" : "Disable", " ");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.auth.kids());
    }
  }, dependencies: [CommonModule, ParentLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentSettingsPage, [{
    type: Component,
    args: [{
      selector: "app-parent-settings",
      standalone: true,
      imports: [CommonModule, ParentLayoutComponent],
      template: `
    <app-parent-layout>
      <div class="animate-fade-in max-w-2xl">
        <h1 class="text-2xl font-bold font-heading tracking-tight mb-2" data-testid="settings-heading">Settings</h1>
        <p class="text-sm mb-8" style="color: var(--fg-muted)">Manage your preferences</p>

        <div class="card p-6 mb-4">
          <h3 class="font-semibold font-heading text-sm mb-4">Profile</h3>
          <div class="space-y-3">
            <div class="flex justify-between"><span class="text-sm" style="color: var(--fg-muted)">Name</span><span class="text-sm font-medium">{{ auth.parentProfile()?.full_name }}</span></div>
            <div class="flex justify-between"><span class="text-sm" style="color: var(--fg-muted)">Email</span><span class="text-sm font-medium">{{ auth.parentProfile()?.email }}</span></div>
          </div>
        </div>

        <div class="card p-6 mb-4">
          <h3 class="font-semibold font-heading text-sm mb-4">Appearance</h3>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium">Dark Mode</p>
              <p class="text-xs" style="color: var(--fg-muted)">Toggle light/dark theme</p>
            </div>
            <button (click)="themeService.toggle()" class="px-4 py-2 rounded-full text-sm font-medium border" style="border-color: var(--border)" data-testid="toggle-dark-mode">
              {{ themeService.theme() === 'light' ? 'Enable' : 'Disable' }}
            </button>
          </div>
        </div>

        <div class="card p-6">
          <h3 class="font-semibold font-heading text-sm mb-4">Manage Children</h3>
          <div class="space-y-3">
            @for (kid of auth.kids(); track kid.id) {
              <div class="flex items-center justify-between p-3 rounded-xl" style="background-color: var(--muted)">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style="background-color: var(--color-primary)">{{ kid.name[0] }}</span>
                  <div>
                    <p class="text-sm font-medium">{{ kid.name }}</p>
                    <p class="text-[10px]" style="color: var(--fg-muted)">Age {{ kid.age }} &middot; {{ kid.ui_theme }} theme</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </app-parent-layout>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentSettingsPage, { className: "ParentSettingsPage", filePath: "src/app/pages/parent-settings.ts", lineNumber: 58 });
})();
export {
  ParentSettingsPage
};
//# sourceMappingURL=chunk-K2H2X2C5.js.map
