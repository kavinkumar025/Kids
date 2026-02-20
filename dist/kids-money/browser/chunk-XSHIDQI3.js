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
  DatePipe,
  computed,
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
  ɵɵtextInterpolate2
} from "./chunk-QO3DPW6E.js";
import {
  KID_THEMES
} from "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/kid-wallet.ts
var _forTrack0 = ($index, $item) => $item.id;
function KidWalletPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 8);
    \u0275\u0275text(2, "Current Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, "coins");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11)(8, "div", 12)(9, "p", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 14);
    \u0275\u0275text(12, "Earned");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "p", 15);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 14);
    \u0275\u0275text(17, "Spent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12)(19, "p", 16);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 14);
    \u0275\u0275text(22, "Saved");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r0.theme().primary + "30");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r0.theme().primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.wallet().balance);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.wallet().total_earned);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.wallet().total_spent);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.wallet().total_saved);
  }
}
function KidWalletPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "No transactions yet");
    \u0275\u0275elementEnd();
  }
}
function KidWalletPage_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div")(2, "p", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, txn_r2.created_at, "short"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", txn_r2.type === "credit" ? "#34D399" : "#F87171");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", txn_r2.type === "credit" ? "+" : "-", "", txn_r2.amount);
  }
}
var KidWalletPage = class _KidWalletPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  wallet = signal(null, ...ngDevMode ? [{ debugName: "wallet" }] : []);
  transactions = signal([], ...ngDevMode ? [{ debugName: "transactions" }] : []);
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || "neutral"] || KID_THEMES["neutral"], ...ngDevMode ? [{ debugName: "theme" }] : []);
  ngOnInit() {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (!kid)
        return;
      const [w, t] = yield Promise.all([this.fs.getWallet(kid.id), this.fs.getTransactions(kid.id)]);
      this.wallet.set(w);
      this.transactions.set(t);
    });
  }
  static \u0275fac = function KidWalletPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KidWalletPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidWalletPage, selectors: [["app-kid-wallet"]], decls: 13, vars: 2, consts: [[1, "animate-fade-in"], ["data-testid", "kid-wallet-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight", "mb-2"], [1, "text-sm", "mb-6", 2, "color", "var(--fg-muted)"], [1, "card", "p-5"], [1, "text-sm", "font-semibold", "font-heading", "mb-4"], [1, "text-sm", "text-center", "py-8", 2, "color", "var(--fg-muted)"], [1, "flex", "items-center", "justify-between", "py-3", "border-b", 2, "border-color", "var(--border)"], [1, "card", "p-8", "mb-6", "text-center"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "text-4xl", "font-bold", "font-heading", "mt-1"], [1, "text-xs", "mt-1", 2, "color", "var(--fg-muted)"], [1, "grid", "grid-cols-3", "gap-3", "mb-6"], [1, "card", "p-4", "text-center"], [1, "text-lg", "font-bold", "font-heading", "text-secondary"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], [1, "text-lg", "font-bold", "font-heading", "text-red-400"], [1, "text-lg", "font-bold", "font-heading", "text-primary"], [1, "text-sm"], [1, "text-sm", "font-bold"]], template: function KidWalletPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-kid-layout")(1, "div", 0)(2, "h1", 1);
      \u0275\u0275text(3, "My Wallet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Your money at a glance");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, KidWalletPage_Conditional_6_Template, 23, 8);
      \u0275\u0275elementStart(7, "div", 3)(8, "h3", 4);
      \u0275\u0275text(9, "Transaction History");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, KidWalletPage_Conditional_10_Template, 2, 0, "p", 5);
      \u0275\u0275repeaterCreate(11, KidWalletPage_For_12_Template, 9, 9, "div", 6, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.wallet() ? 6 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.transactions().length === 0 ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.transactions());
    }
  }, dependencies: [CommonModule, KidLayoutComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KidWalletPage, [{
    type: Component,
    args: [{
      selector: "app-kid-wallet",
      standalone: true,
      imports: [CommonModule, KidLayoutComponent],
      template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <h1 class="text-2xl font-bold font-heading tracking-tight mb-2" data-testid="kid-wallet-heading">My Wallet</h1>
        <p class="text-sm mb-6" style="color: var(--fg-muted)">Your money at a glance</p>

        @if (wallet()) {
          <div class="card p-8 mb-6 text-center" [style.border-color]="theme().primary + '30'">
            <p class="text-sm" style="color: var(--fg-muted)">Current Balance</p>
            <p class="text-4xl font-bold font-heading mt-1" [style.color]="theme().primary">{{ wallet()!.balance }}</p>
            <p class="text-xs mt-1" style="color: var(--fg-muted)">coins</p>
          </div>

          <div class="grid grid-cols-3 gap-3 mb-6">
            <div class="card p-4 text-center"><p class="text-lg font-bold font-heading text-secondary">{{ wallet()!.total_earned }}</p><p class="text-[10px]" style="color: var(--fg-muted)">Earned</p></div>
            <div class="card p-4 text-center"><p class="text-lg font-bold font-heading text-red-400">{{ wallet()!.total_spent }}</p><p class="text-[10px]" style="color: var(--fg-muted)">Spent</p></div>
            <div class="card p-4 text-center"><p class="text-lg font-bold font-heading text-primary">{{ wallet()!.total_saved }}</p><p class="text-[10px]" style="color: var(--fg-muted)">Saved</p></div>
          </div>
        }

        <div class="card p-5">
          <h3 class="text-sm font-semibold font-heading mb-4">Transaction History</h3>
          @if (transactions().length === 0) {
            <p class="text-sm text-center py-8" style="color: var(--fg-muted)">No transactions yet</p>
          }
          @for (txn of transactions(); track txn.id) {
            <div class="flex items-center justify-between py-3 border-b" style="border-color: var(--border)">
              <div><p class="text-sm">{{ txn.description }}</p><p class="text-[10px]" style="color: var(--fg-muted)">{{ txn.created_at | date:'short' }}</p></div>
              <span class="text-sm font-bold" [style.color]="txn.type === 'credit' ? '#34D399' : '#F87171'">{{ txn.type === 'credit' ? '+' : '-' }}{{ txn.amount }}</span>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidWalletPage, { className: "KidWalletPage", filePath: "src/app/pages/kid-wallet.ts", lineNumber: 49 });
})();
export {
  KidWalletPage
};
//# sourceMappingURL=chunk-XSHIDQI3.js.map
