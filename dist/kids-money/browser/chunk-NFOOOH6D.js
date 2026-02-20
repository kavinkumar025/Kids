import {
  KidLayoutComponent
} from "./chunk-IEXVWZPQ.js";
import {
  FirestoreService
} from "./chunk-PU7NQC76.js";
import "./chunk-LDWUIQRB.js";
import {
  AuthService
} from "./chunk-6U66OTJU.js";
import {
  CommonModule,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QO3DPW6E.js";
import {
  KID_THEMES
} from "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/kid-sip.ts
var _forTrack0 = ($index, $item) => $item.id;
function KidSIPPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 6);
    \u0275\u0275text(2, "No investments yet. Ask your parent to set one up!");
    \u0275\u0275elementEnd()();
  }
}
function KidSIPPage_For_9_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function KidSIPPage_For_9_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const sip_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.paySIP(sip_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sip_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "kid-pay-sip-" + sip_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Pay ", sip_r2.amount, " Coins");
  }
}
function KidSIPPage_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7)(2, "p", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "div", 11)(8, "p", 12);
    \u0275\u0275text(9, "Invested");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 11)(13, "p", 12);
    \u0275\u0275text(14, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11)(18, "p", 12);
    \u0275\u0275text(19, "Gain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(22, KidSIPPage_For_9_Conditional_22_Template, 2, 2, "button", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sip_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "kid-sip-" + sip_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", sip_r2.amount, " coins/", sip_r2.frequency);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", sip_r2.status === "active" ? ctx_r2.theme().primary + "15" : "#FCD34D20")("color", sip_r2.status === "active" ? ctx_r2.theme().primary : "#FCD34D");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sip_r2.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(sip_r2.total_invested);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r2.theme().primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sip_r2.current_value.toFixed(0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", (sip_r2.current_value - sip_r2.total_invested).toFixed(0));
    \u0275\u0275advance();
    \u0275\u0275conditional(sip_r2.status === "active" ? 22 : -1);
  }
}
var KidSIPPage = class _KidSIPPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  sips = signal([], ...ngDevMode ? [{ debugName: "sips" }] : []);
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || "neutral"] || KID_THEMES["neutral"], ...ngDevMode ? [{ debugName: "theme" }] : []);
  ngOnInit() {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (kid)
        this.sips.set(yield this.fs.getSIPs(kid.id));
    });
  }
  paySIP(sip) {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (!kid)
        return;
      try {
        yield this.fs.paySIP(sip.id, kid.id);
        this.sips.set(yield this.fs.getSIPs(kid.id));
      } catch (e) {
        alert(e.message);
      }
    });
  }
  static \u0275fac = function KidSIPPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KidSIPPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidSIPPage, selectors: [["app-kid-sip"]], decls: 10, vars: 1, consts: [[1, "animate-fade-in"], ["data-testid", "kid-sip-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight", "mb-2"], [1, "text-sm", "mb-6", 2, "color", "var(--fg-muted)"], [1, "card", "p-12", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "p-6"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "font-heading", "text-sm"], [1, "badge", "text-[10px]"], [1, "grid", "grid-cols-3", "gap-2", "text-center", "mb-3"], [1, "p-2", "rounded-xl", 2, "background-color", "var(--muted)"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], [1, "text-sm", "font-bold"], [1, "text-sm", "font-bold", "text-secondary"], [1, "btn-primary", "w-full", "text-xs", "py-2"], [1, "btn-primary", "w-full", "text-xs", "py-2", 3, "click"]], template: function KidSIPPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-kid-layout")(1, "div", 0)(2, "h1", 1);
      \u0275\u0275text(3, "My Investments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Watch your money grow!");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, KidSIPPage_Conditional_6_Template, 3, 0, "div", 3);
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275repeaterCreate(8, KidSIPPage_For_9_Template, 23, 14, "div", 5, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.sips().length === 0 ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.sips());
    }
  }, dependencies: [CommonModule, KidLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KidSIPPage, [{
    type: Component,
    args: [{
      selector: "app-kid-sip",
      standalone: true,
      imports: [CommonModule, KidLayoutComponent],
      template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <h1 class="text-2xl font-bold font-heading tracking-tight mb-2" data-testid="kid-sip-heading">My Investments</h1>
        <p class="text-sm mb-6" style="color: var(--fg-muted)">Watch your money grow!</p>

        @if (sips().length === 0) {
          <div class="card p-12 text-center"><p class="text-sm" style="color: var(--fg-muted)">No investments yet. Ask your parent to set one up!</p></div>
        }

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (sip of sips(); track sip.id) {
            <div class="card p-6" [attr.data-testid]="'kid-sip-' + sip.id">
              <div class="flex items-center justify-between mb-3">
                <p class="font-semibold font-heading text-sm">{{ sip.amount }} coins/{{ sip.frequency }}</p>
                <span class="badge text-[10px]" [style.background-color]="sip.status === 'active' ? theme().primary + '15' : '#FCD34D20'" [style.color]="sip.status === 'active' ? theme().primary : '#FCD34D'">{{ sip.status }}</span>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center mb-3">
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Invested</p><p class="text-sm font-bold">{{ sip.total_invested }}</p></div>
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Value</p><p class="text-sm font-bold" [style.color]="theme().primary">{{ sip.current_value.toFixed(0) }}</p></div>
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Gain</p><p class="text-sm font-bold text-secondary">+{{ (sip.current_value - sip.total_invested).toFixed(0) }}</p></div>
              </div>
              @if (sip.status === 'active') {
                <button (click)="paySIP(sip)" class="btn-primary w-full text-xs py-2" [attr.data-testid]="'kid-pay-sip-' + sip.id">Pay {{ sip.amount }} Coins</button>
              }
            </div>
          }
        </div>
      </div>
    </app-kid-layout>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidSIPPage, { className: "KidSIPPage", filePath: "src/app/pages/kid-sip.ts", lineNumber: 45 });
})();
export {
  KidSIPPage
};
//# sourceMappingURL=chunk-NFOOOH6D.js.map
