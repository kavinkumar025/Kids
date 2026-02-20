import {
  DefaultValueAccessor,
  FormsModule,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QO3DPW6E.js";
import "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/parent-goals.ts
var _forTrack0 = ($index, $item) => $item.id;
function ParentGoalsPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 9);
    \u0275\u0275text(2, "No goals yet. Create one to start saving!");
    \u0275\u0275elementEnd()();
  }
}
function ParentGoalsPage_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ParentGoalsPage_For_13_Conditional_10_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const goal_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.contributeAmounts[goal_r2.id], $event) || (ctx_r2.contributeAmounts[goal_r2.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function ParentGoalsPage_For_13_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const goal_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.contribute(goal_r2.id));
    });
    \u0275\u0275text(3, "Save");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const goal_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", "Amount");
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.contributeAmounts[goal_r2.id]);
    \u0275\u0275attribute("data-testid", "contribute-input-" + goal_r2.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-testid", "contribute-btn-" + goal_r2.id);
  }
}
function ParentGoalsPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 10)(2, "h3", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275element(7, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ParentGoalsPage_For_13_Conditional_10_Template, 4, 4, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const goal_r2 = ctx.$implicit;
    \u0275\u0275attribute("data-testid", "goal-" + goal_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(goal_r2.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", goal_r2.status === "completed" ? "#34D39920" : "#FCD34D20")("color", goal_r2.status === "completed" ? "#34D399" : "#FCD34D");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(goal_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", goal_r2.saved_amount / goal_r2.target_amount * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", goal_r2.saved_amount, " / ", goal_r2.target_amount, " coins (", (goal_r2.saved_amount / goal_r2.target_amount * 100).toFixed(0), "%)");
    \u0275\u0275advance();
    \u0275\u0275conditional(goal_r2.status === "active" ? 10 : -1);
  }
}
function ParentGoalsPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ParentGoalsPage_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCreate.set(false));
    });
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275listener("click", function ParentGoalsPage_Conditional_14_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "h2", 22);
    \u0275\u0275text(4, "Create Goal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 23);
    \u0275\u0275listener("ngSubmit", function ParentGoalsPage_Conditional_14_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createGoal());
    });
    \u0275\u0275elementStart(6, "div")(7, "label", 24);
    \u0275\u0275text(8, "Goal Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ParentGoalsPage_Conditional_14_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.goalForm.title, $event) || (ctx_r2.goalForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "label", 24);
    \u0275\u0275text(12, "Target Amount (coins)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ParentGoalsPage_Conditional_14_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.goalForm.target_amount, $event) || (ctx_r2.goalForm.target_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.goalForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.goalForm.target_amount);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.creating());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.creating() ? "Creating..." : "Create Goal");
  }
}
var ParentGoalsPage = class _ParentGoalsPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  goals = signal([], ...ngDevMode ? [{ debugName: "goals" }] : []);
  showCreate = signal(false, ...ngDevMode ? [{ debugName: "showCreate" }] : []);
  creating = signal(false, ...ngDevMode ? [{ debugName: "creating" }] : []);
  goalForm = { title: "", target_amount: 100 };
  contributeAmounts = {};
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.load();
    });
  }
  load() {
    return __async(this, null, function* () {
      const kid = this.auth.selectedKid();
      if (!kid)
        return;
      this.goals.set(yield this.fs.getGoals(kid.id));
    });
  }
  createGoal() {
    return __async(this, null, function* () {
      if (!this.goalForm.title)
        return;
      this.creating.set(true);
      try {
        const kid = this.auth.selectedKid();
        const user = this.auth.firebaseUser();
        if (!kid || !user)
          return;
        yield this.fs.createGoal(user.uid, kid.id, this.goalForm);
        yield this.load();
        this.showCreate.set(false);
        this.goalForm = { title: "", target_amount: 100 };
      } finally {
        this.creating.set(false);
      }
    });
  }
  contribute(goalId) {
    return __async(this, null, function* () {
      const amount = this.contributeAmounts[goalId];
      if (!amount || amount <= 0)
        return;
      const kid = this.auth.selectedKid();
      if (!kid)
        return;
      try {
        yield this.fs.contributeToGoal(goalId, kid.id, amount);
        this.contributeAmounts[goalId] = 0;
        yield this.load();
      } catch (err) {
        alert(err.message);
      }
    });
  }
  static \u0275fac = function ParentGoalsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentGoalsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentGoalsPage, selectors: [["app-parent-goals"]], decls: 15, vars: 3, consts: [[1, "animate-fade-in"], [1, "flex", "items-center", "justify-between", "mb-8"], ["data-testid", "goals-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight"], [1, "text-sm", "mt-1", 2, "color", "var(--fg-muted)"], ["data-testid", "create-goal-btn", 1, "btn-primary", "text-sm", 3, "click"], [1, "card", "p-12", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "p-6"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "font-heading"], [1, "badge", "text-[10px]"], [1, "w-full", "rounded-full", "h-2", "mb-2", 2, "background-color", "var(--muted)"], [1, "h-2", "rounded-full", "bg-primary", "transition-all"], [1, "text-xs", 2, "color", "var(--fg-muted)"], [1, "flex", "gap-2", "mt-3"], ["type", "number", "min", "1", 1, "input", "flex-1", 3, "ngModelChange", "placeholder", "ngModel"], [1, "btn-primary", "text-xs", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "absolute", "inset-0", "bg-black/50"], [1, "card", "p-8", "w-full", "max-w-md", "relative", "z-10", "animate-fade-in", 3, "click"], [1, "text-lg", "font-bold", "font-heading", "mb-6"], [1, "space-y-4", 3, "ngSubmit"], [1, "label"], ["placeholder", "e.g., New bicycle", "name", "title", "data-testid", "goal-title-input", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "name", "target", "data-testid", "goal-target-input", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "submit-goal-btn", 1, "btn-primary", "w-full", "py-3", 3, "disabled"]], template: function ParentGoalsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-parent-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      \u0275\u0275text(5, "Goals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ParentGoalsPage_Template_button_click_8_listener() {
        return ctx.showCreate.set(true);
      });
      \u0275\u0275text(9, "+ New Goal");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, ParentGoalsPage_Conditional_10_Template, 3, 0, "div", 5);
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275repeaterCreate(12, ParentGoalsPage_For_13_Template, 11, 13, "div", 7, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, ParentGoalsPage_Conditional_14_Template, 16, 4, "div", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Savings goals for ", (tmp_0_0 = ctx.auth.selectedKid()) == null ? null : tmp_0_0.name);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.goals().length === 0 ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.goals());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showCreate() ? 14 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, ParentLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentGoalsPage, [{
    type: Component,
    args: [{
      selector: "app-parent-goals",
      standalone: true,
      imports: [CommonModule, FormsModule, ParentLayoutComponent],
      template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h1 class="text-2xl font-bold font-heading tracking-tight" data-testid="goals-heading">Goals</h1>
            <p class="text-sm mt-1" style="color: var(--fg-muted)">Savings goals for {{ auth.selectedKid()?.name }}</p>
          </div>
          <button (click)="showCreate.set(true)" class="btn-primary text-sm" data-testid="create-goal-btn">+ New Goal</button>
        </div>

        @if (goals().length === 0) {
          <div class="card p-12 text-center"><p class="text-sm" style="color: var(--fg-muted)">No goals yet. Create one to start saving!</p></div>
        }

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (goal of goals(); track goal.id) {
            <div class="card p-6" [attr.data-testid]="'goal-' + goal.id">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-semibold font-heading">{{ goal.title }}</h3>
                <span class="badge text-[10px]" [style.background-color]="goal.status === 'completed' ? '#34D39920' : '#FCD34D20'" [style.color]="goal.status === 'completed' ? '#34D399' : '#FCD34D'">{{ goal.status }}</span>
              </div>
              <div class="w-full rounded-full h-2 mb-2" style="background-color: var(--muted)">
                <div class="h-2 rounded-full bg-primary transition-all" [style.width.%]="(goal.saved_amount / goal.target_amount) * 100"></div>
              </div>
              <p class="text-xs" style="color: var(--fg-muted)">{{ goal.saved_amount }} / {{ goal.target_amount }} coins ({{ ((goal.saved_amount / goal.target_amount) * 100).toFixed(0) }}%)</p>
              @if (goal.status === 'active') {
                <div class="flex gap-2 mt-3">
                  <input class="input flex-1" type="number" min="1" [placeholder]="'Amount'" [(ngModel)]="contributeAmounts[goal.id]" [attr.data-testid]="'contribute-input-' + goal.id">
                  <button (click)="contribute(goal.id)" class="btn-primary text-xs" [attr.data-testid]="'contribute-btn-' + goal.id">Save</button>
                </div>
              }
            </div>
          }
        </div>

        @if (showCreate()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="showCreate.set(false)">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="card p-8 w-full max-w-md relative z-10 animate-fade-in" (click)="$event.stopPropagation()">
              <h2 class="text-lg font-bold font-heading mb-6">Create Goal</h2>
              <form (ngSubmit)="createGoal()" class="space-y-4">
                <div><label class="label">Goal Title</label><input class="input" placeholder="e.g., New bicycle" [(ngModel)]="goalForm.title" name="title" data-testid="goal-title-input"></div>
                <div><label class="label">Target Amount (coins)</label><input class="input" type="number" min="1" [(ngModel)]="goalForm.target_amount" name="target" data-testid="goal-target-input"></div>
                <button type="submit" class="btn-primary w-full py-3" [disabled]="creating()" data-testid="submit-goal-btn">{{ creating() ? 'Creating...' : 'Create Goal' }}</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentGoalsPage, { className: "ParentGoalsPage", filePath: "src/app/pages/parent-goals.ts", lineNumber: 66 });
})();
export {
  ParentGoalsPage
};
//# sourceMappingURL=chunk-NX7TPWIY.js.map
