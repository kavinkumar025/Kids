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

// src/app/pages/kid-loans.ts
var _forTrack0 = ($index, $item) => $item.id;
function KidLoansPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 6);
    \u0275\u0275text(2, "No loans yet. That's great!");
    \u0275\u0275elementEnd()();
  }
}
function KidLoansPage_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "p", 14);
    \u0275\u0275text(3, "Remaining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "p", 14);
    \u0275\u0275text(8, "Payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loan_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(loan_r1.remaining_balance);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", loan_r1.payments_made, "/", loan_r1.duration_months);
  }
}
function KidLoansPage_For_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function KidLoansPage_For_9_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const loan_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.payEMI(loan_r1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loan_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "kid-pay-emi-" + loan_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Pay EMI (", loan_r1.emi_amount, " coins)");
  }
}
function KidLoansPage_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7)(2, "div")(3, "p", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, KidLoansPage_For_9_Conditional_9_Template, 11, 3, "div", 11);
    \u0275\u0275conditionalCreate(10, KidLoansPage_For_9_Conditional_10_Template, 2, 2, "button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loan_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "kid-loan-" + loan_r1.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(loan_r1.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", loan_r1.interest_rate, "% interest \xB7 ", loan_r1.duration_months, " months");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", loan_r1.status === "active" ? ctx_r2.theme().primary + "15" : loan_r1.status === "completed" ? "#34D39920" : "#FCD34D20")("color", loan_r1.status === "active" ? ctx_r2.theme().primary : loan_r1.status === "completed" ? "#34D399" : "#FCD34D");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loan_r1.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(loan_r1.status !== "pending" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(loan_r1.status === "active" ? 10 : -1);
  }
}
var KidLoansPage = class _KidLoansPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  loans = signal([], ...ngDevMode ? [{ debugName: "loans" }] : []);
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || "neutral"] || KID_THEMES["neutral"], ...ngDevMode ? [{ debugName: "theme" }] : []);
  ngOnInit() {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (kid)
        this.loans.set(yield this.fs.getLoans(kid.id));
    });
  }
  payEMI(loan) {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (!kid)
        return;
      try {
        yield this.fs.payLoanEMI(loan.id, kid.id);
        this.loans.set(yield this.fs.getLoans(kid.id));
      } catch (e) {
        alert(e.message);
      }
    });
  }
  static \u0275fac = function KidLoansPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KidLoansPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidLoansPage, selectors: [["app-kid-loans"]], decls: 10, vars: 1, consts: [[1, "animate-fade-in"], ["data-testid", "kid-loans-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight", "mb-2"], [1, "text-sm", "mb-6", 2, "color", "var(--fg-muted)"], [1, "card", "p-12", "text-center"], [1, "space-y-4"], [1, "card", "p-6"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "font-heading"], [1, "text-xs", 2, "color", "var(--fg-muted)"], [1, "badge", "text-[10px]"], [1, "grid", "grid-cols-2", "gap-2", "text-center", "mb-3"], [1, "btn-primary", "w-full", "text-xs", "py-2"], [1, "p-2", "rounded-xl", 2, "background-color", "var(--muted)"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], [1, "text-sm", "font-bold"], [1, "btn-primary", "w-full", "text-xs", "py-2", 3, "click"]], template: function KidLoansPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-kid-layout")(1, "div", 0)(2, "h1", 1);
      \u0275\u0275text(3, "My Loans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Manage your borrowings responsibly");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, KidLoansPage_Conditional_6_Template, 3, 0, "div", 3);
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275repeaterCreate(8, KidLoansPage_For_9_Template, 11, 11, "div", 5, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loans().length === 0 ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.loans());
    }
  }, dependencies: [CommonModule, KidLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KidLoansPage, [{
    type: Component,
    args: [{
      selector: "app-kid-loans",
      standalone: true,
      imports: [CommonModule, KidLayoutComponent],
      template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <h1 class="text-2xl font-bold font-heading tracking-tight mb-2" data-testid="kid-loans-heading">My Loans</h1>
        <p class="text-sm mb-6" style="color: var(--fg-muted)">Manage your borrowings responsibly</p>

        @if (loans().length === 0) {
          <div class="card p-12 text-center"><p class="text-sm" style="color: var(--fg-muted)">No loans yet. That's great!</p></div>
        }

        <div class="space-y-4">
          @for (loan of loans(); track loan.id) {
            <div class="card p-6" [attr.data-testid]="'kid-loan-' + loan.id">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="font-semibold font-heading">{{ loan.purpose }}</p>
                  <p class="text-xs" style="color: var(--fg-muted)">{{ loan.interest_rate }}% interest &middot; {{ loan.duration_months }} months</p>
                </div>
                <span class="badge text-[10px]" [style.background-color]="loan.status === 'active' ? theme().primary + '15' : loan.status === 'completed' ? '#34D39920' : '#FCD34D20'" [style.color]="loan.status === 'active' ? theme().primary : loan.status === 'completed' ? '#34D399' : '#FCD34D'">{{ loan.status }}</span>
              </div>
              @if (loan.status !== 'pending') {
                <div class="grid grid-cols-2 gap-2 text-center mb-3">
                  <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Remaining</p><p class="text-sm font-bold">{{ loan.remaining_balance }}</p></div>
                  <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Payments</p><p class="text-sm font-bold">{{ loan.payments_made }}/{{ loan.duration_months }}</p></div>
                </div>
              }
              @if (loan.status === 'active') {
                <button (click)="payEMI(loan)" class="btn-primary w-full text-xs py-2" [attr.data-testid]="'kid-pay-emi-' + loan.id">Pay EMI ({{ loan.emi_amount }} coins)</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidLoansPage, { className: "KidLoansPage", filePath: "src/app/pages/kid-loans.ts", lineNumber: 49 });
})();
export {
  KidLoansPage
};
//# sourceMappingURL=chunk-IHMGUALC.js.map
