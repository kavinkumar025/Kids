import {
  ParentLayoutComponent
} from "./chunk-OW55KWIC.js";
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
  DatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QO3DPW6E.js";
import "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/parent-wallet.ts
var _forTrack0 = ($index, $item) => $item.id;
function ParentWalletPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 9)(2, "p", 10);
    \u0275\u0275text(3, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "p", 10);
    \u0275\u0275text(8, "Earned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "p", 10);
    \u0275\u0275text(13, "Spent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9)(17, "p", 10);
    \u0275\u0275text(18, "Saved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.wallet().balance);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.wallet().total_earned);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.wallet().total_spent);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.wallet().total_saved);
  }
}
function ParentWalletPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "No transactions yet");
    \u0275\u0275elementEnd();
  }
}
function ParentWalletPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div")(2, "p", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 7, txn_r2.created_at, "short"), " \xB7 ", txn_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", txn_r2.type === "credit" ? "#34D399" : "#F87171");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", txn_r2.type === "credit" ? "+" : "-", "", txn_r2.amount, " ");
  }
}
var ParentWalletPage = class _ParentWalletPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  wallet = signal(null, ...ngDevMode ? [{ debugName: "wallet" }] : []);
  transactions = signal([], ...ngDevMode ? [{ debugName: "transactions" }] : []);
  ngOnInit() {
    return __async(this, null, function* () {
      const kid = this.auth.selectedKid();
      if (!kid)
        return;
      const [w, t] = yield Promise.all([this.fs.getWallet(kid.id), this.fs.getTransactions(kid.id)]);
      this.wallet.set(w);
      this.transactions.set(t);
    });
  }
  static \u0275fac = function ParentWalletPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentWalletPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentWalletPage, selectors: [["app-parent-wallet"]], decls: 14, vars: 3, consts: [[1, "animate-fade-in"], ["data-testid", "wallet-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight", "mb-2"], [1, "text-sm", "mb-8", 2, "color", "var(--fg-muted)"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-8"], [1, "card", "p-6"], [1, "text-sm", "font-semibold", "font-heading", "mb-4"], [1, "text-sm", "text-center", "py-8", 2, "color", "var(--fg-muted)"], [1, "space-y-3"], [1, "flex", "items-center", "justify-between", "p-3", "rounded-xl", 2, "background-color", "var(--muted)"], [1, "card", "p-5"], [1, "text-xs", 2, "color", "var(--fg-muted)"], [1, "text-2xl", "font-bold", "font-heading"], [1, "text-2xl", "font-bold", "font-heading", "text-secondary"], [1, "text-2xl", "font-bold", "font-heading", "text-red-400"], [1, "text-2xl", "font-bold", "font-heading", "text-primary"], [1, "text-sm", "font-medium"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], [1, "text-sm", "font-bold"]], template: function ParentWalletPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-parent-layout")(1, "div", 0)(2, "h1", 1);
      \u0275\u0275text(3, "Wallet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ParentWalletPage_Conditional_6_Template, 21, 4, "div", 3);
      \u0275\u0275elementStart(7, "div", 4)(8, "h3", 5);
      \u0275\u0275text(9, "Transaction History");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, ParentWalletPage_Conditional_10_Template, 2, 0, "p", 6);
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275repeaterCreate(12, ParentWalletPage_For_13_Template, 9, 10, "div", 8, _forTrack0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", (tmp_0_0 = ctx.auth.selectedKid()) == null ? null : tmp_0_0.name, "'s financial overview");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.wallet() ? 6 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.transactions().length === 0 ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.transactions());
    }
  }, dependencies: [CommonModule, ParentLayoutComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentWalletPage, [{
    type: Component,
    args: [{
      selector: "app-parent-wallet",
      standalone: true,
      imports: [CommonModule, ParentLayoutComponent],
      template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <h1 class="text-2xl font-bold font-heading tracking-tight mb-2" data-testid="wallet-heading">Wallet</h1>
        <p class="text-sm mb-8" style="color: var(--fg-muted)">{{ auth.selectedKid()?.name }}'s financial overview</p>

        @if (wallet()) {
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div class="card p-5"><p class="text-xs" style="color: var(--fg-muted)">Balance</p><p class="text-2xl font-bold font-heading">{{ wallet()!.balance }}</p></div>
            <div class="card p-5"><p class="text-xs" style="color: var(--fg-muted)">Earned</p><p class="text-2xl font-bold font-heading text-secondary">{{ wallet()!.total_earned }}</p></div>
            <div class="card p-5"><p class="text-xs" style="color: var(--fg-muted)">Spent</p><p class="text-2xl font-bold font-heading text-red-400">{{ wallet()!.total_spent }}</p></div>
            <div class="card p-5"><p class="text-xs" style="color: var(--fg-muted)">Saved</p><p class="text-2xl font-bold font-heading text-primary">{{ wallet()!.total_saved }}</p></div>
          </div>
        }

        <div class="card p-6">
          <h3 class="text-sm font-semibold font-heading mb-4">Transaction History</h3>
          @if (transactions().length === 0) {
            <p class="text-sm text-center py-8" style="color: var(--fg-muted)">No transactions yet</p>
          }
          <div class="space-y-3">
            @for (txn of transactions(); track txn.id) {
              <div class="flex items-center justify-between p-3 rounded-xl" style="background-color: var(--muted)">
                <div>
                  <p class="text-sm font-medium">{{ txn.description }}</p>
                  <p class="text-[10px]" style="color: var(--fg-muted)">{{ txn.created_at | date:'short' }} &middot; {{ txn.category }}</p>
                </div>
                <span class="text-sm font-bold" [style.color]="txn.type === 'credit' ? '#34D399' : '#F87171'">
                  {{ txn.type === 'credit' ? '+' : '-' }}{{ txn.amount }}
                </span>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentWalletPage, { className: "ParentWalletPage", filePath: "src/app/pages/parent-wallet.ts", lineNumber: 50 });
})();
export {
  ParentWalletPage
};
//# sourceMappingURL=chunk-NIVIKL6S.js.map
