import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QO3DPW6E.js";
import "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/parent-sip.ts
var _forTrack0 = ($index, $item) => $item.id;
function ParentSIPPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 9);
    \u0275\u0275text(2, "No SIPs yet. Create one to start investing!");
    \u0275\u0275elementEnd()();
  }
}
function ParentSIPPage_For_13_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ParentSIPPage_For_13_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const sip_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.paySIP(sip_r3));
    });
    \u0275\u0275text(1, "Pay Installment");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sip_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "pay-sip-" + sip_r3.id);
  }
}
function ParentSIPPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 10)(2, "div")(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15)(11, "p", 16);
    \u0275\u0275text(12, "Invested");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 15)(16, "p", 16);
    \u0275\u0275text(17, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "p", 16);
    \u0275\u0275text(22, "Payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 17);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 19);
    \u0275\u0275conditionalCreate(26, ParentSIPPage_For_13_Conditional_26_Template, 2, 1, "button", 20);
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275listener("click", function ParentSIPPage_For_13_Template_button_click_27_listener() {
      const sip_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleSIP(sip_r3.id));
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sip_r3 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "sip-" + sip_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", sip_r3.amount, " coins / ", sip_r3.frequency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", sip_r3.interest_rate, "% annual interest");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", sip_r3.status === "active" ? "#34D39920" : "#FCD34D20")("color", sip_r3.status === "active" ? "#34D399" : "#FCD34D");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sip_r3.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(sip_r3.total_invested);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(sip_r3.current_value.toFixed(0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(sip_r3.payments_made);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(sip_r3.status === "active" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-testid", "toggle-sip-" + sip_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sip_r3.status === "active" ? "Pause" : "Resume");
  }
}
function ParentSIPPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function ParentSIPPage_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showCreate.set(false));
    });
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275listener("click", function ParentSIPPage_Conditional_14_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "h2", 26);
    \u0275\u0275text(4, "Create SIP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 27);
    \u0275\u0275listener("ngSubmit", function ParentSIPPage_Conditional_14_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createSIP());
    });
    \u0275\u0275elementStart(6, "div")(7, "label", 28);
    \u0275\u0275text(8, "Amount per installment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ParentSIPPage_Conditional_14_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.sipForm.amount, $event) || (ctx_r3.sipForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "label", 28);
    \u0275\u0275text(12, "Interest Rate (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ParentSIPPage_Conditional_14_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.sipForm.interest_rate, $event) || (ctx_r3.sipForm.interest_rate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 28);
    \u0275\u0275text(16, "Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ParentSIPPage_Conditional_14_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.sipForm.frequency, $event) || (ctx_r3.sipForm.frequency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 32);
    \u0275\u0275text(19, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 33);
    \u0275\u0275text(21, "Monthly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 34);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.sipForm.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.sipForm.interest_rate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.sipForm.frequency);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r3.creating());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.creating() ? "Creating..." : "Create SIP");
  }
}
var ParentSIPPage = class _ParentSIPPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  sips = signal([], ...ngDevMode ? [{ debugName: "sips" }] : []);
  showCreate = signal(false, ...ngDevMode ? [{ debugName: "showCreate" }] : []);
  creating = signal(false, ...ngDevMode ? [{ debugName: "creating" }] : []);
  sipForm = { amount: 10, interest_rate: 8, frequency: "monthly" };
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.load();
    });
  }
  load() {
    return __async(this, null, function* () {
      const kid = this.auth.selectedKid();
      if (kid)
        this.sips.set(yield this.fs.getSIPs(kid.id));
    });
  }
  createSIP() {
    return __async(this, null, function* () {
      this.creating.set(true);
      try {
        const kid = this.auth.selectedKid();
        const user = this.auth.firebaseUser();
        if (!kid || !user)
          return;
        yield this.fs.createSIP(user.uid, kid.id, this.sipForm);
        yield this.load();
        this.showCreate.set(false);
      } finally {
        this.creating.set(false);
      }
    });
  }
  paySIP(sip) {
    return __async(this, null, function* () {
      const kid = this.auth.selectedKid();
      if (!kid)
        return;
      try {
        yield this.fs.paySIP(sip.id, kid.id);
        yield this.load();
      } catch (e) {
        alert(e.message);
      }
    });
  }
  toggleSIP(id) {
    return __async(this, null, function* () {
      yield this.fs.toggleSIP(id);
      yield this.load();
    });
  }
  static \u0275fac = function ParentSIPPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentSIPPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentSIPPage, selectors: [["app-parent-sip"]], decls: 15, vars: 3, consts: [[1, "animate-fade-in"], [1, "flex", "items-center", "justify-between", "mb-8"], ["data-testid", "sip-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight"], [1, "text-sm", "mt-1", 2, "color", "var(--fg-muted)"], ["data-testid", "create-sip-btn", 1, "btn-primary", "text-sm", 3, "click"], [1, "card", "p-12", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "p-6"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-sm", "font-semibold", "font-heading"], [1, "text-xs", 2, "color", "var(--fg-muted)"], [1, "badge", "text-[10px]"], [1, "grid", "grid-cols-3", "gap-2", "text-center", "mb-3"], [1, "p-2", "rounded-xl", 2, "background-color", "var(--muted)"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], [1, "text-sm", "font-bold"], [1, "text-sm", "font-bold", "text-secondary"], [1, "flex", "gap-2"], [1, "btn-primary", "text-xs", "flex-1"], [1, "text-xs", "px-4", "py-2", "rounded-full", "border", 2, "border-color", "var(--border)", 3, "click"], [1, "btn-primary", "text-xs", "flex-1", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "absolute", "inset-0", "bg-black/50"], [1, "card", "p-8", "w-full", "max-w-md", "relative", "z-10", "animate-fade-in", 3, "click"], [1, "text-lg", "font-bold", "font-heading", "mb-6"], [1, "space-y-4", 3, "ngSubmit"], [1, "label"], ["type", "number", "min", "1", "name", "amount", "data-testid", "sip-amount-input", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "20", "name", "rate", "data-testid", "sip-rate-input", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "frequency", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "weekly"], ["value", "monthly"], ["type", "submit", "data-testid", "submit-sip-btn", 1, "btn-primary", "w-full", "py-3", 3, "disabled"]], template: function ParentSIPPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-parent-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      \u0275\u0275text(5, "SIP Investments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ParentSIPPage_Template_button_click_8_listener() {
        return ctx.showCreate.set(true);
      });
      \u0275\u0275text(9, "+ New SIP");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, ParentSIPPage_Conditional_10_Template, 3, 0, "div", 5);
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275repeaterCreate(12, ParentSIPPage_For_13_Template, 29, 15, "div", 7, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, ParentSIPPage_Conditional_14_Template, 24, 5, "div", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Systematic Investment Plans for ", (tmp_0_0 = ctx.auth.selectedKid()) == null ? null : tmp_0_0.name);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.sips().length === 0 ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.sips());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showCreate() ? 14 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, NgForm, ParentLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentSIPPage, [{
    type: Component,
    args: [{
      selector: "app-parent-sip",
      standalone: true,
      imports: [CommonModule, FormsModule, ParentLayoutComponent],
      template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h1 class="text-2xl font-bold font-heading tracking-tight" data-testid="sip-heading">SIP Investments</h1>
            <p class="text-sm mt-1" style="color: var(--fg-muted)">Systematic Investment Plans for {{ auth.selectedKid()?.name }}</p>
          </div>
          <button (click)="showCreate.set(true)" class="btn-primary text-sm" data-testid="create-sip-btn">+ New SIP</button>
        </div>

        @if (sips().length === 0) {
          <div class="card p-12 text-center"><p class="text-sm" style="color: var(--fg-muted)">No SIPs yet. Create one to start investing!</p></div>
        }

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (sip of sips(); track sip.id) {
            <div class="card p-6" [attr.data-testid]="'sip-' + sip.id">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="text-sm font-semibold font-heading">{{ sip.amount }} coins / {{ sip.frequency }}</p>
                  <p class="text-xs" style="color: var(--fg-muted)">{{ sip.interest_rate }}% annual interest</p>
                </div>
                <span class="badge text-[10px]" [style.background-color]="sip.status === 'active' ? '#34D39920' : '#FCD34D20'" [style.color]="sip.status === 'active' ? '#34D399' : '#FCD34D'">{{ sip.status }}</span>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center mb-3">
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Invested</p><p class="text-sm font-bold">{{ sip.total_invested }}</p></div>
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Value</p><p class="text-sm font-bold text-secondary">{{ sip.current_value.toFixed(0) }}</p></div>
                <div class="p-2 rounded-xl" style="background-color: var(--muted)"><p class="text-[10px]" style="color: var(--fg-muted)">Payments</p><p class="text-sm font-bold">{{ sip.payments_made }}</p></div>
              </div>
              <div class="flex gap-2">
                @if (sip.status === 'active') {
                  <button (click)="paySIP(sip)" class="btn-primary text-xs flex-1" [attr.data-testid]="'pay-sip-' + sip.id">Pay Installment</button>
                }
                <button (click)="toggleSIP(sip.id)" class="text-xs px-4 py-2 rounded-full border" style="border-color: var(--border)" [attr.data-testid]="'toggle-sip-' + sip.id">{{ sip.status === 'active' ? 'Pause' : 'Resume' }}</button>
              </div>
            </div>
          }
        </div>

        @if (showCreate()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="showCreate.set(false)">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="card p-8 w-full max-w-md relative z-10 animate-fade-in" (click)="$event.stopPropagation()">
              <h2 class="text-lg font-bold font-heading mb-6">Create SIP</h2>
              <form (ngSubmit)="createSIP()" class="space-y-4">
                <div><label class="label">Amount per installment</label><input class="input" type="number" min="1" [(ngModel)]="sipForm.amount" name="amount" data-testid="sip-amount-input"></div>
                <div><label class="label">Interest Rate (%)</label><input class="input" type="number" min="0" max="20" [(ngModel)]="sipForm.interest_rate" name="rate" data-testid="sip-rate-input"></div>
                <div>
                  <label class="label">Frequency</label>
                  <select class="input" [(ngModel)]="sipForm.frequency" name="frequency">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <button type="submit" class="btn-primary w-full py-3" [disabled]="creating()" data-testid="submit-sip-btn">{{ creating() ? 'Creating...' : 'Create SIP' }}</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentSIPPage, { className: "ParentSIPPage", filePath: "src/app/pages/parent-sip.ts", lineNumber: 77 });
})();
export {
  ParentSIPPage
};
//# sourceMappingURL=chunk-JDXC5MAB.js.map
