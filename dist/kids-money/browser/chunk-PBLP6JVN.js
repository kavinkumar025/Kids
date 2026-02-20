import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-VL7AD74M.js";
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
  inject,
  setClassMetadata,
  signal,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QO3DPW6E.js";
import "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/parent-loans.ts
var _forTrack0 = ($index, $item) => $item.id;
function ParentLoansPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 9);
    \u0275\u0275text(2, "No loans yet.");
    \u0275\u0275elementEnd()();
  }
}
function ParentLoansPage_For_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3, "EMI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17)(7, "p", 18);
    \u0275\u0275text(8, "Remaining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 17)(12, "p", 18);
    \u0275\u0275text(13, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loan_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(loan_r1.emi_amount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(loan_r1.remaining_balance);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", loan_r1.payments_made, "/", loan_r1.duration_months);
  }
}
function ParentLoansPage_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ParentLoansPage_For_13_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const loan_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approveLoan(loan_r1.id));
    });
    \u0275\u0275text(1, "Approve Loan");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loan_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "approve-loan-" + loan_r1.id);
  }
}
function ParentLoansPage_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ParentLoansPage_For_13_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const loan_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.payEMI(loan_r1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loan_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "pay-emi-" + loan_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Pay EMI (", loan_r1.emi_amount, ")");
  }
}
function ParentLoansPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 10)(2, "div")(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ParentLoansPage_For_13_Conditional_9_Template, 16, 4, "div", 14);
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275conditionalCreate(11, ParentLoansPage_For_13_Conditional_11_Template, 2, 1, "button", 16);
    \u0275\u0275conditionalCreate(12, ParentLoansPage_For_13_Conditional_12_Template, 2, 2, "button", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loan_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "loan-" + loan_r1.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(loan_r1.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", loan_r1.principal, " coins at ", loan_r1.interest_rate, "% for ", loan_r1.duration_months, " months");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.loanColor(loan_r1.status) + "20")("color", ctx_r2.loanColor(loan_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loan_r1.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(loan_r1.status !== "pending" ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(loan_r1.status === "pending" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(loan_r1.status === "active" ? 12 : -1);
  }
}
function ParentLoansPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function ParentLoansPage_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCreate.set(false));
    });
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275listener("click", function ParentLoansPage_Conditional_14_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "h2", 24);
    \u0275\u0275text(4, "Request Loan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 25);
    \u0275\u0275listener("ngSubmit", function ParentLoansPage_Conditional_14_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createLoan());
    });
    \u0275\u0275elementStart(6, "div")(7, "label", 26);
    \u0275\u0275text(8, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ParentLoansPage_Conditional_14_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.loanForm.purpose, $event) || (ctx_r2.loanForm.purpose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "label", 26);
    \u0275\u0275text(12, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ParentLoansPage_Conditional_14_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.loanForm.principal, $event) || (ctx_r2.loanForm.principal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 29)(15, "div")(16, "label", 26);
    \u0275\u0275text(17, "Interest (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ParentLoansPage_Conditional_14_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.loanForm.interest_rate, $event) || (ctx_r2.loanForm.interest_rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 26);
    \u0275\u0275text(21, "Duration (months)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ParentLoansPage_Conditional_14_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.loanForm.duration_months, $event) || (ctx_r2.loanForm.duration_months = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 32);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.loanForm.purpose);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.loanForm.principal);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.loanForm.interest_rate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.loanForm.duration_months);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.creating());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.creating() ? "Creating..." : "Request Loan");
  }
}
var ParentLoansPage = class _ParentLoansPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  loans = signal([], ...ngDevMode ? [{ debugName: "loans" }] : []);
  showCreate = signal(false, ...ngDevMode ? [{ debugName: "showCreate" }] : []);
  creating = signal(false, ...ngDevMode ? [{ debugName: "creating" }] : []);
  loanForm = { purpose: "", principal: 100, interest_rate: 5, duration_months: 6 };
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.load();
    });
  }
  load() {
    return __async(this, null, function* () {
      const kid = this.auth.selectedKid();
      if (kid)
        this.loans.set(yield this.fs.getLoans(kid.id));
    });
  }
  loanColor(s) {
    return { pending: "#FCD34D", active: "#4F7DF3", completed: "#34D399" }[s] || "#71717A";
  }
  createLoan() {
    return __async(this, null, function* () {
      if (!this.loanForm.purpose)
        return;
      this.creating.set(true);
      try {
        const kid = this.auth.selectedKid();
        const user = this.auth.firebaseUser();
        if (!kid || !user)
          return;
        yield this.fs.requestLoan(user.uid, kid.id, this.loanForm);
        yield this.load();
        this.showCreate.set(false);
      } finally {
        this.creating.set(false);
      }
    });
  }
  approveLoan(id) {
    return __async(this, null, function* () {
      yield this.fs.approveLoan(id);
      yield this.load();
    });
  }
  payEMI(loan) {
    return __async(this, null, function* () {
      const kid = this.auth.selectedKid();
      if (!kid)
        return;
      try {
        yield this.fs.payLoanEMI(loan.id, kid.id);
        yield this.load();
      } catch (e) {
        alert(e.message);
      }
    });
  }
  static \u0275fac = function ParentLoansPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentLoansPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentLoansPage, selectors: [["app-parent-loans"]], decls: 15, vars: 3, consts: [[1, "animate-fade-in"], [1, "flex", "items-center", "justify-between", "mb-8"], ["data-testid", "loans-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight"], [1, "text-sm", "mt-1", 2, "color", "var(--fg-muted)"], ["data-testid", "create-loan-btn", 1, "btn-primary", "text-sm", 3, "click"], [1, "card", "p-12", "text-center"], [1, "space-y-4"], [1, "card", "p-6"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "font-heading"], [1, "text-xs", 2, "color", "var(--fg-muted)"], [1, "badge", "text-[10px]"], [1, "grid", "grid-cols-3", "gap-2", "text-center", "mb-3"], [1, "flex", "gap-2"], [1, "btn-primary", "text-xs"], [1, "p-2", "rounded-xl", 2, "background-color", "var(--muted)"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], [1, "text-sm", "font-bold"], [1, "btn-primary", "text-xs", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "absolute", "inset-0", "bg-black/50"], [1, "card", "p-8", "w-full", "max-w-md", "relative", "z-10", "animate-fade-in", 3, "click"], [1, "text-lg", "font-bold", "font-heading", "mb-6"], [1, "space-y-4", 3, "ngSubmit"], [1, "label"], ["placeholder", "e.g., Buy a bicycle", "name", "purpose", "data-testid", "loan-purpose-input", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "10", "name", "principal", "data-testid", "loan-amount-input", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "number", "min", "0", "max", "20", "name", "rate", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "24", "name", "months", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "submit-loan-btn", 1, "btn-primary", "w-full", "py-3", 3, "disabled"]], template: function ParentLoansPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-parent-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      \u0275\u0275text(5, "Loans & EMI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ParentLoansPage_Template_button_click_8_listener() {
        return ctx.showCreate.set(true);
      });
      \u0275\u0275text(9, "+ Request Loan");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, ParentLoansPage_Conditional_10_Template, 3, 0, "div", 5);
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275repeaterCreate(12, ParentLoansPage_For_13_Template, 13, 13, "div", 7, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, ParentLoansPage_Conditional_14_Template, 25, 6, "div", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Manage loans for ", (tmp_0_0 = ctx.auth.selectedKid()) == null ? null : tmp_0_0.name);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loans().length === 0 ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.loans());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showCreate() ? 14 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, NgForm, ParentLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentLoansPage, [{
    type: Component,
    args: [{
      selector: "app-parent-loans",
      standalone: true,
      imports: [CommonModule, FormsModule, ParentLayoutComponent],
      template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h1 class="text-2xl font-bold font-heading tracking-tight" data-testid="loans-heading">Loans & EMI</h1>
            <p class="text-sm mt-1" style="color: var(--fg-muted)">Manage loans for {{ auth.selectedKid()?.name }}</p>
          </div>
          <button (click)="showCreate.set(true)" class="btn-primary text-sm" data-testid="create-loan-btn">+ Request Loan</button>
        </div>

        @if (loans().length === 0) {
          <div class="card p-12 text-center"><p class="text-sm" style="color: var(--fg-muted)">No loans yet.</p></div>
        }

        <div class="space-y-4">
          @for (loan of loans(); track loan.id) {
            <div class="card p-6" [attr.data-testid]="'loan-' + loan.id">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="font-semibold font-heading">{{ loan.purpose }}</p>
                  <p class="text-xs" style="color: var(--fg-muted)">{{ loan.principal }} coins at {{ loan.interest_rate }}% for {{ loan.duration_months }} months</p>
                </div>
                <span class="badge text-[10px]" [style.background-color]="loanColor(loan.status) + '20'" [style.color]="loanColor(loan.status)">{{ loan.status }}</span>
              </div>
              @if (loan.status !== 'pending') {
                <div class="grid grid-cols-3 gap-2 text-center mb-3">
                  <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">EMI</p><p class="text-sm font-bold">{{ loan.emi_amount }}</p></div>
                  <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Remaining</p><p class="text-sm font-bold">{{ loan.remaining_balance }}</p></div>
                  <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Paid</p><p class="text-sm font-bold">{{ loan.payments_made }}/{{ loan.duration_months }}</p></div>
                </div>
              }
              <div class="flex gap-2">
                @if (loan.status === 'pending') {
                  <button (click)="approveLoan(loan.id)" class="btn-primary text-xs" [attr.data-testid]="'approve-loan-' + loan.id">Approve Loan</button>
                }
                @if (loan.status === 'active') {
                  <button (click)="payEMI(loan)" class="btn-primary text-xs" [attr.data-testid]="'pay-emi-' + loan.id">Pay EMI ({{ loan.emi_amount }})</button>
                }
              </div>
            </div>
          }
        </div>

        @if (showCreate()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="showCreate.set(false)">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="card p-8 w-full max-w-md relative z-10 animate-fade-in" (click)="$event.stopPropagation()">
              <h2 class="text-lg font-bold font-heading mb-6">Request Loan</h2>
              <form (ngSubmit)="createLoan()" class="space-y-4">
                <div><label class="label">Purpose</label><input class="input" placeholder="e.g., Buy a bicycle" [(ngModel)]="loanForm.purpose" name="purpose" data-testid="loan-purpose-input"></div>
                <div><label class="label">Amount</label><input class="input" type="number" min="10" [(ngModel)]="loanForm.principal" name="principal" data-testid="loan-amount-input"></div>
                <div class="grid grid-cols-2 gap-4">
                  <div><label class="label">Interest (%)</label><input class="input" type="number" min="0" max="20" [(ngModel)]="loanForm.interest_rate" name="rate"></div>
                  <div><label class="label">Duration (months)</label><input class="input" type="number" min="1" max="24" [(ngModel)]="loanForm.duration_months" name="months"></div>
                </div>
                <button type="submit" class="btn-primary w-full py-3" [disabled]="creating()" data-testid="submit-loan-btn">{{ creating() ? 'Creating...' : 'Request Loan' }}</button>
              </form>
            </div>
          </div>
        }
      </div>
    </app-parent-layout>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentLoansPage, { className: "ParentLoansPage", filePath: "src/app/pages/parent-loans.ts", lineNumber: 78 });
})();
export {
  ParentLoansPage
};
//# sourceMappingURL=chunk-PBLP6JVN.js.map
